'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"// Import Footer
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Heart, Activity, SplitSquareVertical, BarChart2, LineChart, PieChart } from "lucide-react"

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('sentiment')

  const features = [
    {
      id: 'sentiment',
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Sentiment Analysis",
      description: "Understand user emotions and opinions with our advanced sentiment analysis tools.",
      chart: <PieChart className="w-full h-64" />
    },
    {
      id: 'behavior',
      icon: <Activity className="w-12 h-12 text-primary" />,
      title: "User Behavior Tracking",
      description: "Track and analyze user interactions to optimize your user experience.",
      chart: <LineChart className="w-full h-64" />
    },
    {
      id: 'ab',
      icon: <SplitSquareVertical className="w-12 h-12 text-primary" />,
      title: "A/B Testing",
      description: "Conduct experiments to determine the most effective design and content variations.",
      chart: <BarChart2 className="w-full h-64" />
    }
  ]

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Features</h1>
        
        <div className="flex justify-center mb-8">
          {features.map((feature) => (
            <Button
              key={feature.id}
              variant={activeTab === feature.id ? "default" : "outline"}
              className="mx-2"
              onClick={() => setActiveTab(feature.id)}
            >
              {feature.title}
            </Button>
          ))}
        </div>

        {features.map((feature) => (
          <div key={feature.id} className={activeTab === feature.id ? "block" : "hidden"}>
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>{feature.chart}</CardContent>
            </Card>
          </div>
        ))}
        
        <h2 className="text-3xl font-bold mb-4 text-center">Plan Comparison</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              <TableHead>Free Plan</TableHead>
              <TableHead>Premium Plan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Sentiment Analysis</TableCell>
              <TableCell>Basic</TableCell>
              <TableCell>Advanced</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>User Behavior Tracking</TableCell>
              <TableCell>Limited</TableCell>
              <TableCell>Unlimited</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>A/B Testing</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Included</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Data Retention</TableCell>
              <TableCell>30 days</TableCell>
              <TableCell>1 year</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Support</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>24/7 Priority</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        
        <div className="mt-8 text-center">
          <Link href="/signup">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
        
      </div>
      <Footer />
    </>
  )
}