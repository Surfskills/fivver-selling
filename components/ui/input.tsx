"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Responsive, mobile-first input component.
 * Optimized for touch devices, accessibility, and consistent visuals.
 */

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          // 🧭 Base mobile-first styles
          "flex w-full rounded-lg border border-input bg-background text-base text-foreground " +
            "px-4 py-2 shadow-sm transition-all duration-200 " +
            "placeholder:text-muted-foreground " +
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 " +
            "disabled:cursor-not-allowed disabled:opacity-50 " +
            "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground " +
            // 📱 Mobile tweaks
            "h-11 touch-manipulation " +
            // 💻 Larger screens
            "sm:h-10 sm:text-sm sm:px-3 md:h-11 md:text-base",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
