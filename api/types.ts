import { z } from "zod";
import { NavItem } from "./schema";

export type INavItem = z.infer<typeof NavItem>;
