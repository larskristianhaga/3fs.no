import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Register the custom font family from globals.css @theme so twMerge doesn't treat it as a font weight
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      font: ["heading"],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
