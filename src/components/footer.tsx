// src/components/Footer.tsx
'use client';

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
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
  );
}