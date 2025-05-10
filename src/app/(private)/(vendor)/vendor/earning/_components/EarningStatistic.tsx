'use client';
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data for the chart
const data = [
  { name: "Jan", users: 200 },
  { name: "Feb", users: 1502 },
  { name: "Mar", users: 625 },
  { name: "Apr", users: 822 },
  { name: "May", users: 453 },
  { name: "Jun", users: 934 },
  { name: "Jul", users: 1523 },
  { name: "Aug", users: 1324 },
  { name: "Sep", users: 834 },
  { name: "Oct", users: 1256 },
  { name: "Nov", users: 1434 },
  { name: "Dec", users: 305 },
];

// Years for the dropdown
const years = ["2025","2024","2023", "2022", "2021", "2020"];

// Custom tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
        <p className="text-cyan-500 font-medium">
          ${(payload[0].value / 1000).toFixed(1)}K
        </p>
      </div>
    );
  }
  return null;
};

export default function EarningStatistic() {
  const [selectedYear, setSelectedYear] = useState("2023");

  // Calculate summary values (in a real app, these would likely be derived from actual data)
  const totalIncome = "$15,000";
  const monthlyIncome = "$15,000";
  const yearlyIncome = "$15,000";

  return (
    <div className="w-full space-y-6 lg:mt-6 mt-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-cyan-400 text-white py-2">
          <CardContent className="flex flex-col items-center justify-center p-3">
            <h3 className="text-xl font-medium">Total Income</h3>
            <p className="text-2xl font-bold mt-2">{totalIncome}</p>
          </CardContent>
        </Card>

        <Card className="bg-cyan-400 text-white py-2">
          <CardContent className="flex flex-col items-center justify-center p-3">
            <h3 className="text-xl font-medium">Monthly Income</h3>
            <p className="text-2xl font-bold mt-2">{monthlyIncome}</p>
          </CardContent>
        </Card>

        <Card className="bg-cyan-400 text-white py-2">
          <CardContent className="flex flex-col items-center justify-center p-3">
            <h3 className="text-xl font-medium">Yearly Income</h3>
            <p className="text-2xl font-bold mt-2">{yearlyIncome}</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart Section */}
      <div className="relative bg-white p-4 rounded-lg border">
        {/* Year Selector */}
        <div className="absolute top-4 right-4 z-10">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Chart */}
        <div className="mt-7">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="30%" stopColor="#1DC2E1" stopOpacity={1} />
                  <stop offset="100%" stopColor="#F5FCFE" stopOpacity={0.4} />
                </linearGradient>
              </defs>
              <XAxis
                tickMargin={10}
                axisLine={false}
                tickLine={false}
                color="#fff"
                dataKey="name"
                tick={{ fill: "var(--color-text-color)" }}
              />
              <YAxis
                tickMargin={20}
                axisLine={false}
                tickLine={false}
                color="#fff"
                tick={{ fill: "var(--color-text-color)" }}
              />
              <Tooltip />
              <Area
                activeDot={false}
                type="monotone"
                dataKey="users"
                strokeWidth={0}
                stroke="#080E0E"
                fill="url(#color)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
