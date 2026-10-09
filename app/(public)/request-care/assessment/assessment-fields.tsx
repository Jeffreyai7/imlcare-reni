"use client";

import { Controller, useFormContext, type FieldPathByValue } from "react-hook-form";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import type { AssessmentValues } from "@/lib/assessment-schema";
import { cn } from "@/lib/utils";

type TextName = FieldPathByValue<AssessmentValues, string>;

export function AssessmentTextField({ name, label, required = false, multiline = false, type = "text", autoComplete, hint, min }: { name: TextName; label: string; required?: boolean; multiline?: boolean; type?: string; autoComplete?: string; hint?: string; min?: string }) {
  const { control } = useFormContext<AssessmentValues>();
  return <Controller name={name} control={control} render={({ field, fieldState }) => {
    const props = { ...field, id: name, required, autoComplete, "aria-invalid": fieldState.invalid, "aria-describedby": [hint ? `${name}-hint` : "", fieldState.invalid ? `${name}-error` : ""].filter(Boolean).join(" ") || undefined };
    return <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={name}>{label}{required && <span aria-hidden="true" className="text-brand-magenta">*</span>}</FieldLabel>
      {multiline ? <Textarea {...props} rows={3} maxLength={name === "address" ? 500 : 2000} className="min-h-24 resize-y rounded-xl px-3 py-3 text-base" /> : <Input {...props} type={type} min={min} maxLength={type === "tel" ? 30 : name === "age" ? 3 : 150} inputMode={name === "age" ? "numeric" : undefined} className="h-12 rounded-xl px-3 text-base" />}
      {hint && <FieldDescription id={`${name}-hint`}>{hint}</FieldDescription>}
      {fieldState.invalid && <FieldError id={`${name}-error`} errors={[fieldState.error]} />}
    </Field>;
  }} />;
}

export function AssessmentSelectField({ name, label, options, required = false }: { name: TextName; label: string; options: readonly { value: string; label: string }[]; required?: boolean }) {
  const { control } = useFormContext<AssessmentValues>();
  return <Controller name={name} control={control} render={({ field, fieldState }) => <Field data-invalid={fieldState.invalid}>
    <FieldLabel htmlFor={name}>{label}{required && <span aria-hidden="true" className="text-brand-magenta">*</span>}</FieldLabel>
    <NativeSelect {...field} id={name} required={required} aria-invalid={fieldState.invalid} aria-describedby={fieldState.invalid ? `${name}-error` : undefined} className="w-full [&_select]:h-12 [&_select]:rounded-xl [&_select]:px-3 [&_select]:pr-9 [&_select]:text-base">
      <NativeSelectOption value="" disabled>Select an option</NativeSelectOption>
      {options.map(option => <NativeSelectOption key={option.value} value={option.value}>{option.label}</NativeSelectOption>)}
    </NativeSelect>
    {fieldState.invalid && <FieldError id={`${name}-error`} errors={[fieldState.error]} />}
  </Field>} />;
}

export function AssessmentRadioField({ name, label, options, compact = false }: { name: TextName; label: string; options: readonly string[]; compact?: boolean }) {
  const { control } = useFormContext<AssessmentValues>();
  return <Controller name={name} control={control} render={({ field, fieldState }) => <Field data-invalid={fieldState.invalid}>
    <p id={`${name}-label`} className="text-sm font-medium text-foreground">{label} <span aria-hidden="true" className="text-brand-magenta">*</span></p>
    <RadioGroup name={field.name} value={field.value} onValueChange={field.onChange} onBlur={field.onBlur} aria-labelledby={`${name}-label`} aria-invalid={fieldState.invalid} aria-describedby={fieldState.invalid ? `${name}-error` : undefined} className={cn("gap-3", compact ? "flex flex-wrap" : "grid sm:grid-cols-2")}>
      {options.map((option, index) => <label key={option} htmlFor={`${name}-${index}`} className={cn("flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/50", compact && "min-w-24", field.value === option ? "border-primary bg-secondary text-primary" : "border-input text-body-text hover:bg-muted")}>
        <RadioGroupItem ref={index === 0 ? field.ref : undefined} id={`${name}-${index}`} value={option} aria-invalid={fieldState.invalid} /><span>{option}</span>
      </label>)}
    </RadioGroup>
    {fieldState.invalid && <FieldError id={`${name}-error`} errors={[fieldState.error]} />}
  </Field>} />;
}

export function AssessmentCheckboxField({ name, label, options }: { name: "homeReasons" | "companyReasons"; label: string; options: readonly string[] }) {
  const { control } = useFormContext<AssessmentValues>();
  return <Controller name={name} control={control} render={({ field, fieldState }) => <Field data-invalid={fieldState.invalid}>
    <p id={`${name}-label`} className="text-sm font-medium text-foreground">{label} <span aria-hidden="true" className="text-brand-magenta">*</span></p>
    <div role="group" aria-labelledby={`${name}-label`} aria-describedby={fieldState.invalid ? `${name}-error` : undefined} className="grid gap-3 sm:grid-cols-2">
      {options.map((option, index) => {
        const checked = (field.value as string[]).includes(option);
        return <label key={option} htmlFor={`${name}-${index}`} className={cn("flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm leading-relaxed has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/50", checked ? "border-primary bg-secondary text-primary" : "border-input text-body-text hover:bg-muted")}>
          <Checkbox ref={index === 0 ? field.ref : undefined} id={`${name}-${index}`} checked={checked} onBlur={field.onBlur} aria-invalid={fieldState.invalid} onCheckedChange={value => field.onChange(value ? [...field.value, option] : field.value.filter(item => item !== option))} /><span>{option}</span>
        </label>;
      })}
    </div>
    {fieldState.invalid && <FieldError id={`${name}-error`} errors={[fieldState.error]} />}
  </Field>} />;
}
