"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Package, 
  Users, 
  ShoppingBag, 
  CreditCard, 
  BarChart4,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { products } from "@/lib/data/products";
import { creators } from "@/lib/data/creators";

// Mock data for recent orders
const recentOrders = [
  {
    id: "ORD-001",
    customer: "Tanaka Hiroshi",
    status: "completed",
    total: 9800,
    date: "2024-05-12",
  },
  {
    id: "ORD-002",
    customer: "Suzuki Akiko",
    status: "processing",
    total: 12500,
    date: "2024-05-10",
  },
  {
    id: "ORD-003",
    customer: "Watanabe Yuki",
    status: "pending",
    total: 3200,
    date: "2024-05-09",
  },
  {
    id: "ORD-004",
    customer: "Smith John",
    status: "shipped",
    total: 7400,
    date: "2024-05-08",
  },
];

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple mock authentication (in a real app, this would be handled by a secure API)
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials. Try admin/password");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-sm">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                For demo purposes, use: admin / password
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥345,670</div>
                <p className="text-xs text-muted-foreground">
                  +18.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Products
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{products.length}</div>
                <p className="text-xs text-muted-foreground">
                  {products.filter(p => p.stock < 5).length} low stock items
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Creators
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{creators.length}</div>
                <p className="text-xs text-muted-foreground">
                  Across {Array.from(new Set(creators.map(c => c.profile))).length} specialties
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Orders
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">
                  3 require shipping today
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Orders */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Recent Orders</CardTitle>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/admin/orders">View All</Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">
                              <div>{order.id}</div>
                              <div className="text-xs text-muted-foreground">{order.date}</div>
                            </TableCell>
                            <TableCell>
                              <div className={`flex items-center`}>
                                <span
                                  className={`h-2 w-2 rounded-full mr-2 ${
                                    order.status === "completed" 
                                      ? "bg-green-500" 
                                      : order.status === "processing" 
                                      ? "bg-blue-500" 
                                      : order.status === "shipped"
                                      ? "bg-purple-500"
                                      : "bg-amber-500"
                                  }`}
                                ></span>
                                <span className="capitalize">{order.status}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">¥{order.total.toLocaleString()}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                
                {/* Recent Products */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Low Stock Products</CardTitle>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/admin/products">View All</Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Stock</TableHead>
                          <TableHead className="text-right">Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {products
                          .filter(product => product.stock < 5)
                          .slice(0, 5)
                          .map((product) => (
                            <TableRow key={product.id}>
                              <TableCell className="font-medium">
                                {product.name}
                              </TableCell>
                              <TableCell>
                                <div className={`flex items-center`}>
                                  <span
                                    className={`h-2 w-2 rounded-full mr-2 ${
                                      product.stock === 0 
                                        ? "bg-red-500" 
                                        : "bg-amber-500"
                                    }`}
                                  ></span>
                                  <span>{product.stock} left</span>
                                </div>
                              </TableCell>
                              <TableCell className="text-right">¥{product.price.toLocaleString()}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {[
                      { 
                        action: "New order received", 
                        details: "Order #ORD-001 from Tanaka Hiroshi", 
                        time: "2 hours ago",
                        icon: <ShoppingBag className="h-5 w-5" />
                      },
                      { 
                        action: "Product updated", 
                        details: "Stock level updated for 'Star Sand Resin Earrings'", 
                        time: "5 hours ago",
                        icon: <Package className="h-5 w-5" />
                      },
                      { 
                        action: "Creator profile updated", 
                        details: "Ayumi Nakamura's profile has been updated", 
                        time: "Yesterday",
                        icon: <Users className="h-5 w-5" />
                      },
                      { 
                        action: "Payment received", 
                        details: "¥12,500 payment for Order #ORD-002", 
                        time: "Yesterday",
                        icon: <CreditCard className="h-5 w-5" />
                      },
                    ].map((activity, idx) => (
                      <div key={idx} className="flex">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                          {activity.icon}
                        </div>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">
                            {activity.details}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Analytics</CardTitle>
                  <CardDescription>
                    View your sales data and trends over time
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <div className="h-full w-full flex items-center justify-center">
                    <BarChart4 className="h-24 w-24 text-muted-foreground/50" />
                    <div className="ml-4">
                      <p className="text-muted-foreground">
                        Detailed analytics dashboard would be implemented here.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Reports</CardTitle>
                  <CardDescription>
                    Download or view reports and export data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["Sales by Product", "Sales by Creator", "Monthly Revenue", "Inventory Status"].map((report) => (
                      <div 
                        key={report}
                        className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50 transition-colors"
                      >
                        <span>{report} Report</span>
                        <Button variant="outline" size="sm" className="ml-auto">
                          Download
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button asChild variant="outline" className="h-auto py-4 justify-start">
              <Link href="/admin/products/new" className="flex flex-col items-center">
                <Package className="h-6 w-6 mb-2" />
                <span>Add New Product</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 justify-start">
              <Link href="/admin/creators/new" className="flex flex-col items-center">
                <Users className="h-6 w-6 mb-2" />
                <span>Add New Creator</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 justify-start">
              <Link href="/admin/orders" className="flex flex-col items-center">
                <ShoppingBag className="h-6 w-6 mb-2" />
                <span>View All Orders</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 justify-start">
              <Link href="/admin/reports" className="flex flex-col items-center">
                <BarChart4 className="h-6 w-6 mb-2" />
                <span>Generate Reports</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}