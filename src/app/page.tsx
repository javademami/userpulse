'use client';

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar"; // Import Navbar
import {
  BarChart2,
  Heart,
  MessageCircle,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* قرار دادن Navbar در اینجا */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unlock the Power of User Experience
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Analyze, understand, and improve your user experience with our cutting-edge platform.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-border p-4 rounded-lg">
                <Heart className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Sentiment Analysis</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Understand user emotions and opinions with our advanced sentiment analysis tools.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-border p-4 rounded-lg">
                <MessageCircle className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">User Feedback</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Collect and analyze user feedback to drive meaningful improvements in your product.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-border p-4 rounded-lg">
                <BarChart2 className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Dashboard Visualization</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Visualize complex data with intuitive and interactive dashboards for better decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  &quot;This platform has revolutionized how we understand our users. Highly recommended!&quot;
                </p>
                <p className="text-sm font-bold">- Sarah J., Product Manager</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  &quot;The insights we&apos;ve gained have directly contributed to a 30% increase in user satisfaction.&quot;
                </p>
                <p className="text-sm font-bold">- Mark T., UX Designer</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  &quot;Easy to use, powerful analytics. It&apos;s become an essential tool in our UX toolkit.&quot;
                </p>
                <p className="text-sm font-bold">- Emily R., CEO</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 UX Analyzer. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="#" aria-label="Github">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
