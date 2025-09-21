import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Bell, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRightSidebar } from "@/components/providers/RightSidebarProvider";
import { cn } from "@/lib/utils";

// Sample data - you can move this to a separate file or fetch from API
const notifications = [
  {
    id: 1,
    title: "New order received",
    message: "Order #1234 from John Doe",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    title: "Payment processed",
    message: "Payment of $299.99 confirmed",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    title: "Inventory alert",
    message: "Product XYZ is running low",
    time: "3 hours ago",
    unread: false,
  },
  {
    id: 4,
    title: "Weekly report",
    message: "Your weekly sales report is ready",
    time: "1 day ago",
    unread: false,
  },
];

const activities = [
  { user: "You have a bug that needs...", time: "Just now", type: "bug" },
  { user: "Released a new version", time: "59 minutes ago", type: "release" },
  { user: "Submitted a bug", time: "12 hours ago", type: "bug" },
  {
    user: "Modified A data in Page X",
    time: "Today, 11:59 AM",
    type: "modify",
  },
  { user: "Deleted a page in Project X", time: "Feb 2, 2023", type: "delete" },
];

const contacts = [
  { name: "Natali Craig", avatar: "NC", status: "online" },
  { name: "Drew Cano", avatar: "DC", status: "away" },
  { name: "Orlando Diggs", avatar: "OD", status: "online" },
  { name: "Andi Lane", avatar: "AL", status: "offline" },
  { name: "Kate Morrison", avatar: "KM", status: "online" },
  { name: "Koray Okumus", avatar: "KO", status: "away" },
];

export default function RightSidebar() {
  const { isOpen, close } = useRightSidebar();

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={close}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-14 right-0 h-[calc(100vh-3.5rem)] w-80 bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-base font-semibold">Notifications</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={close}
              className="lg:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Notifications Section */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Bell className="h-4 w-4" />
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex gap-3 p-2 rounded-lg hover:bg-muted/50"
                    >
                      <div
                        className={cn(
                          "w-2 h-2 rounded-full mt-2",
                          notification.unread ? "bg-primary" : "bg-muted"
                        )}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">
                          {notification.title}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activities Section */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Activity className="h-4 w-4" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                        <Activity className="h-4 w-4" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-xs font-medium">{activity.user}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contacts Section */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Team Contacts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {contacts.map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50"
                    >
                      <div className="relative">
                        <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xs font-medium">
                          {contact.avatar}
                        </div>
                        <div
                          className={cn(
                            "absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background",
                            contact.status === "online" && "bg-green-500",
                            contact.status === "away" && "bg-yellow-500",
                            contact.status === "offline" && "bg-gray-400"
                          )}
                        />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-medium">
                          {contact.name}
                        </span>
                        <p className="text-xs text-muted-foreground capitalize">
                          {contact.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
