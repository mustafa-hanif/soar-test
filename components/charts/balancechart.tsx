"use client";

import { IBalanceHistory } from "@/api/types";
import { useClient } from "@/hooks/useClient";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const BalanceChart = ({
  balanceHistory,
}: {
  balanceHistory: IBalanceHistory[];
}) => {
  const clientOnly = useClient();
  return clientOnly ? (
    <ResponsiveContainer>
      <AreaChart
        data={balanceHistory}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2D60FF80" stopOpacity={0.7} />
            <stop offset="95%" stopColor="#2D60FF80" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="balance"
          stroke="#2D60FF80"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  ) : null;
};
