import { z } from "zod";

export const homeReasons = ["Elderly Support", "Recovery After Hospital Discharge", "Recovery After Surgery", "Stroke Recovery", "Disability Support", "Dementia", "Palliative Care", "Diabetes", "Hypertension", "Heart Failure", "Other"] as const;
export const companyReasons = ["Healthcare Education", "Health Check-up", "Community Outreach", "Other organizational healthcare needs"] as const;
export const careServices = [
  { value: "unsure", label: "Not sure yet" },
  { value: "nurse-home-visits", label: "Nurse Home Visits" },
  { value: "caregiver-visits", label: "Caregiver Visits" },
  { value: "physiotherapy", label: "Physiotherapy" },
  { value: "hospital-escort-services", label: "Hospital Escort Services" },
  { value: "lab-sample-collection", label: "Lab Sample Collection" },
  { value: "live-in-care", label: "Live-in Care" },
  { value: "medical-consultations", label: "Medical Consultations" },
] as const;
export const dailyActivities = [
  { value: "eating", label: "Eating" },
  { value: "walking", label: "Walking" },
  { value: "bathing", label: "Bathing" },
  { value: "dressing", label: "Dressing" },
] as const;
export const independenceLevels = ["Independent", "Needs Assistance", "Dependent"] as const;
export const healthQuestions = [
  { value: "allergies", label: "Does the client have any allergies?" },
  { value: "oxygen", label: "Is the client currently using oxygen?" },
  { value: "woundDressing", label: "Is wound dressing required?" },
  { value: "glucoseTesting", label: "Is blood glucose testing required?" },
  { value: "catheterCare", label: "Is catheter care required?" },
  { value: "medication", label: "Is the client currently taking medication?" },
] as const;
export const frequencies = ["One Time", "Daily", "Weekly", "Monthly"] as const;
export const preferredTimes = ["Morning", "Afternoon", "Evening", "Night"] as const;

export function todayInLagos(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Lagos", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(date);
  return ["year", "month", "day"].map(type => parts.find(part => part.type === type)?.value).join("-");
}

const phone = z.string().trim().min(1, "Enter a phone number.").refine(value => /^[+\d\s()\-]+$/.test(value) && value.replace(/\D/g, "").length >= 7 && value.replace(/\D/g, "").length <= 15, "Enter a valid phone number with 7 to 15 digits.");
const details = z.string().trim().max(2000, "Please use 2,000 characters or fewer.");
const yesNo = z.enum(["", "No", "Yes"]);
const independence = z.enum(["", ...independenceLevels]);

export const assessmentSchema = z.object({
  fullName: z.string().trim().min(2, "Enter the patient's full name.").max(150),
  age: z.string().trim().regex(/^\d{1,3}$/, "Enter an age between 0 and 130.").refine(value => Number(value) <= 130, "Enter an age between 0 and 130."),
  gender: z.enum(["", "Female", "Male", "Other", "Prefer not to say"]),
  phone,
  address: z.string().trim().min(5, "Enter the home address.").max(500),
  emergencyName: z.string().trim().min(2, "Enter the emergency contact's name.").max(150),
  emergencyPhone: phone,
  supportType: z.enum(["Home Care", "Company Services"]),
  service: z.enum(careServices.map(service => service.value)),
  homeReasons: z.array(z.enum(homeReasons)),
  companyReasons: z.array(z.enum(companyReasons)),
  otherHome: details,
  otherCompany: details,
  organizationName: z.string().trim().max(200),
  dailyLiving: z.object({ eating: independence, walking: independence, bathing: independence, dressing: independence, transfer: independence }),
  allergies: yesNo,
  allergyDetails: details,
  oxygen: yesNo,
  woundDressing: yesNo,
  woundDetails: details,
  glucoseTesting: yesNo,
  catheterCare: yesNo,
  medication: yesNo,
  medicationDetails: details,
  frequency: z.enum(["", ...frequencies]),
  careDate: z.string(),
  preferredTime: z.enum(["", ...preferredTimes]),
  consent: z.boolean(),
}).superRefine((data, ctx) => {
  const issue = (path: (string | number)[], message: string) => ctx.addIssue({ code: "custom", path, message });
  if (!data.gender) issue(["gender"], "Select a gender option.");
  if (data.supportType === "Home Care") {
    if (!data.homeReasons.length) issue(["homeReasons"], "Choose at least one reason for care.");
    if (data.homeReasons.includes("Other") && !data.otherHome) issue(["otherHome"], "Please tell us more about the support needed.");
    for (const activity of dailyActivities) {
      if (!data.dailyLiving[activity.value]) issue(["dailyLiving", activity.value], "Select the level of assistance needed.");
    }
    for (const question of healthQuestions) {
      if (!data[question.value]) issue([question.value], "Choose Yes or No.");
    }
    if (data.allergies === "Yes" && !data.allergyDetails) issue(["allergyDetails"], "Please specify the allergies.");
    if (data.woundDressing === "Yes" && !data.woundDetails) issue(["woundDetails"], "Describe the wound or care requirement.");
    if (data.medication === "Yes" && !data.medicationDetails) issue(["medicationDetails"], "List known medications.");
  } else {
    if (!data.organizationName) issue(["organizationName"], "Enter your organization's name.");
    if (!data.companyReasons.length) issue(["companyReasons"], "Choose at least one company service.");
    if (data.companyReasons.includes("Other organizational healthcare needs") && !data.otherCompany) issue(["otherCompany"], "Please describe your organization's needs.");
  }
  if (!(data.supportType === "Home Care" && data.service === "live-in-care") && !data.frequency) issue(["frequency"], "Choose a care frequency.");
  const date = new Date(`${data.careDate}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.careDate) || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== data.careDate) {
    issue(["careDate"], "Choose a valid care date.");
  } else if (data.careDate < todayInLagos()) {
    issue(["careDate"], "Choose today or a future date.");
  }
  if (!data.preferredTime) issue(["preferredTime"], "Choose a preferred time.");
  if (!data.consent) issue(["consent"], "Please confirm permission before completing the preview.");
});

export type AssessmentValues = z.infer<typeof assessmentSchema>;

export const assessmentDefaults: AssessmentValues = {
  fullName: "", age: "", gender: "", phone: "", address: "", emergencyName: "", emergencyPhone: "",
  supportType: "Home Care", service: "unsure", homeReasons: [], companyReasons: [], otherHome: "", otherCompany: "", organizationName: "",
  dailyLiving: { eating: "", walking: "", bathing: "", dressing: "", transfer: "" },
  allergies: "", allergyDetails: "", oxygen: "", woundDressing: "", woundDetails: "", glucoseTesting: "", catheterCare: "", medication: "", medicationDetails: "",
  frequency: "", careDate: "", preferredTime: "", consent: false,
};
