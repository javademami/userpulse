'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'


export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // اینجا می‌توانید منطق ورود با ایمیل و رمز عبور را پیاده‌سازی کنید
    console.log('Sign in attempt with:', { email, password, rememberMe })
  }

  const handleSocialSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: '/dashboard' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Image src="/logo.png" alt="Platform Logo" width={150} height={150} />
        </div>
        
        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold text-center">Sign In</h1>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Button type="submit" className="w-full">Sign In</Button>
            </form>
            <div className="mt-4">
              <p className="text-center text-sm text-gray-600">Or sign in with</p>
              <div className="mt-2 flex justify-center space-x-4">
                <Button variant="outline" onClick={() => handleSocialSignIn('google')}>
                  <FcGoogle className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" onClick={() => handleSocialSignIn('facebook')}>
                  <FaFacebook className="mr-2 h-4 w-4 text-blue-600" />
                  Facebook
                </Button>
                <Button variant="outline" onClick={() => handleSocialSignIn('linkedin')}>
                  <FaLinkedin className="mr-2 h-4 w-4 text-blue-700" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
            <div className="text-sm">
              Don't have an account?{' '}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}