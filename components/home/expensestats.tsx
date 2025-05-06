import expenseStatsData from "@/api/mockData/expenseStats.json";
import ExpensePieChart from "../charts/expensepiechart";

export const ExpenseStats = async () => {
  const expenseStats = expenseStatsData;
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-slate-600">Expense Stats</h2>
      <div className="flex flex-col gap-3 bg-white rounded-xl h-[322px]">
        <ExpensePieChart expenseStats={expenseStats} />
      </div>
    </div>
  );
};
