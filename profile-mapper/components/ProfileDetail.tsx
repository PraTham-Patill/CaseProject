"use client"

import { useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { useProfiles } from "@/context/ProfileContext"
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

export function ProfileDetail() {
  const { profiles, selectProfile, isLoading } = useProfiles()
  const router = useRouter()
  const params = useParams()
  const id = params?.id as string

  useEffect(() => {
    if (id && profiles.length > 0) {
      const profile = profiles.find((p) => p.id === id)
      if (profile) {
        selectProfile(profile)
      }
    }

    // Cleanup on unmount
    return () => {
      selectProfile(null)
    }
  }, [id, profiles, selectProfile])

  const profile = profiles.find((p) => p.id === id)

  const handleBack = () => {
    router.back()
  }

  if (isLoading) {
    return <ProfileDetailSkeleton />
  }

  if (!profile) {
    return (
      <div className="container max-w-4xl py-8">
        <Button variant="outline" onClick={handleBack} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Profile Not Found</h2>
            <p className="text-muted-foreground">The profile you're looking for doesn't exist or has been removed.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl py-8">
      <Button variant="outline" onClick={handleBack} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <Card>
        <CardContent className="p-0">
          <div className="relative h-48 bg-gradient-to-r from-primary/20 to-primary/10">
            <div className="absolute -bottom-16 left-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-background">
                <Image src={profile.avatar || "/placeholder.svg"} alt={profile.name} fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="pt-20 px-8 pb-8">
            <h1 className="text-3xl font-bold">{profile.name}</h1>
            <p className="text-muted-foreground mt-1">{profile.shortDescription}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">About</h2>
                <p className="text-muted-foreground">{profile.biography}</p>

                <h3 className="text-lg font-semibold mt-6 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      <Tag className="mr-1 h-3 w-3" />
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-muted-foreground">{profile.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-muted-foreground">{profile.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-muted-foreground">{profile.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Member Since</p>
                      <p className="text-muted-foreground">
                        {new Date(profile.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ProfileDetailSkeleton() {
  return (
    <div className="container max-w-4xl py-8">
      <Skeleton className="h-10 w-24 mb-6" />

      <Card>
        <CardContent className="p-0">
          <Skeleton className="h-48 w-full" />

          <div className="pt-20 px-8 pb-8">
            <Skeleton className="h-10 w-64 mb-2" />
            <Skeleton className="h-5 w-full max-w-md mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Skeleton className="h-8 w-32 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />

                <Skeleton className="h-6 w-24 mb-3" />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-6 w-20" />
                  ))}
                </div>
              </div>

              <div>
                <Skeleton className="h-8 w-48 mb-4" />
                <div className="space-y-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-start">
                      <Skeleton className="h-5 w-5 mr-3" />
                      <div className="flex-1">
                        <Skeleton className="h-4 w-16 mb-1" />
                        <Skeleton className="h-4 w-full max-w-xs" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

