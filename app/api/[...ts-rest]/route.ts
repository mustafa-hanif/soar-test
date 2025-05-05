import { main } from "@/api/contracts";
import { createNextHandler } from "@ts-rest/serverless/next";
import navigationData from "@/api/mockData/navigation.json";

const handler = createNextHandler(
  main,
  {
    navigation: async () => {
      return {
        status: 200,
        body: navigationData,
      };
    },
  },
  {
    basePath: "/api",
    jsonQuery: true,
    responseValidation: true,
    handlerType: "app-router",
  }
);

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
  handler as OPTIONS,
};
