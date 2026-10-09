import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Stepper({ steps, currentStep, onStepClick }: { steps: readonly string[]; currentStep: number; onStepClick: (step: number) => void }) {
  return (
    <nav aria-label="Assessment progress" className="relative isolate">
      <ol className="grid grid-cols-5 gap-2">
        {steps.map((label, index) => (
          <li key={label} className="relative flex flex-col items-center gap-2">
            {index < steps.length - 1 && <span aria-hidden="true" className={cn("absolute top-5.5 left-[calc(50%+1.5rem)] -z-10 h-px w-[calc(100%-2.5rem)]", index < currentStep ? "bg-primary" : "bg-border")} />}
            <Button type="button" variant={index <= currentStep ? "default" : "outline"} size="icon" className="size-11 rounded-full" disabled={index > currentStep} aria-current={index === currentStep ? "step" : undefined} aria-label={`${label}, step ${index + 1}${index < currentStep ? ", completed" : ""}`} onClick={() => onStepClick(index)}>
              {index < currentStep ? <Check className="size-4" aria-hidden="true" /> : index + 1}
            </Button>
            <span className={cn("hidden text-center text-xs font-medium sm:block", index === currentStep ? "text-primary" : "text-muted-foreground")}>{label}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
