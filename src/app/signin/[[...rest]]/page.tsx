// src/app/signin/[[...rest]]/page.tsx
'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" p-6 rounded shadow-md w-96">
        
        <SignIn />
      </div>
    </div>
  );
}
