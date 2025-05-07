import { initClient } from "@ts-rest/core";
import { main } from "./contracts";

export const api = initClient(main, {
  baseUrl: process.env.BASE_URL + "/api",
  throwOnUnknownStatus: true,
  responseValidation: true,
});
