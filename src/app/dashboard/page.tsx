'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Overview } from "@/components/Overview.jsx"
import { RecentSales } from "@/components/RecentSales.jsx"
import { Footer } from "@/components/Footer"; // Import Footer
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  BarChart2, 
  PieChart as PieChartIcon, 
  TrendingUp 
} from 'lucide-react'

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: Users, label: 'User Insights', href: '/dashboard/user-insights' },
  { icon: FileText, label: 'Reports', href: '/dashboard/reports' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

export default function DashboardPage() {
  const [dateRange, setDateRange] = useState('7d')

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-muted p-4">
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary p-2 rounded-lg hover:bg-accent"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>
            <div className="flex items-center space-x-4">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
              <Button>Export Report</Button>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard title="User Engagement" value="78%" icon={BarChart2} />
            <MetricCard title="Sentiment Score" value="8.5" icon={PieChartIcon} />
            <MetricCard title="Conversion Rate" value="12.3%" icon={TrendingUp} />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>User Engagement Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <Overview />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent User Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
          
        </main>
        
      </div>
      <Footer />
    </div>

    
  )
}

function MetricCard({ title, value, icon: Icon }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}