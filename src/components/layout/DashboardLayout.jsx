import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Navbar } from "./Navbar";
import { RightSidebarProvider } from "@/components/providers/RightSidebarProvider";
import RightSidebar from "./RightSidebar";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <RightSidebarProvider>
        <div className="min-h-screen flex w-full bg-background relative">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="overflow-auto">{children}</main>
          </div>
          <RightSidebar />
        </div>
      </RightSidebarProvider>
    </SidebarProvider>
  );
}
