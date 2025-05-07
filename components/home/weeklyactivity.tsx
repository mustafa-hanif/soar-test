import { api } from "@/data";
import { WeeklyChart } from "../charts/weeklychart";

export const WeeklyActivity = async () => {
  const weeklyActivity = await api.weeklyActivity();
  return (
    <div className="flex flex-col gap-3">
      <h2
        className="text-2xl font-bold text-slate-600"
        id="weekly-activity-heading"
      >
        Weekly Activity
      </h2>
      <div
        className="flex flex-col gap-3 bg-white rounded-xl p-6 h-[322px]"
        aria-labelledby="weekly-activity-heading"
      >
        <WeeklyChart weeklyActivity={weeklyActivity.body} />
        <div className="sr-only">
          <p>
            Weekly activity bar chart showing deposits and withdrawals for each
            day:
          </p>
          <ul>
            {weeklyActivity.body.map((day) => (
              <li key={day.day}>
                {day.day}: Deposit ${day.deposit}, Withdraw ${day.withdraw}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
