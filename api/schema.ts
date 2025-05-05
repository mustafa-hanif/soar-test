import { z } from "zod";

export const NavItem = z.object({
  name: z.string(),
  icon: z.string(),
  enabled: z.boolean().optional(),
});
