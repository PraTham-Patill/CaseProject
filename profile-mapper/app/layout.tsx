import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ProfileProvider } from "@/context/ProfileContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ProfileMapper - Interactive User Profile Mapping",
  description:
    "A professional React application for displaying and managing user profiles with interactive mapping features",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProfileProvider>{children}</ProfileProvider>
      </body>
    </html>
  )
}



import './globals.css'