import { initClient } from "@ts-rest/core";
import { main } from "./contracts";

export const api = initClient(main, {
  baseUrl: "http://localhost:3000/api",
  throwOnUnknownStatus: true,
  responseValidation: true,
});
