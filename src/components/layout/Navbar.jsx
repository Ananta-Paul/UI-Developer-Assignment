import { Bell, Search, Sun, Moon, Menu, PanelRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useRightSidebar } from "@/components/providers/RightSidebarProvider";
import { useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const { toggle } = useRightSidebar();
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean);

  return (
    <header className="relative h-14 border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50 z-[60]">
      <div className="flex h-full items-center gap-4 px-4">
        <SidebarTrigger className="xl:hidden">
          <Menu className="h-5 w-5" />
        </SidebarTrigger>
        <div className="text-sm flex-1 flex items-center gap-3">
          <Star className="h-4 w-4" />
          <p className=" text-muted-foreground">
            Dashboard / {path.length > 0 ? path.join(" / ") : "Home"}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 w-[200px] bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>
          {/* Right Sidebar Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={toggle}
          >
            <PanelRight className="h-4 w-4" />
          </Button>

          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="h-9 w-9 relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full text-[10px] text-primary-foreground flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
