"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useProfiles } from "@/context/ProfileContext"
import { MapPin, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import type { Profile } from "@/lib/data"

interface ProfileCardProps {
  profile: Profile
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const { selectProfile, setViewMode } = useProfiles()
  const [isHovered, setIsHovered] = useState(false)

  const handleShowOnMap = () => {
    selectProfile(profile)
    // Don't change to map view since it's not available
    // Instead, just show an alert
    alert(`Map view is currently unavailable. Profile location: ${profile.address}`)
  }

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 ${
        isHovered ? "shadow-lg transform -translate-y-1" : "shadow"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-6 flex flex-col items-center">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background mb-4">
          <Image src={profile.avatar || "/placeholder.svg"} alt={profile.name} fill className="object-cover" />
        </div>
        <h3 className="text-xl font-semibold text-center">{profile.name}</h3>
        <p className="text-sm text-muted-foreground text-center mt-1">{profile.shortDescription}</p>

        <div className="flex items-center text-xs text-muted-foreground mt-2">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{profile.address.split(",")[0]}</span>
        </div>
      </div>

      <CardFooter className="flex justify-between p-4 pt-0 gap-2">
        <Button variant="outline" size="sm" className="flex-1" onClick={handleShowOnMap}>
          <MapPin className="mr-2 h-4 w-4" />
          Map
        </Button>
        <Link href={`/profile/${profile.id}`} className="flex-1">
          <Button size="sm" className="w-full">
            <Eye className="mr-2 h-4 w-4" />
            Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

