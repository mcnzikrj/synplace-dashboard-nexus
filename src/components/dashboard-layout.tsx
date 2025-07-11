
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Header } from "./header";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
