import { WeeklyChart } from "../charts/weeklychart";

export const WeeklyActivity = async () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-slate-600">Weekly Activity</h2>
      <div className="flex flex-col gap-3 bg-white rounded-xl p-6 h-[322px]">
        <WeeklyChart />
      </div>
    </div>
  );
};
