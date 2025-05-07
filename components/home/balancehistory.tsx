import { api } from "@/api";
import { BalanceChart } from "../charts/balancechart";

export const BalanceHistory = async () => {
  const balanceHistory = await api.balanceHistory();
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-slate-600">Balance History</h2>
      <div className="flex flex-col gap-3 bg-white rounded-xl p-6 h-[276px]">
        <BalanceChart balanceHistory={balanceHistory.body} />
      </div>
    </div>
  );
};
