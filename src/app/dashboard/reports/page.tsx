'use client'; // Specify that this component is a Client Component

import { useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar'; // Import the Navbar component
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { LayoutDashboard, Users, FileText, Settings } from 'lucide-react';
import { Chart, registerables } from 'chart.js';
import { Footer } from "@/components/Footer"; 

// Register Chart.js components
Chart.register(...registerables);

const ReportsPage = () => {
  // Dummy data for demonstration
  const userEngagementData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'User Engagement',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }],
  };

  const demographicsData = {
    labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
    datasets: [{
      data: [30, 50, 15, 10, 5],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF'
      ],
    }],
  };

  const deviceUsageData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [{
      data: [60, 30, 10],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }],
  };

  useEffect(() => {
    // Optionally, you can fetch data from an API or perform any setup here
  }, []);

  return (
    <SignedIn>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar /> {/* Add Navbar here */}

        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 min-h-screen bg-muted p-4">
            <nav className="space-y-2">
              <Link 
                href="/dashboard" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary p-2 rounded-lg hover:bg-accent"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
              <Link 
                href="/dashboard/user-insights" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary p-2 rounded-lg hover:bg-accent"
              >
                <Users className="w-5 h-5" />
                <span>User Insights</span>
              </Link>
              <Link 
                href="/dashboard/reports" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary p-2 rounded-lg hover:bg-accent"
              >
                <FileText className="w-5 h-5" />
                <span>Reports</span>
              </Link>
              <Link 
                href="/dashboard/settings" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary p-2 rounded-lg hover:bg-accent"
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-8">
            <h1 className="text-3xl font-bold mb-8">Reports</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* User Engagement Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>User Engagement Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <Bar data={userEngagementData} options={{ responsive: true }} />
                </CardContent>
              </Card>

              {/* User Demographics Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>User Demographics</CardTitle>
                </CardHeader>
                <CardContent>
                  <Pie data={demographicsData} />
                </CardContent>
              </Card>

              {/* Device Usage Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Device Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <Pie data={deviceUsageData} />
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </SignedIn>
  );
};

// این کامپوننت برای هدایت کاربران غیروارد به صفحه ورود
const ReportsPageWithRedirect = () => (
  <SignedOut>
    <RedirectToSignIn />
  </SignedOut>
);

// کامپوننت اصلی که شامل دو بخش است
export default function ReportsPageWrapper() {
  return (
    <>
      <ReportsPage />
      <ReportsPageWithRedirect />
    </>
  );
}