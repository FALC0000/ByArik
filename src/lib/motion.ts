import type { Easing } from "framer-motion";

/**
 * Typed easing constants for Framer Motion.
 * Using `as const` ensures TypeScript infers the literal type
 * instead of the broader `string` type, fixing TS2322 build errors.
 */
export const ease = {
  out: "easeOut" as Easing,
  in: "easeIn" as Easing,
  inOut: "easeInOut" as Easing,
  linear: "linear" as Easing,
} as const;
