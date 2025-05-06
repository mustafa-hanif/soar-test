import type { IExpenseStats } from "@/api/types";
import expenseStatsData from "@/api/mockData/expenseStats.json";
import ExpensePieChart from "../charts/expensepiechart";

export const ExpenseStats = async () => {
  const expenseStats = expenseStatsData;
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-slate-600">Expense Stats</h2>
      <div className="flex flex-col gap-3 bg-white rounded-xl p-6 h-[322px]">
        <ExpensePieChart />
        {/* {expenseStats.map((stat: IExpenseStats) => (
          <div key={stat.type} className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2">{stat.type}</h3>
              <p>{stat.percent}%</p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};
