
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { BarChart3, ShoppingCart, Plug, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const items = [
  {
    title: "Painel",
    url: "/",
    icon: BarChart3,
  },
  {
    title: "Pedidos",
    url: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "Integrações",
    url: "/integrations",
    icon: Plug,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getNavClass = (path: string) => {
    const active = isActive(path);
    return active
      ? "bg-primary/10 text-primary border-r-2 border-primary"
      : "text-muted-foreground hover:text-foreground hover:bg-accent/50";
  };

  return (
    <Sidebar className="border-r border-border">
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {!collapsed && "Navegação"}
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full justify-start">
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={`${getNavClass(item.url)} flex items-center px-4 py-2.5 rounded-lg transition-all duration-200`}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && (
                        <span className="ml-3 font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mt-auto p-4">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="h-4 w-4 text-primary" />
                <Badge variant="secondary" className="text-xs">
                  Plano Básico
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Conecte até 1 conta de marketplace
              </p>
              <button className="w-full bg-primary text-primary-foreground text-xs font-medium py-2 rounded-md hover:bg-primary/90 transition-colors">
                Upgrade para Pro
              </button>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
