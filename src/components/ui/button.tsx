import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-white/10 bg-white/5 text-slate-200 shadow-sm hover:bg-white/10 hover:text-white",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-white/10",
        ghost: "hover:bg-white/5 hover:text-white",
        link: "text-cyan-400 underline-offset-4 hover:underline",
        hero: "bg-cyan-500 text-slate-950 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-400",
        cyber: "border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 shadow-sm hover:bg-cyan-500/20 hover:border-cyan-500/50",
        gold: "bg-gold text-slate-950 font-semibold shadow-sm hover:brightness-105",
        onteal:
          "border border-white/10 bg-white/5 text-white backdrop-blur hover:bg-white/10",
        emerald: "bg-emerald text-white shadow-sm hover:brightness-105",
        danger: "bg-crimson text-white shadow-sm hover:brightness-110",
      },
      size: {
        xl: "h-12 rounded-lg px-8 text-base",
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
