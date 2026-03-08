import { LayoutDashboard, Users, ShieldCheck, KeyRound, Zap, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { label: "User Dashboard", icon: LayoutDashboard, active: false },
  { label: "HR Consultants", icon: Users, active: false },
  { label: "Super Admin", icon: ShieldCheck, active: true },
  { label: "Licensing", icon: KeyRound, active: false },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-[68px]" : "w-[260px]"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary">
          <Zap className="h-4 w-4 text-primary-foreground" />
        </div>
        {!collapsed && (
          <div className="jso-fade-in">
            <span className="text-lg font-bold text-sidebar-accent-foreground tracking-tight">JSO</span>
            <span className="ml-1.5 text-[10px] font-medium uppercase tracking-widest text-sidebar-muted">Admin</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {!collapsed && (
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-sidebar-muted">
            Navigation
          </p>
        )}
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              item.active
                ? "bg-sidebar-accent text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <item.icon
              className={cn(
                "h-[18px] w-[18px] shrink-0",
                item.active ? "text-primary" : "text-sidebar-muted group-hover:text-sidebar-accent-foreground"
              )}
            />
            {!collapsed && <span>{item.label}</span>}
            {item.active && !collapsed && (
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
            )}
          </button>
        ))}
      </nav>

      {/* Collapse toggle */}
      <div className="border-t border-sidebar-border p-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex w-full items-center justify-center rounded-lg py-2 text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          <ChevronLeft
            className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")}
          />
        </button>
      </div>
    </aside>
  );
}
