import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-scifi-border bg-scifi-bg-secondary px-3 py-2 text-sm ring-offset-background placeholder:text-scifi-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scifi-cyan focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-scifi-cyan transition-all duration-300 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

