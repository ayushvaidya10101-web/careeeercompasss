import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-2xl border bg-card text-card-foreground transition-all duration-300",
  {
    variants: {
      variant: {
        default: "shadow-card hover:shadow-card-hover",
        elevated: "shadow-lg hover:shadow-xl hover:-translate-y-1",
        glow: "shadow-glow hover:shadow-[0_0_60px_hsla(30,90%,50%,0.5)] hover:-translate-y-2",
        outline: "border-2 border-primary/20 hover:border-primary/50 bg-transparent",
        gradient: "bg-gradient-to-br from-card via-card to-muted border-0",
        dark: "bg-brand-dark text-primary-foreground border-primary/20",
        college: "shadow-card hover:shadow-[0_8px_40px_-8px_hsla(30,90%,50%,0.4)] hover:border-orange-400/50 hover:-translate-y-2 border-muted",
        career: "shadow-card hover:shadow-[0_8px_40px_-8px_hsla(30,90%,50%,0.4)] hover:border-orange-400/50 hover:-translate-y-2 border-muted",
        problem: "bg-gradient-to-br from-card to-muted/50 border-primary/10 hover:border-orange-400/40 shadow-lg hover:shadow-[0_8px_30px_-8px_hsla(30,90%,50%,0.3)] hover:-translate-y-1",
        interest: "border-2 border-muted hover:border-orange-400 hover:shadow-[0_0_40px_hsla(30,90%,50%,0.4)] cursor-pointer",
        country: "bg-card hover:bg-muted/50 border-muted hover:border-orange-400/40 hover:shadow-[0_4px_20px_-4px_hsla(30,90%,50%,0.3)] cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-display text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
