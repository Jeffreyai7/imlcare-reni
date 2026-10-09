import assert from "node:assert/strict";
import { test } from "node:test";
import { assessmentDefaults, assessmentSchema, todayInLagos } from "./assessment-schema.ts";

function validAssessment(overrides = {}) {
  return {
    ...structuredClone(assessmentDefaults),
    fullName: "Sample Patient", age: "70", gender: "Female", phone: "+234 800 000 0000",
    address: "Sample address, Lagos", emergencyName: "Sample Contact", emergencyPhone: "+234 800 000 0001",
    homeReasons: ["Elderly Support"],
    dailyLiving: { eating: "Independent", walking: "Needs Assistance", bathing: "Dependent", dressing: "Needs Assistance", transfer: "Needs Assistance" },
    allergies: "No", oxygen: "No", woundDressing: "No", glucoseTesting: "No", catheterCare: "No", medication: "No",
    frequency: "Daily", careDate: todayInLagos(), preferredTime: "Morning", consent: true,
    ...overrides,
  };
}

function errors(overrides) {
  const result = assessmentSchema.safeParse(validAssessment(overrides));
  assert.equal(result.success, false);
  return result.error.issues.map(issue => issue.path.join("."));
}

test("accepts a complete home care assessment", () => {
  assert.equal(assessmentSchema.safeParse(validAssessment()).success, true);
});

test("requires patient details and a real phone number", () => {
  assert.ok(errors({ fullName: "", age: "131", gender: "", phone: "wrong", emergencyPhone: "12" }).includes("age"));
  assert.ok(errors({ age: "-2" }).includes("age"));
  assert.ok(errors({ phone: "123" }).includes("phone"));
});

test("requires details only when Other or Yes is selected", () => {
  for (const [overrides, path] of [
    [{ homeReasons: ["Other"] }, "otherHome"],
    [{ allergies: "Yes" }, "allergyDetails"],
    [{ woundDressing: "Yes" }, "woundDetails"],
    [{ medication: "Yes" }, "medicationDetails"],
  ]) assert.ok(errors(overrides).includes(path));
  assert.equal(assessmentSchema.safeParse(validAssessment({ allergies: "Yes", allergyDetails: "Sample allergy" })).success, true);
});

test("requires all daily living and health answers for home care", () => {
  assert.ok(errors({ dailyLiving: assessmentDefaults.dailyLiving }).includes("dailyLiving.eating"));
  assert.ok(errors({ oxygen: "" }).includes("oxygen"));
  assert.ok(errors({ homeReasons: [] }).includes("homeReasons"));
});

test("omits frequency requirement for Live-in Care only", () => {
  assert.equal(assessmentSchema.safeParse(validAssessment({ service: "live-in-care", frequency: "" })).success, true);
  assert.ok(errors({ frequency: "" }).includes("frequency"));
});

test("company services require organization details without individual clinical answers", () => {
  const company = { supportType: "Company Services", organizationName: "Sample Company", companyReasons: ["Health Check-up"], homeReasons: [], dailyLiving: assessmentDefaults.dailyLiving, allergies: "", oxygen: "", woundDressing: "", glucoseTesting: "", catheterCare: "", medication: "" };
  assert.equal(assessmentSchema.safeParse(validAssessment(company)).success, true);
  assert.ok(errors({ ...company, organizationName: "" }).includes("organizationName"));
  assert.ok(errors({ ...company, companyReasons: ["Other organizational healthcare needs"] }).includes("otherCompany"));
});

test("rejects past or impossible dates and requires time and consent", () => {
  for (const careDate of ["", "2020-01-01", "2099-02-31", "2099-13-01"]) assert.ok(errors({ careDate }).includes("careDate"));
  assert.ok(errors({ preferredTime: "" }).includes("preferredTime"));
  assert.ok(errors({ consent: false }).includes("consent"));
});

test("calculates care-date boundaries in Lagos rather than the host timezone", () => {
  assert.equal(todayInLagos(new Date("2026-10-08T23:30:00Z")), "2026-10-09");
});
