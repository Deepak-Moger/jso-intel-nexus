import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  ResponsiveContainer, Tooltip, CartesianGrid, XAxis, YAxis,
} from "recharts";

const successData = [
  { m: "Jan", v: 62 }, { m: "Feb", v: 68 }, { m: "Mar", v: 65 }, { m: "Apr", v: 72 },
  { m: "May", v: 78 }, { m: "Jun", v: 82 }, { m: "Jul", v: 79 }, { m: "Aug", v: 85 },
];

const marketData = [
  { m: "Jan", v: 40 }, { m: "Feb", v: 55 }, { m: "Mar", v: 48 }, { m: "Apr", v: 62 },
  { m: "May", v: 70 }, { m: "Jun", v: 58 }, { m: "Jul", v: 75 }, { m: "Aug", v: 88 },
];

const engagementData = [
  { m: "Jan", v: 3200 }, { m: "Feb", v: 3800 }, { m: "Mar", v: 3500 }, { m: "Apr", v: 4100 },
  { m: "May", v: 4600 }, { m: "Jun", v: 4200 }, { m: "Jul", v: 4900 }, { m: "Aug", v: 5300 },
];

const tooltipStyle = {
  fontSize: 12,
  borderRadius: 8,
  border: "1px solid hsl(215 20% 90%)",
  backgroundColor: "hsl(0 0% 100%)",
  boxShadow: "0 4px 12px -2px hsl(215 28% 10% / 0.1)",
};

const gridProps = {
  strokeDasharray: "3 3",
  stroke: "hsl(215 20% 90%)",
  vertical: false,
};

export function SuccessChart() {
  return (
    <ResponsiveContainer width="100%" height={120}>
      <AreaChart data={successData} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
        <defs>
          <linearGradient id="successGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(160, 84%, 40%)" stopOpacity={0.4} />
            <stop offset="50%" stopColor="hsl(160, 84%, 40%)" stopOpacity={0.1} />
            <stop offset="100%" stopColor="hsl(160, 84%, 40%)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid {...gridProps} />
        <XAxis dataKey="m" tick={{ fontSize: 10, fill: "hsl(215 14% 50%)" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10, fill: "hsl(215 14% 50%)" }} axisLine={false} tickLine={false} domain={[50, 90]} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area
          type="monotone"
          dataKey="v"
          stroke="hsl(160, 84%, 40%)"
          fill="url(#successGrad)"
          strokeWidth={2.5}
          dot={{ r: 3, fill: "hsl(160, 84%, 40%)", stroke: "hsl(0 0% 100%)", strokeWidth: 2 }}
          activeDot={{ r: 5, fill: "hsl(160, 84%, 40%)", stroke: "hsl(0 0% 100%)", strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function MarketChart() {
  return (
    <ResponsiveContainer width="100%" height={120}>
      <BarChart data={marketData} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
        <defs>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(217, 91%, 50%)" stopOpacity={1} />
            <stop offset="100%" stopColor="hsl(217, 91%, 65%)" stopOpacity={0.6} />
          </linearGradient>
        </defs>
        <CartesianGrid {...gridProps} />
        <XAxis dataKey="m" tick={{ fontSize: 10, fill: "hsl(215 14% 50%)" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10, fill: "hsl(215 14% 50%)" }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "hsl(215 20% 94% / 0.6)" }} />
        <Bar dataKey="v" fill="url(#barGrad)" radius={[4, 4, 0, 0]} barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function EngagementChart() {
  return (
    <ResponsiveContainer width="100%" height={120}>
      <LineChart data={engagementData} margin={{ top: 5, right: 5, bottom: 0, left: -10 }}>
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(38, 92%, 50%)" />
            <stop offset="100%" stopColor="hsl(28, 92%, 55%)" />
          </linearGradient>
        </defs>
        <CartesianGrid {...gridProps} />
        <XAxis dataKey="m" tick={{ fontSize: 10, fill: "hsl(215 14% 50%)" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10, fill: "hsl(215 14% 50%)" }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line
          type="monotone"
          dataKey="v"
          stroke="url(#lineGrad)"
          strokeWidth={2.5}
          dot={{ r: 3, fill: "hsl(38, 92%, 50%)", stroke: "hsl(0 0% 100%)", strokeWidth: 2 }}
          activeDot={{ r: 6, fill: "hsl(38, 92%, 50%)", stroke: "hsl(0 0% 100%)", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
