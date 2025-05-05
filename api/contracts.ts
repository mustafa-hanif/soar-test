import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { NavItem } from "./schema";

const c = initContract();

export const main = c.router(
  {
    navigation: {
      method: "GET",
      path: "/navigation",
      responses: {
        200: z.array(NavItem),
      },
    },
  },
  {
    strictStatusCodes: true,
  }
);
