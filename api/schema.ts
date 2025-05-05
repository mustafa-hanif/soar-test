import { z } from "zod";

export const NavItem = z.object({
  name: z.string(),
  icon: z.string(),
  href: z.string().optional(),
  enabled: z.boolean().optional(),
});
