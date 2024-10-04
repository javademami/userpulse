'use client'; // Specify that this component is a Client Component

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar'; // Import the Navbar component
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { Footer } from "@/components/Footer"; 

const sidebarItems = [
  { label: 'Overview', href: '/dashboard' },
  { label: 'User Insights', href: '/dashboard/user-insights' },
  { label: 'Reports', href: '/dashboard/reports' },
  { label: 'Settings', href: '/dashboard/settings' },
];

export default function SettingsPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  return (
    <div className="min-h-screen bg-background">
      <Navbar /> {/* Add Navbar here */}

      <SignedIn>
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
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-8">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Notifications Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <span className="mr-4">Enable Notifications</span>
                    {/* Custom Switch */}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={notificationsEnabled} 
                        onChange={() => setNotificationsEnabled(!notificationsEnabled)} 
                      />
                      <div 
                        className={`w-11 h-6 rounded-full peer bg-gray-300 ${notificationsEnabled ? 'bg-blue-600' : ''} transition`}
                      >
                        <span 
                          className={`absolute w-4 h-4 bg-white rounded-full transition-transform ${notificationsEnabled ? 'transform translate-x-5' : 'translate-x-1'}`}
                        ></span>
                      </div>
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* Theme Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Theme</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Language Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Language</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fa">فارسی</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>

            {/* Save Button in Center */}
            <div className="flex justify-center">
              <Button onClick={() => alert('Settings saved!')}>Save Changes</Button>
            </div>
          </main>
          
        </div>
        <Footer />
      </SignedIn>

      {/* Redirect to sign-in if user is not logged in */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
