import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function Page() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <SignIn />
    </div>
  )
}