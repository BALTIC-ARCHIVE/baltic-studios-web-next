import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        ausstehend: "text-black/60 bg-yellow-400",
        einladung: "text-black/60 bg-[#3CBB31]",
        testprojekt: "text-black/60 bg-purple-400",
        feeback: "text-black/60 bg-purple-400",
        angenommen: "text-black/60 bg-green-400",
        abgelehnt: "text-black/60 bg-red-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const ApplyStatus = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
ApplyStatus.displayName = "ApplyStatus";

const ApplyStatusTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "mb-1 font-medium text-[32px] text-center leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
ApplyStatusTitle.displayName = "AlerApplyStatusTitle";

const ApplyStatusDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
ApplyStatusDescription.displayName = "ApplyStatusDescription";

export { ApplyStatus, ApplyStatusTitle, ApplyStatusDescription };
