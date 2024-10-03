// src/app/layout.tsx (اگر از نسخه قدیمی‌تر استفاده می‌کنید، در _app.tsx)
import { ThemeProvider } from 'next-themes';
// مسیر درست فایل فونت را بررسی کنید
import './globals.css'; // مطمئن شوید که استایل‌های عمومی وارد شده‌اند

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
