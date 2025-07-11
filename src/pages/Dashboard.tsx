
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, ShoppingCart, Package, DollarSign, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

// Mock data for charts
const salesData = [
  { name: "Jan", mercadoLivre: 4000, shopee: 2400 },
  { name: "Feb", mercadoLivre: 3000, shopee: 1398 },
  { name: "Mar", mercadoLivre: 2000, shopee: 9800 },
  { name: "Apr", mercadoLivre: 2780, shopee: 3908 },
  { name: "May", mercadoLivre: 1890, shopee: 4800 },
  { name: "Jun", mercadoLivre: 2390, shopee: 3800 },
  { name: "Jul", mercadoLivre: 3490, shopee: 4300 },
];

const ordersByMarketplace = [
  { name: "Mercado Livre", orders: 145, color: "#FFE600" },
  { name: "Shopee", orders: 89, color: "#EE4D2D" },
];

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon,
  description 
}: {
  title: string;
  value: string;
  change: string;
  changeType: 'up' | 'down';
  icon: any;
  description?: string;
}) => (
  <Card className="bg-card border-border hover:bg-card/80 transition-colors">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="flex items-center text-xs mt-1">
        {changeType === 'up' ? (
          <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
        ) : (
          <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
        )}
        <span className={changeType === 'up' ? 'text-green-500' : 'text-red-500'}>
          {change}
        </span>
        <span className="text-muted-foreground ml-1">
          {description || 'from last month'}
        </span>
      </div>
    </CardContent>
  </Card>
);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your stores.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-green-500 border-green-500/20">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse-slow"></div>
            2 stores connected
          </Badge>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Revenue"
          value="R$ 45,231"
          change="+20.1%"
          changeType="up"
          icon={DollarSign}
        />
        <MetricCard
          title="Orders Today"
          value="12"
          change="+15%"
          changeType="up"
          icon={ShoppingCart}
          description="from yesterday"
        />
        <MetricCard
          title="Pending Shipments"
          value="8"
          change="-5%"
          changeType="down"
          icon={Package}
          description="from yesterday"
        />
        <MetricCard
          title="Avg. Processing Time"
          value="2.4h"
          change="+12%"
          changeType="down"
          icon={Clock}
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-7">
        {/* Sales Chart */}
        <Card className="lg:col-span-4 bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Sales Overview</CardTitle>
            <CardDescription>
              Monthly sales comparison across marketplaces
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="mercadoLivre" 
                  stroke="#FFE600" 
                  strokeWidth={2}
                  name="Mercado Livre"
                />
                <Line 
                  type="monotone" 
                  dataKey="shopee" 
                  stroke="#EE4D2D" 
                  strokeWidth={2}
                  name="Shopee"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Orders by Marketplace */}
        <Card className="lg:col-span-3 bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Orders by Marketplace</CardTitle>
            <CardDescription>
              This month's orders distribution
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ordersByMarketplace} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                />
                <Bar 
                  dataKey="orders" 
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Connected Stores */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Connected Stores</CardTitle>
          <CardDescription>
            Your integrated marketplace accounts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-card/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-500 font-bold text-lg">ML</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Loja Principal ML</h3>
                  <p className="text-sm text-muted-foreground">Mercado Livre • Connected</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">145 orders</p>
                <p className="text-xs text-muted-foreground">This month</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-card/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-lg">S</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">My Shopee Store</h3>
                  <p className="text-sm text-muted-foreground">Shopee • Connected</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">89 orders</p>
                <p className="text-xs text-muted-foreground">This month</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
