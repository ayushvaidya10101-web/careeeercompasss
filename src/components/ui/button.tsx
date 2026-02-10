import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-[0_0_50px_hsla(217,91%,53%,0.6)] hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "bg-gradient-to-r from-brand-blue to-brand-purple text-primary-foreground shadow-glow hover:from-orange-500 hover:via-orange-400 hover:to-amber-500 hover:shadow-[0_0_60px_hsla(30,90%,50%,0.7)] hover:-translate-y-1 transition-all duration-500",
        glowCyan: "bg-gradient-to-r from-brand-cyan to-brand-blue text-primary-foreground shadow-glow-cyan hover:from-orange-500 hover:via-orange-400 hover:to-amber-500 hover:shadow-[0_0_60px_hsla(30,90%,50%,0.7)] hover:-translate-y-1 transition-all duration-500",
        glowPurple: "bg-gradient-to-r from-brand-purple to-brand-pink text-primary-foreground shadow-glow-purple hover:from-orange-500 hover:via-orange-400 hover:to-amber-500 hover:shadow-[0_0_60px_hsla(30,90%,50%,0.7)] hover:-translate-y-1 transition-all duration-500",
        hero: "bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink text-primary-foreground shadow-glow hover:from-orange-500 hover:via-orange-400 hover:to-amber-500 hover:shadow-[0_0_80px_hsla(30,90%,50%,0.8)] hover:-translate-y-1.5 font-bold transition-all duration-500",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-2xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
