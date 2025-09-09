"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <SignIn 
          path="/sign-in" 
          routing="path" 
          signUpUrl="/sign-up"
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  );
}
