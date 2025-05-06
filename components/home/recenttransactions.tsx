import transactionsData from "@/api/mockData/recentTransactions.json";
import { IRecentTransaction } from "@/api/types";
import { Transaction } from "./transaction";

export const RecentTransactions = async () => {
  const transactions = transactionsData;
  return (
    <div className="flex flex-col gap-3 w-full">
      <h2 className="text-2xl font-bold text-slate-600">Recent Transactions</h2>
      <div className="flex flex-col gap-3 bg-white rounded-xl p-6">
        {transactions.map((transaction: IRecentTransaction) => (
          <Transaction key={transaction.date} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};
