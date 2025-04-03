"use client"

import { Header } from "@/components/Header"
import { AdminPanel } from "@/components/AdminPanel"

export default function AdminPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AdminPanel />
    </div>
  )
}

