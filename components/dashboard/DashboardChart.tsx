"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


interface DashboardChartProps {
  data?: {
    title: string;
    value: string | number;
  }[];
}


export default function DashboardChart({
  data = [],
}: DashboardChartProps) {


  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        rounded-2xl
        p-6
      "
    >

      <h2 className="mb-5 font-bold">
        نمودار
      </h2>


      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart data={data}>

          <XAxis dataKey="title" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
          />

        </LineChart>

      </ResponsiveContainer>


    </div>
  );
}