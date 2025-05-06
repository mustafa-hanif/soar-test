import { WeeklyChart } from "../charts/weeklychart";
import weeklyActivityData from "@/api/mockData/weeklyActivity.json";

export const WeeklyActivity = async () => {
  const weeklyActivity = weeklyActivityData;
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-slate-600">Weekly Activity</h2>
      <div className="flex flex-col gap-3 bg-white rounded-xl p-6 h-[322px]">
        <WeeklyChart weeklyActivity={weeklyActivity} />
      </div>
    </div>
  );
};
