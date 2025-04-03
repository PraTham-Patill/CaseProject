"use client"

import { Header } from "@/components/Header"
import { ProfileDetail } from "@/components/ProfileDetail"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ProfileDetail />
    </div>
  )
}

