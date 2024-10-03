// src/app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body>
        <ClerkProvider>
          <ThemeProvider attribute="class">
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
