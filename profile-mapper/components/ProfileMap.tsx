"use client"

import { useState, useEffect, useCallback } from "react"
import { useProfiles } from "@/context/ProfileContext"
import type { Profile } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Loader2, MapPin, Eye, MapIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function ProfileMap() {
  const { filteredProfiles, selectedProfile, selectProfile, isLoading } = useProfiles()
  const [mapError, setMapError] = useState(false)

  // Update when a profile is selected
  useEffect(() => {
    // This would normally update the map view
    // But we're just tracking selection state for now
  }, [selectedProfile])

  const handleMarkerClick = useCallback(
    (profile: Profile) => {
      selectProfile(profile)
    },
    [selectProfile],
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="h-[calc(100vh-4rem)] w-full relative">
      <Alert className="mb-4">
        <MapIcon className="h-4 w-4 mr-2" />
        <AlertDescription>
          Map view is currently unavailable. Please use the grid view to see profiles.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.map((profile) => (
          <Card key={profile.id} className="p-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src={profile.avatar || "/placeholder.svg"} alt={profile.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-medium text-sm">{profile.name}</h3>
                <p className="text-xs text-muted-foreground">{profile.shortDescription}</p>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{profile.address.split(",")[0]}</span>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <Link href={`/profile/${profile.id}`}>
                <Button size="sm" className="w-full">
                  <Eye className="mr-2 h-4 w-4" />
                  View Profile
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

