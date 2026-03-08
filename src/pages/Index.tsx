import { DashboardSidebar } from "@/components/DashboardSidebar";
import { MetricCard } from "@/components/MetricCard";
import { NexusAgentPanel } from "@/components/NexusAgentPanel";
import { SuccessChart, MarketChart, EngagementChart } from "@/components/MiniChart";
import { Trophy, TrendingUp, Activity, Bell } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      {/* Main content — offset for sidebar */}
      <div className="pl-[260px] max-lg:pl-[68px] transition-all duration-300">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 backdrop-blur-sm px-8">
          <div>
            <h1 className="text-lg font-bold text-foreground">Platform Intelligence Center</h1>
            <p className="text-xs text-muted-foreground">Real-time analytics &amp; AI-driven insights</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card hover:bg-secondary transition-colors">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-jso-rose" />
            </button>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              SA
            </div>
          </div>
        </header>

        <main className="p-8 space-y-8">
          {/* Metrics row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard
              title="User Success Rates"
              value="85.2%"
              change="+4.3%"
              changeType="up"
              icon={Trophy}
            >
              <SuccessChart />
            </MetricCard>

            <MetricCard
              title="Job Market Trends"
              value="2,847"
              change="+12.8%"
              changeType="up"
              icon={TrendingUp}
            >
              <MarketChart />
            </MetricCard>

            <MetricCard
              title="Platform Engagement"
              value="5,312"
              change="-2.1%"
              changeType="down"
              icon={Activity}
            >
              <EngagementChart />
            </MetricCard>
          </div>

          {/* AI Agent Panel */}
          <NexusAgentPanel />
        </main>
      </div>
    </div>
  );
};

export default Index;
