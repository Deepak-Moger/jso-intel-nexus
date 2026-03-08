import { AreaChart, Area, BarChart, Bar, LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

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

export function SuccessChart() {
  return (
    <ResponsiveContainer width="100%" height={80}>
      <AreaChart data={successData}>
        <defs>
          <linearGradient id="successGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(160, 84%, 40%)" stopOpacity={0.3} />
            <stop offset="100%" stopColor="hsl(160, 84%, 40%)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid hsl(215,20%,90%)' }} />
        <Area type="monotone" dataKey="v" stroke="hsl(160, 84%, 40%)" fill="url(#successGrad)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function MarketChart() {
  return (
    <ResponsiveContainer width="100%" height={80}>
      <BarChart data={marketData}>
        <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid hsl(215,20%,90%)' }} />
        <Bar dataKey="v" fill="hsl(217, 91%, 50%)" radius={[3, 3, 0, 0]} opacity={0.8} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function EngagementChart() {
  return (
    <ResponsiveContainer width="100%" height={80}>
      <LineChart data={engagementData}>
        <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid hsl(215,20%,90%)' }} />
        <Line type="monotone" dataKey="v" stroke="hsl(38, 92%, 50%)" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
