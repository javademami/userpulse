'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { BarChart2, PieChart as PieChartIcon, TrendingUp } from 'lucide-react';
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from '@clerk/nextjs';
import { Footer } from "@/components/Footer"; 

// ثبت مقیاس‌ها و اجزا
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const sidebarItems = [
  { icon: BarChart2, label: 'Overview', href: '/dashboard' },
  { icon: PieChartIcon, label: 'User Insights', href: '/dashboard/user-insights' },
  { icon: TrendingUp, label: 'Reports', href: '/dashboard/reports' },
];

const UserInsightsPage = () => {
  const [dateRange, setDateRange] = useState('7d');
  const { user } = useUser(); // اطلاعات کاربر احراز هویت‌شده را بگیرید

  // داده‌های هاردکد شده
  const userEngagementData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'User Engagement (%)',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const conversionRateData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Conversion Rate (%)',
        data: [30, 25, 35, 40, 45, 50],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgb(153, 102, 255)',
        borderWidth: 1,
      },
    ],
  };

  const sentimentAnalysisData = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        label: 'Sentiment Analysis',
        data: [60, 25, 15],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 205, 86, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const demographicData = {
    labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
    datasets: [
      {
        label: 'Age Distribution',
        data: [25, 35, 20, 10, 10],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(255, 205, 86, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
      },
    ],
  };

  const geographicData = {
    labels: ['USA', 'UK', 'Germany', 'India', 'Canada'],
    datasets: [
      {
        label: 'Geographic Distribution',
        data: [40, 20, 15, 10, 15],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 205, 86, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(75, 192, 192, 0.6)'],
      },
    ],
  };

  const deviceData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        label: 'Device Usage',
        data: [60, 30, 10],
        backgroundColor: ['rgba(255, 205, 86, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(153, 102, 255, 0.6)'],
      },
    ],
  };

  const browserData = {
    labels: ['Chrome', 'Firefox', 'Safari', 'Edge', 'Other'],
    datasets: [
      {
        label: 'Browser Usage',
        data: [65, 15, 10, 5, 5],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
      },
    ],
  };

  return (
    <SignedIn>
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

          {/* Main Content */}
          <main className="flex-1 p-8 grid grid-cols-3 gap-6">
            {/* ستون ۱: نمودارها */}
            <div className="col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>User Engagement Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <Line data={userEngagementData} />
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Conversion Rate Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <Bar data={conversionRateData} />
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Sentiment Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <Doughnut data={sentimentAnalysisData} />
                </CardContent>
              </Card>

              {/* Demographics */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Age Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <Doughnut data={demographicData} />
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <Doughnut data={geographicData} />
                </CardContent>
              </Card>
            </div>

            {/* ستون ۲: کارت‌های متریک */}
            <div className="space-y-6">
              <MetricCard title="User Engagement" value="78%" icon={BarChart2} />
              <MetricCard title="Sentiment Score" value="8.5" icon={PieChartIcon} />
              <MetricCard title="Conversion Rate" value="12.3%" icon={TrendingUp} />

              {/* Device Insights */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Device Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <Doughnut data={deviceData} />
                </CardContent>
              </Card>

              {/* Browser Insights */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Browser Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <Doughnut data={browserData} />
                </CardContent>
              </Card>
            </div>
            
          </main>
          
        </div>
        <Footer />
      </div>
      
    </SignedIn>
    
  );
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
    
  );
  
}

const UserInsightsPageWithRedirect = () => (
  <SignedOut>
    <RedirectToSignIn />
  </SignedOut>
);

export default function UserInsightsPageWrapper() {
  return (
    <>
      <UserInsightsPage />
      <UserInsightsPageWithRedirect />
    </>
  );
}
