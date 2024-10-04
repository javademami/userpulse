// src/app/about.tsx
'use client';


import { Navbar } from "@/components/Navbar"; // Import Navbar
import { Footer } from "@/components/Footer"; // Import Footer

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <p className="text-lg text-muted-foreground text-center mb-12">
              At User Experience Analyzer, our mission is to empower businesses with the insights they need to enhance user satisfaction and drive engagement.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <img src="/images/user.jpg" alt="User" className="w-32 h-32 rounded-full mb-2" />
                <h3 className="font-bold">Javad Emami</h3>
                <p className="text-sm text-muted-foreground">CEO & Founder</p>
              </div>
              {/* سایر اعضای تیم */}
              <div className="flex flex-col items-center">
                <img src="/images/user.jpg" alt="User" className="w-32 h-32 rounded-full mb-2" />
                <h3 className="font-bold">Jane Smith</h3>
                <p className="text-sm text-muted-foreground">CTO</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/user.jpg" alt="User" className="w-32 h-32 rounded-full mb-2" />
                <h3 className="font-bold">Emily Johnson</h3>
                <p className="text-sm text-muted-foreground">UX Researcher</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}