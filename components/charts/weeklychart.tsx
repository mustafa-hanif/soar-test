"use client";

import { IWeeklyActivity } from "@/api/types";
import { useClient } from "@/hooks/useClient";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const WeeklyChart = ({
  weeklyActivity,
}: {
  weeklyActivity: IWeeklyActivity[];
}) => {
  const clientOnly = useClient();
  return clientOnly ? (
    <ResponsiveContainer>
      <BarChart
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        barGap={10}
        data={weeklyActivity}
      >
        <CartesianGrid vertical={false} strokeDasharray="1" />
        <XAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#718EBF" }}
          dataKey="day"
        />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend
          align="right"
          verticalAlign="top"
          iconType="circle"
          wrapperStyle={{ paddingBottom: 10 }}
        />
        <Bar
          barSize={15}
          radius={[10, 10, 0, 0]}
          dataKey="deposit"
          fill="#232323"
        />
        <Bar
          barSize={12}
          radius={[10, 10, 0, 0]}
          dataKey="withdraw"
          fill="#396AFF"
        />
      </BarChart>
    </ResponsiveContainer>
  ) : null;
};
