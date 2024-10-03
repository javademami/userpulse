'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // منتظر بررسی وضعیت احراز هویت می‌مانیم

    if (!session) {
      router.push('/signin') // اگر کاربر وارد نشده باشد، به صفحه ورود هدایت می‌شود
    }
  }, [session, status, router])

  if (status === 'loading') {
    return <div>Loading...</div> // می‌توانید یک کامپوننت لودینگ زیباتر نمایش دهید
  }

  if (!session) {
    return null // هیچ چیزی نمایش نمی‌دهیم تا زمانی که کاربر به صفحه ورود هدایت شود
  }

  return <>{children}</>
}