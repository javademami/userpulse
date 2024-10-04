'use client';

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react"; // Import آیکن‌ها
import { useEffect, useState } from "react";
// Import Clerk components
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // const { user } = useUser(); // دریافت اطلاعات کاربر از Clerk

  // استفاده از useEffect برای اطمینان از اینکه تم فقط در سمت کلاینت تنظیم می‌شود
  useEffect(() => {
    setMounted(true);
  }, []);

  // اگر کامپوننت هنوز در سمت کلاینت مونت نشده است، رندر نمی‌کند
  if (!mounted) return null;

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link className="flex items-center justify-center" href="/">
        <span className="ml-2 text-lg font-semibold">UX Analyzer</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/pricing">
          Pricing
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
          About Us
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
          Contact
        </Link>
      </nav>
      
      <Button
        variant="ghost"
        size="icon"
        className="ml-4"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5" /> // آیکن خورشید در حالت دارک
        ) : (
          <Moon className="h-5 w-5" /> // آیکن ماه در حالت لایت
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* نمایش دکمه خروج و عکس پروفایل اگر کاربر وارد شده باشد */}
      <SignedIn>
        <div className="flex items-center ml-4">
          <UserButton
            // با استفاده از UserButton، عکس پروفایل کاربر نمایش داده می‌شود
            afterSignOutUrl="/" // URL بعد از خروج
            appearance={{
              elements: {
                userButton: {
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                },
              },
            }}
          />
          <Link href="/dashboard">
            <Button className="ml-4">Dashboard</Button> {/* دکمه هدایت به داشبورد */}
          </Link>
        </div>
      </SignedIn>

      <SignedOut>
        <Link href="/signin">
          <Button>Sign In</Button> {/* دکمه ورود اگر کاربر وارد نشده باشد */}
        </Link>
      </SignedOut>
    </header>
  );
}