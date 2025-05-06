"use client";
import type { IExpenseStats } from "@/api/types";

import { useClient } from "@/hooks/useClient";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const COLORS = ["#232323", "#FC7900", "#343C6A", "#396AFF"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  name: string;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <text
        x={x}
        y={y}
        fill="white"
        fontWeight={700}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${percent}%`}
      </text>
      <text
        x={x - 35}
        y={y + 20}
        fill="white"
        fontWeight={700}
        textAnchor={"center"}
        dominantBaseline="central"
      >
        {name}
      </text>
    </>
  );
};

const ExpensePieChart = ({
  expenseStats,
}: {
  expenseStats: IExpenseStats[];
}) => {
  const clientOnly = useClient();
  return clientOnly ? (
    <ResponsiveContainer>
      <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Pie
          data={expenseStats}
          dataKey="percent"
          nameKey="type"
          paddingAngle={5}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
        >
          {expenseStats.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  ) : null;
};

export default ExpensePieChart;
