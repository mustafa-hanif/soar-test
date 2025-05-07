import { api } from "@/data";
import ExpensePieChart from "../charts/expensepiechart";

export const ExpenseStats = async () => {
  const expenseStats = await api.expenseStats();
  return (
    <div className="flex flex-col gap-3">
      <h2
        className="text-2xl font-bold text-slate-600"
        id="expense-stats-heading"
      >
        Expense Stats
      </h2>
      <div
        className="flex flex-col gap-3 bg-white rounded-xl h-[322px]"
        aria-labelledby="expense-stats-heading"
      >
        <ExpensePieChart expenseStats={expenseStats.body} />
        <div className="sr-only">
          <p>
            Expense distribution pie chart showing the following categories:
          </p>
          <ul>
            {expenseStats.body.map((stat) => (
              <li key={stat.type}>
                {stat.type}: {stat.percent}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
