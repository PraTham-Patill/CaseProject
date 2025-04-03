"use client"

import { useProfiles } from "@/context/ProfileContext"
import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import { ProfileGrid } from "@/components/ProfileGrid"
import { ProfileMap } from "@/components/ProfileMap"
import { useEffect } from "react"

export default function Home() {
  const { viewMode, setViewMode } = useProfiles()

  // If there's an issue with the map view, default to grid view
  useEffect(() => {
    const handleError = () => {
      if (viewMode === "map") {
        setViewMode("grid")
      }
    }

    window.addEventListener("error", handleError)
    return () => window.removeEventListener("error", handleError)
  }, [viewMode, setViewMode])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6">{viewMode === "grid" ? <ProfileGrid /> : <ProfileMap />}</main>
      </div>
    </div>
  )
}

