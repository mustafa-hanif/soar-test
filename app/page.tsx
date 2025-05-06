import { BalanceHistory } from "@/components/home/balancehistory";
import { CreditCards } from "@/components/home/creditcards";
import { ExpenseStats } from "@/components/home/expensestats";
import { FrequentTransfer } from "@/components/home/frequesttransfer";
import { RecentTransactions } from "@/components/home/recenttransactions";
import { WeeklyActivity } from "@/components/home/weeklyactivity";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Soar Finance Dashboard",
  description: "Soar customer finance dashboard",
};

export default async function DashboardHome() {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Suspense>
            <CreditCards />
          </Suspense>
        </div>

        <div className="">
          <Suspense>
            <RecentTransactions />
          </Suspense>
        </div>

        <div className="lg:col-span-2">
          <Suspense>
            <WeeklyActivity />
          </Suspense>
        </div>

        <div>
          <Suspense>
            <ExpenseStats />
          </Suspense>
        </div>

        <div>
          <Suspense>
            <FrequentTransfer />
          </Suspense>
        </div>

        <div className="lg:col-span-2">
          <Suspense>
            <BalanceHistory />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
