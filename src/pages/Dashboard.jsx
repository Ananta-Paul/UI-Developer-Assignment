import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MyResponsiveChoropleth } from "../components/ui/nivogeo";
import {
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  Activity,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Tooltip,
  Legend,
} from "recharts";

const kpiData = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    icon: Users,
    trend: "up",
    bg: "bg-[#E3F5FF]",
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    icon: ShoppingCart,
    trend: "down",
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    icon: TrendingUp,
    trend: "up",
    bg: "bg-[#E5ECF6]",
  },
];

const revenueData = [
  { month: "Jan", current: 15000, previous: 12000 },
  { month: "Feb", current: 18000, previous: 14000 },
  { month: "Mar", current: 16000, previous: 16000 },
  { month: "Apr", current: 20000, previous: 18000 },
  { month: "May", current: 22000, previous: 19000 },
  { month: "Jun", current: 25000, previous: 21000 },
];

const projectionsData = [
  { month: "Jan", projections: 15, actuals: 18 },
  { month: "Feb", projections: 20, actuals: 22 },
  { month: "Mar", projections: 18, actuals: 19 },
  { month: "Apr", projections: 25, actuals: 28 },
  { month: "May", projections: 22, actuals: 20 },
  { month: "Jun", projections: 28, actuals: 30 },
];

const locationData = [
  { id: "USA", name: "New York", value: 72000, color: "#3b82f6" },
  { id: "USA", name: "San Francisco", value: 39000, color: "#22c55e" },
  { id: "AUS", name: "Sydney", value: 25000, color: "#f59e0b" },
  { id: "SGP", name: "Singapore", value: 61000, color: "#ef4444" },
];

const topProducts = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

const Sales = [
  { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
  { name: "Sponsored", value: 154.02, color: "#95A4FC" },
  { name: "E-mail", value: 48.96, color: "#B1E3FF" },
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
  { name: "Natali Craig", avatar: "NC" },
  { name: "Drew Cano", avatar: "DC" },
  { name: "Orlando Diggs", avatar: "OD" },
  { name: "Andi Lane", avatar: "AL" },
  { name: "Kate Morrison", avatar: "KM" },
  { name: "Koray Okumus", avatar: "KO" },
];

export default function Dashboard() {
  return (
    <div className="flex gap-4 flex-wrap space-y-6 p-6">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-sm font-bold text-foreground">eCommerce</h1>
      </div>

      {/* KPI Cards */}
      <div className=" w-fit h-fit grid gap-7 grid-cols-2">
        {kpiData.map((kpi, index) => (
          <Card key={index} className={`${kpi?.bg} animate-fade-in w-fit`}>
            <CardContent
              className={`${
                kpi?.bg ? "text-black " : " "
              } p-6 space-y-3 max-w-fit`}
            >
              <p className="text-sm font-semibold ">{kpi.title}</p>
              <div className="flex gap-2 items-center">
                <p className="text-3xl font-bold">{kpi.value}</p>
                <p className={`text-xs flex items-center gap-1 `}>
                  {kpi.change}
                  <TrendingUp
                    className={`h-3 w-3 ${
                      kpi.trend === "down" ? "rotate-180" : ""
                    }`}
                  />
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Projections vs Actuals Chart */}
      <Card className="min-w-[min(100%,400px)]">
        <CardHeader className="text-sm font-semibold">
          Projections vs Actuals
        </CardHeader>

        <CardContent>
          <ResponsiveContainer width={380} height={160}>
            <BarChart data={projectionsData} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" className="text-sm" />
              <YAxis className="text-sm" />
              <Bar
                stackId="a"
                dataKey="projections"
                fill="rgba(168, 197, 218, 1)"
              />
              <Bar
                radius={[5, 5, 0, 0]}
                dataKey="actuals"
                stackId="a"
                fill="rgba(168, 197, 218, .5)"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Revenue Chart */}
      <Card className="min-w-[min(100%,662px)]">
        <div className=" p-6 flex flex-row text-xs items-center gap-4">
          <p className=" text-sm font-semibold">Revenue</p>{" "}
          <p className=" text-black/40 dark:text-white/25">|</p>
          <div className="  flex items-center gap-2 ">
            <p className="h-3 w-3 rounded-full bg-black dark:bg-[#C6C7F8]" />
            Current Week <p className="font-bold">$58,211</p>
          </div>
          <div className=" flex items-center gap-2">
            <p className="h-3 w-3 rounded-full bg-[#A8C5DA]" />
            Previous Week <p className="font-bold">$68,768</p>
          </div>
        </div>
        <CardContent>
          <ResponsiveContainer width="100%" height={230}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" className="text-sm" />
              <YAxis className="text-sm" />
              <Line
                type="monotone"
                dataKey="current"
                strokeDasharray="5 5"
                stroke={
                  document.documentElement.classList.contains("dark")
                    ? "#C6C7F8" // color for dark
                    : "#000000" // light green for light
                }
                strokeWidth={3}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="previous"
                stroke="#A8C5DA"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Revenue by Location */}
      <Card>
        <CardHeader className="text-sm font-semibold">
          Revenue by Location{" "}
        </CardHeader>

        <CardContent>
          <div className="space-y-4 mt-full">
            <MyResponsiveChoropleth data={locationData} />
            {locationData.map((location, index) => (
              <div>
                <div
                  key={index}
                  className="flex py-[2px] text-xs items-center justify-between"
                >
                  <span>{location.name}</span>
                  <span>{(location.value / 1000).toFixed(0)}K</span>
                </div>
                <div className="bg-[#A8C5DA]/40 rounded ">
                  <span
                    style={{ width: `${location.value / 1000}%` }}
                    className=" block border border-[#A8C5DA] rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Selling Products */}
      <Card className="min-w-[min(100%,662px)]">
        <CardHeader className="text-sm font-semibold">
          Top Selling Product
        </CardHeader>

        <CardContent>
          <div className=" text-xs space-y-4">
            <div className="space-y-2 text-black/40 dark:text-white/25">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2  ">
                <span>Name</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Amount</span>
              </div>
              <span className="block w-full h-[1px] bg-black/40 dark:bg-white/25" />
            </div>
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="  grid grid-cols-[2fr_1fr_1fr_1fr] gap-2 "
              >
                <span>{product.name}</span>
                <span>{product.price}</span>
                <span>{product.quantity}</span>
                <span>{product.amount}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="w-[202px] h-[344px]">
        {/* Title */}
        <CardHeader className=" pb-3 text-sm font-bold ">
          Total Sales
        </CardHeader>
        <CardContent>
          {/* Donut chart */}
          <div className="w-full h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={Sales}
                  cx="50%"
                  cy="50%"
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={4}
                  stroke="none"
                >
                  {Sales.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    padding: "4px 8px",
                    background: "rgba(0,0,0,0.75)",
                    color: "#fff",
                    border: "none",
                  }}
                  formatter={(value) => [`$${value.toFixed(2)}`, ""]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="mt-4 space-y-2 w-full">
            {Sales.map((item, index) => (
              <div key={index} className="flex justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span>{item.name}</span>
                </div>
                <span>${item.value.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activities & Contacts */}
    </div>
  );
}
