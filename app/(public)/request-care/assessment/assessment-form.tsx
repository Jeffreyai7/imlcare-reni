"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm, useWatch, type FieldPath } from "react-hook-form";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, MessageCircle, Pencil } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Stepper } from "@/components/ui/stepper";
import { assessmentDefaults, assessmentSchema, careServices, companyReasons, dailyActivities, frequencies, healthQuestions, homeReasons, independenceLevels, preferredTimes, todayInLagos, type AssessmentValues } from "@/lib/assessment-schema";
import { cn } from "@/lib/utils";
import { AssessmentCheckboxField, AssessmentRadioField, AssessmentSelectField, AssessmentTextField } from "./assessment-fields";

const steps = ["Patient Info", "Care Needs", "Daily Living", "Health", "Schedule"] as const;
const titles = ["Tell us about the person who needs care", "What type of support are you looking for?", "Daily Living & Independence", "Health & Care Information", "When would you like care to begin?"];
const descriptions = ["Please provide the patient's details and someone we can contact in an emergency.", "Choose the support that best describes your needs. You can select more than one reason.", "Help us understand how much assistance is currently needed.", "Tell us about the care requirements our team should know about.", "Share your preferred schedule. Our team will confirm availability before care begins."];
const stepFields: FieldPath<AssessmentValues>[][] = [
  ["fullName", "age", "gender", "phone", "address", "emergencyName", "emergencyPhone"],
  ["supportType", "service", "homeReasons", "companyReasons", "otherHome", "otherCompany", "organizationName"],
  ["dailyLiving"],
  ["allergies", "allergyDetails", "oxygen", "woundDressing", "woundDetails", "glucoseTesting", "catheterCare", "medication", "medicationDetails"],
  ["frequency", "careDate", "preferredTime"],
];

function ReviewSection({ title, onEdit, children }: { title: string; onEdit: () => void; children: ReactNode }) {
  return <section className="rounded-xl border border-border p-5 sm:p-6">
    <div className="mb-4 flex items-center justify-between gap-3">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <Button type="button" variant="outline" onClick={onEdit} aria-label={`Edit ${title}`} className="gap-2"><Pencil className="size-3.5" aria-hidden="true" />Edit</Button>
    </div>
    {children}
  </section>;
}

function Summary({ items }: { items: { label: string; value: string }[] }) {
  return <dl className="grid gap-4 sm:grid-cols-2">
    {items.map(item => <div key={item.label} className="min-w-0"><dt className="text-xs font-medium text-muted-foreground">{item.label}</dt><dd className="mt-1 whitespace-pre-wrap wrap-anywhere text-sm leading-relaxed text-body-text">{item.value || "Not provided"}</dd></div>)}
  </dl>;
}

export default function AssessmentForm() {
  const form = useForm<AssessmentValues>({ resolver: zodResolver(assessmentSchema), defaultValues: assessmentDefaults, mode: "onTouched", shouldUnregister: false });
  const values = useWatch({ control: form.control }) as AssessmentValues;
  const [step, setStep] = useState(0);
  const [editing, setEditing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [stepError, setStepError] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const isCompany = values.supportType === "Company Services";
  const liveIn = !isCompany && values.service === "live-in-care";
  const review = step === 5;

  function moveTo(nextStep: number) {
    setStep(nextStep);
    setStepError(false);
    requestAnimationFrame(() => {
      headingRef.current?.focus({ preventScroll: true });
      panelRef.current?.scrollIntoView({ block: "start", behavior: "auto" });
    });
  }

  function edit(index: number) {
    setEditing(true);
    moveTo(index);
  }

  async function navigate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!review) {
      const valid = await form.trigger(stepFields[step], { shouldFocus: true });
      if (!valid) { setStepError(true); return; }
      moveTo(editing ? 5 : step + 1);
      setEditing(false);
      return;
    }
    await form.handleSubmit(() => {
      // UI preview only: do not persist, log or transmit assessment data.
      form.reset(assessmentDefaults);
      setSubmitted(true);
      requestAnimationFrame(() => headingRef.current?.focus());
    }, () => {
      const invalidStep = stepFields.findIndex(names => names.some(name => form.getFieldState(name).invalid));
      if (invalidStep >= 0) { setEditing(true); moveTo(invalidStep); }
      setStepError(true);
    })();
  }

  if (submitted) return <section aria-labelledby="assessment-success-heading" className="mx-auto max-w-2xl rounded-2xl border border-border bg-card px-6 py-12 text-center sm:px-10">
    <CheckCircle2 className="mx-auto size-14 text-success" strokeWidth={1.5} aria-hidden="true" />
    <h2 id="assessment-success-heading" ref={headingRef} tabIndex={-1} className="mt-6 text-3xl font-semibold tracking-tight text-foreground outline-none">Thank you.</h2>
    <p className="mt-4 text-lg font-medium text-foreground">Your care request preview is complete.</p>
    <p className="mt-4 text-base leading-relaxed text-muted-foreground">This is a preview. Your information has not been saved or sent, and no care request has been received. Chat with our team to discuss the next steps.</p>
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <a href="https://wa.me/2348113677288" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), "h-12 gap-2 rounded-xl px-6")}><MessageCircle className="size-4" aria-hidden="true" />Chat With Us on WhatsApp</a>
      <Link href="/" className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-xl px-6")}>Return Home</Link>
    </div>
  </section>;

  return <FormProvider {...form}>
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 rounded-xl border border-primary/15 bg-secondary px-4 py-3 text-sm leading-relaxed text-secondary-foreground"><strong>UI preview.</strong> Please use sample information. Nothing is saved or sent. Refreshing this page or completing the preview clears your answers.</div>
      <div ref={panelRef} className="scroll-mt-28 rounded-2xl border border-border bg-card p-5 sm:p-8">
        <Stepper steps={steps} currentStep={step} onStepClick={index => { if (review) edit(index); else moveTo(index); }} />
        <div className="mt-7 border-t border-border pt-7">
          <p aria-live="polite" className="text-xs font-semibold tracking-[0.12em] text-primary">{review ? "REVIEW YOUR ASSESSMENT" : `STEP ${step + 1} OF 5, ${steps[step].toUpperCase()}`}</p>
          <h2 ref={headingRef} tabIndex={-1} className="mt-3 scroll-mt-28 text-2xl leading-tight font-semibold tracking-tight text-foreground outline-none sm:text-3xl">{review ? "Please check your information" : titles[step]}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{review ? "Review each section before completing the preview. You can edit any of your answers." : descriptions[step]}</p>
          {!review && <p className="mt-2 text-xs text-muted-foreground">Fields marked <span className="text-brand-magenta">*</span> are required.</p>}
        </div>
        <form noValidate onSubmit={navigate} className="mt-7" autoComplete="off">
          <div className="space-y-7">
            {step === 0 && <>
              <AssessmentTextField name="fullName" label="Full Name" required />
              <div className="grid gap-6 sm:grid-cols-2"><AssessmentTextField name="age" label="Age" required /><AssessmentSelectField name="gender" label="Gender" required options={["Female", "Male", "Other", "Prefer not to say"].map(value => ({ value, label: value }))} /></div>
              <AssessmentTextField name="phone" label="Phone Number" type="tel" required />
              <AssessmentTextField name="address" label="Home Address" required multiline />
              <div className="grid gap-6 sm:grid-cols-2"><AssessmentTextField name="emergencyName" label="Emergency Contact Name" required /><AssessmentTextField name="emergencyPhone" label="Emergency Contact Phone" type="tel" required /></div>
            </>}
            {step === 1 && <>
              <AssessmentRadioField name="supportType" label="Type of support" options={["Home Care", "Company Services"]} />
              {isCompany ? <>
                <AssessmentTextField name="organizationName" label="Organization Name" required />
                <AssessmentCheckboxField name="companyReasons" label="Which services does your organization need?" options={companyReasons} />
                {values.companyReasons.includes("Other organizational healthcare needs") && <AssessmentTextField name="otherCompany" label="Please tell us more" multiline required />}
              </> : <>
                <AssessmentSelectField name="service" label="Preferred care service" options={careServices} />
                <AssessmentCheckboxField name="homeReasons" label="What is the reason for care?" options={homeReasons} />
                {values.homeReasons.includes("Other") && <AssessmentTextField name="otherHome" label="Please tell us more" multiline required />}
              </>}
            </>}
            {step === 2 && (isCompany ? <p className="rounded-xl bg-muted p-5 text-sm leading-relaxed text-muted-foreground">Daily living information applies to individual home care. You do not need to provide it for a company service enquiry. Continue to the next step.</p> : <>
              <div className="hidden grid-cols-[1.4fr_repeat(3,1fr)] gap-3 border-b border-border pb-3 text-center text-xs font-medium text-muted-foreground md:grid"><span className="text-left">Activity</span>{independenceLevels.map(level => <span key={level}>{level}</span>)}</div>
              <div className="divide-y divide-border">
                {dailyActivities.map(activity => <Controller key={activity.value} name={`dailyLiving.${activity.value}`} control={form.control} render={({ field, fieldState }) => <Field data-invalid={fieldState.invalid} className="py-5">
                  <div className="md:grid md:grid-cols-[1.4fr_3fr] md:items-center md:gap-3">
                    <p id={`${field.name}-label`} className="mb-3 text-sm font-medium text-foreground md:mb-0">{activity.label}</p>
                    <RadioGroup name={field.name} value={field.value} onValueChange={field.onChange} onBlur={field.onBlur} aria-labelledby={`${field.name}-label`} aria-invalid={fieldState.invalid} aria-describedby={fieldState.invalid ? `${field.name}-error` : undefined} className="grid grid-cols-3 gap-3">
                      {independenceLevels.map((level, index) => <label key={level} htmlFor={`${field.name}-${index}`} className={cn("flex min-h-14 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border px-1 py-2 text-center text-xs md:min-h-11 md:border-transparent", field.value === level ? "border-primary bg-secondary text-primary" : "border-input text-muted-foreground hover:bg-muted")}>
                        <RadioGroupItem ref={index === 0 ? field.ref : undefined} id={`${field.name}-${index}`} value={level} /><span className="md:sr-only">{level}</span>
                      </label>)}
                    </RadioGroup>
                  </div>
                  {fieldState.invalid && <FieldError id={`${field.name}-error`} errors={[fieldState.error]} />}
                </Field>} />)}
              </div>
            </>)}
            {step === 3 && (isCompany ? <p className="rounded-xl bg-muted p-5 text-sm leading-relaxed text-muted-foreground">Individual health information is not required for company services. Our team will discuss your organization&apos;s needs with you.</p> : <>
              {healthQuestions.map(question => <div key={question.value} className="space-y-4 border-b border-border pb-6 last:border-0">
                <AssessmentRadioField name={question.value} label={question.label} options={["No", "Yes"]} compact />
                {question.value === "allergies" && values.allergies === "Yes" && <AssessmentTextField name="allergyDetails" label="Please specify any food, drug or other allergies" multiline required />}
                {question.value === "woundDressing" && values.woundDressing === "Yes" && <AssessmentTextField name="woundDetails" label="Describe the wound or care requirement" multiline required />}
                {question.value === "medication" && values.medication === "Yes" && <AssessmentTextField name="medicationDetails" label="Please list known medications" multiline required />}
              </div>)}
            </>)}
            {step === 4 && <>
              {liveIn ? <p className="rounded-xl bg-secondary p-4 text-sm text-secondary-foreground">You&apos;ve selected Live-in Care. A visit frequency is not needed for this service.</p> : <AssessmentRadioField name="frequency" label="Frequency" options={frequencies} />}
              <div className="grid gap-6 sm:grid-cols-2"><AssessmentTextField name="careDate" label="Intended Care Date" type="date" min={todayInLagos()} required /><AssessmentSelectField name="preferredTime" label="Preferred Time" required options={preferredTimes.map(value => ({ value, label: value }))} /></div>
              <p className="text-sm leading-relaxed text-muted-foreground">Your requested date is subject to availability and confirmation.</p>
            </>}
            {review && <>
              <ReviewSection title="Patient Details" onEdit={() => edit(0)}><Summary items={[{ label: "Full Name", value: values.fullName }, { label: "Age", value: values.age }, { label: "Gender", value: values.gender }, { label: "Phone", value: values.phone }, { label: "Home Address", value: values.address }, { label: "Emergency Contact", value: `${values.emergencyName}, ${values.emergencyPhone}` }]} /></ReviewSection>
              <ReviewSection title="Reason for Care" onEdit={() => edit(1)}><Summary items={[
                { label: "Support Type", value: values.supportType },
                { label: isCompany ? "Organization" : "Care Service", value: isCompany ? values.organizationName : careServices.find(service => service.value === values.service)?.label ?? "Not sure yet" },
                { label: "Support Needed", value: (isCompany ? values.companyReasons : values.homeReasons).join(", ") },
                ...((isCompany ? values.companyReasons.includes("Other organizational healthcare needs") : values.homeReasons.includes("Other")) ? [{ label: "Additional Details", value: isCompany ? values.otherCompany : values.otherHome }] : []),
              ]} /></ReviewSection>
              <ReviewSection title="Daily Living" onEdit={() => edit(2)}>{isCompany ? <p className="text-sm text-muted-foreground">Not applicable for company services.</p> : <Summary items={dailyActivities.map(activity => ({ label: activity.label, value: values.dailyLiving[activity.value] }))} />}</ReviewSection>
              <ReviewSection title="Health Information" onEdit={() => edit(3)}>{isCompany ? <p className="text-sm text-muted-foreground">Not applicable for company services.</p> : <Summary items={healthQuestions.map(question => ({ label: question.label, value: values[question.value] + (question.value === "allergies" && values.allergies === "Yes" ? `, ${values.allergyDetails}` : question.value === "woundDressing" && values.woundDressing === "Yes" ? `, ${values.woundDetails}` : question.value === "medication" && values.medication === "Yes" ? `, ${values.medicationDetails}` : "") }))} />}</ReviewSection>
              <ReviewSection title="Requested Schedule" onEdit={() => edit(4)}><Summary items={[{ label: "Frequency", value: liveIn ? "Live-in Care" : values.frequency }, { label: "Intended Care Date", value: values.careDate ? new Intl.DateTimeFormat("en-GB", { timeZone: "UTC", day: "2-digit", month: "long", year: "numeric" }).format(new Date(`${values.careDate}T00:00:00Z`)) : "" }, { label: "Preferred Time", value: values.preferredTime }]} /><p className="mt-4 text-xs text-muted-foreground">Subject to availability and confirmation.</p></ReviewSection>
              <Controller name="consent" control={form.control} render={({ field, fieldState }) => <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="assessment-consent" className="flex w-full items-start gap-3 text-sm leading-relaxed"><Checkbox ref={field.ref} id="assessment-consent" checked={field.value} onCheckedChange={field.onChange} onBlur={field.onBlur} aria-invalid={fieldState.invalid} aria-describedby={fieldState.invalid ? "consent-error" : undefined} className="mt-1 shrink-0" /><span>I have permission to provide this information and agree that Impact Lives Care may contact me about this request.</span></FieldLabel>
                {fieldState.invalid && <FieldError id="consent-error" errors={[fieldState.error]} />}
                <p className="text-xs leading-relaxed text-muted-foreground">The final privacy policy will be available before online submissions open. This preview does not send your information.</p>
              </Field>} />
            </>}
          </div>
          {stepError && <p role="alert" className="mt-5 text-sm text-destructive">Please check the highlighted fields before continuing.</p>}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
            {step > 0 ? <Button type="button" variant="outline" onClick={() => { setEditing(false); moveTo(step - 1); }} className="h-12 gap-2 rounded-xl px-5"><ArrowLeft className="size-4" aria-hidden="true" />Back</Button> : <Link href="/request-care" className="rounded-sm text-sm font-medium text-muted-foreground underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">Back to Request Care</Link>}
            <Button type="submit" variant="emphasis" className="h-12 gap-2 rounded-xl px-5" disabled={form.formState.isSubmitting}>{review ? "Submit Assessment" : editing ? "Save & Return to Review" : step === 4 ? "Review Assessment" : "Continue"}{review ? <ClipboardCheck className="size-4" aria-hidden="true" /> : <ArrowRight className="size-4" aria-hidden="true" />}</Button>
          </div>
        </form>
      </div>
    </div>
  </FormProvider>;
}
