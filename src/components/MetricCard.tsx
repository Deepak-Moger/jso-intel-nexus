import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "up" | "down" | "neutral";
  icon: LucideIcon;
  children?: React.ReactNode;
}

export function MetricCard({ title, value, change, changeType, icon: Icon, children }: MetricCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-card p-5 jso-card-glow hover:jso-card-glow-hover transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-1 text-2xl font-bold text-card-foreground">{value}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-sm">
        <span
          className={cn(
            "font-semibold",
            changeType === "up" && "text-jso-emerald",
            changeType === "down" && "text-jso-rose",
            changeType === "neutral" && "text-jso-amber"
          )}
        >
          {change}
        </span>
        <span className="text-muted-foreground">vs last month</span>
      </div>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
