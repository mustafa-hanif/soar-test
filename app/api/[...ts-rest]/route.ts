import { main } from "@/api/contracts";
import { createNextHandler } from "@ts-rest/serverless/next";
import navigationData from "@/api/mockData/navigation.json";
import balanceData from "@/api/mockData/balanceHistory.json";
import cards from "@/api/mockData/cards.json";
import weeklyActivity from "@/api/mockData/weeklyActivity.json";
import transactionsData from "@/api/mockData/recentTransactions.json";
import expenseStats from "@/api/mockData/expenseStats.json";
import frequentData from "@/api/mockData/frequentTransfer.json";

export const dynamic = "force-dynamic";

const handler = createNextHandler(
  main,
  {
    navigation: async () => {
      return {
        status: 200,
        body: navigationData,
      };
    },
    balanceHistory: async () => {
      return {
        status: 200,
        body: balanceData,
      };
    },
    cards: async () => {
      return {
        status: 200,
        body: cards,
      };
    },
    transactions: async () => {
      return {
        status: 200,
        body: transactionsData,
      };
    },
    weeklyActivity: async () => {
      return {
        status: 200,
        body: weeklyActivity,
      };
    },
    expenseStats: async () => {
      return {
        status: 200,
        body: expenseStats,
      };
    },
    frequentTransfer: async () => {
      return {
        status: 200,
        body: frequentData,
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
