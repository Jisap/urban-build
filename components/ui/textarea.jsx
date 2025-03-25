import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    (<textarea
      data-slot="textarea"
      className={cn(
        "border-border bg-white focus:border-accent text-primary text-base placeholder:text-secondary placeholder:text-base aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3.5 py-4 transition-[color,box-shadow] outline-none  disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props} />)
  );
}

export { Textarea }
