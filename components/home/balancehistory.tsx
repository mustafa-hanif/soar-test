import { api } from "@/data";
import { BalanceChart } from "../charts/balancechart";

export const BalanceHistory = async () => {
  const balanceHistory = await api.balanceHistory();
  return (
    <div className="flex flex-col gap-3">
      <h2
        className="text-2xl font-bold text-slate-600"
        id="balance-history-heading"
      >
        Balance History
      </h2>
      <div
        className="flex flex-col gap-3 bg-white rounded-xl p-6 h-[276px]"
        aria-labelledby="balance-history-heading"
      >
        <BalanceChart balanceHistory={balanceHistory.body} />
        <div className="sr-only">
          <p>Monthly balance history chart showing the following values:</p>
          <ul>
            {balanceHistory.body.map((item) => (
              <li key={item.month}>
                {item.month}: ${item.balance}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
