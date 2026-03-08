import { Bot, AlertTriangle, TrendingUp, Lightbulb, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface Insight {
  id: number;
  type: "alert" | "trend" | "suggestion";
  timestamp: string;
  title: string;
  message: string;
}

const insights: Insight[] = [
  {
    id: 1,
    type: "alert",
    timestamp: "2 min ago",
    title: "Engagement Drop Detected",
    message:
      "Alert: 15% drop in engagement on the Licensing page. Recommendation: Simplify the renewal UI and add progress indicators to reduce user friction.",
  },
  {
    id: 2,
    type: "trend",
    timestamp: "18 min ago",
    title: "Agentic AI Skills Demand Spike",
    message:
      "Trend Detected: Spike in demand for Agentic AI skills. Suggesting automated skill-gap emails to 400 matched users across 12 enterprise accounts.",
  },
  {
    id: 3,
    type: "suggestion",
    timestamp: "1 hr ago",
    title: "Onboarding Optimization",
    message:
      "Insight: Users who complete the Career DNA assessment within 48 hours show 3.2x higher retention. Recommend triggering a nudge email at the 24-hour mark.",
  },
  {
    id: 4,
    type: "alert",
    timestamp: "3 hrs ago",
    title: "Anomaly in HR Consultant Activity",
    message:
      "Alert: 8 HR consultant accounts show zero logins for 14+ days. Auto-generated re-engagement campaign queued for review.",
  },
];

const typeConfig = {
  alert: { icon: AlertTriangle, color: "text-jso-rose", bg: "bg-jso-rose/10", border: "border-jso-rose/20" },
  trend: { icon: TrendingUp, color: "text-jso-emerald", bg: "bg-jso-emerald/10", border: "border-jso-emerald/20" },
  suggestion: { icon: Lightbulb, color: "text-jso-amber", bg: "bg-jso-amber/10", border: "border-jso-amber/20" },
};

export function NexusAgentPanel() {
  return (
    <div className="rounded-xl border border-border bg-card jso-card-glow overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border px-6 py-4">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
          <Bot className="h-5 w-5 text-primary" />
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-card bg-jso-emerald jso-ai-pulse" />
        </div>
        <div>
          <h2 className="text-base font-semibold text-card-foreground">JSO Nexus Agent Insights</h2>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            <Zap className="h-3 w-3" />
            Predictive Intelligence Feed — Live
          </p>
        </div>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-jso-emerald/10 px-2.5 py-1 text-xs font-medium text-jso-emerald">
          <span className="h-1.5 w-1.5 rounded-full bg-jso-emerald jso-ai-pulse" />
          Active
        </span>
      </div>

      {/* Insights feed */}
      <div className="divide-y divide-border max-h-[420px] overflow-y-auto">
        {insights.map((insight, i) => {
          const cfg = typeConfig[insight.type];
          const Icon = cfg.icon;
          return (
            <div
              key={insight.id}
              className="flex gap-4 px-6 py-4 hover:bg-secondary/40 transition-colors jso-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={cn("mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border", cfg.bg, cfg.border)}>
                <Icon className={cn("h-4 w-4", cfg.color)} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-card-foreground">{insight.title}</span>
                  <span className="text-[11px] text-muted-foreground">{insight.timestamp}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{insight.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
