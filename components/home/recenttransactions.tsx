import { IRecentTransaction } from "@/api/types";
import { Transaction } from "./transaction";
import { api } from "@/api";

export const RecentTransactions = async () => {
  const transactions = await api.transactions();
  return (
    <div className="flex flex-col gap-3 w-full">
      <h2
        className="text-2xl font-bold text-slate-600"
        id="recent-transactions-heading"
      >
        Recent Transactions
      </h2>
      <div
        className="flex flex-col gap-3 bg-white rounded-xl p-6"
        aria-labelledby="recent-transactions-heading"
      >
        <ul className="list-none p-0 m-0">
          {transactions.body.map((transaction: IRecentTransaction) => (
            <li key={transaction.date}>
              <Transaction transaction={transaction} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
