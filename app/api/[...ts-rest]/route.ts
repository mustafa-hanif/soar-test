// app/api/navigation/route.js
import navigationData from "@/api/mockData/navigation";
import balanceData from "@/api/mockData/balanceHistory";
import cards from "@/api/mockData/cards";
import weeklyActivity from "@/api/mockData/weeklyActivity";
import transactionsData from "@/api/mockData/recentTransactions";
import expenseStats from "@/api/mockData/expenseStats";
import frequentData from "@/api/mockData/frequentTransfer";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ "ts-rest": string }> }
) {
  const paramValues = await params; // 'a', 'b', or 'c'
  const slug = paramValues?.["ts-rest"]?.[0];
  console.log("slug", slug);
  // const { searchParams } = new URL(request.url);
  switch (slug) {
    case "navigation":
      return Response.json(navigationData);
    case "balance":
      return Response.json(balanceData);
    case "cards":
      return Response.json(cards);
    case "transactions":
      return Response.json(transactionsData);
    case "weekly-activity":
      return Response.json(weeklyActivity);
    case "expense-stats":
      return Response.json(expenseStats);
    case "frequent-transfers":
      return Response.json(frequentData);
    default:
      return new Response("Not Found", { status: 404 });
  }
}
