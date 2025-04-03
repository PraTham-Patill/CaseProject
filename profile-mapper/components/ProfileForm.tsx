"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useProfiles } from "@/context/ProfileContext"
import type { Profile } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Loader2, Save, X } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ProfileFormProps {
  profile?: Profile
  onCancel: () => void
}

export function ProfileForm({ profile, onCancel }: ProfileFormProps) {
  const { addProfile, updateProfile } = useProfiles()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isEditing = !!profile

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>({
    defaultValues: profile || {
      id: String(Date.now()),
      name: "",
      avatar: "/placeholder.svg?height=150&width=150",
      shortDescription: "",
      biography: "",
      email: "",
      phone: "",
      address: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
      skills: [],
      createdAt: new Date().toISOString(),
    },
  })

  const onSubmit = async (data: Profile) => {
    try {
      setIsSubmitting(true)
      setError(null)

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Process skills from comma-separated string to array
      const skillsInput = data.skills as unknown as string
      const skillsArray = skillsInput
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean)

      const profileData: Profile = {
        ...data,
        skills: skillsArray,
        id: profile?.id || String(Date.now()),
        createdAt: profile?.createdAt || new Date().toISOString(),
      }

      if (isEditing) {
        updateProfile(profileData)
      } else {
        addProfile(profileData)
      }

      onCancel()
    } catch (err) {
      setError("An error occurred while saving the profile. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Profile" : "Add New Profile"}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" {...register("name", { required: "Name is required" })} placeholder="John Doe" />
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="john.doe@example.com"
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                {...register("phone", { required: "Phone is required" })}
                placeholder="(555) 123-4567"
              />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                {...register("address", { required: "Address is required" })}
                placeholder="123 Main St, City, State"
              />
              {errors.address && <p className="text-sm text-destructive">{errors.address.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="latitude">Latitude</Label>
              <Input
                id="latitude"
                type="number"
                step="any"
                {...register("coordinates.latitude", {
                  required: "Latitude is required",
                  valueAsNumber: true,
                })}
                placeholder="37.7749"
              />
              {errors.coordinates?.latitude && (
                <p className="text-sm text-destructive">{errors.coordinates.latitude.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="longitude">Longitude</Label>
              <Input
                id="longitude"
                type="number"
                step="any"
                {...register("coordinates.longitude", {
                  required: "Longitude is required",
                  valueAsNumber: true,
                })}
                placeholder="-122.4194"
              />
              {errors.coordinates?.longitude && (
                <p className="text-sm text-destructive">{errors.coordinates.longitude.message}</p>
              )}
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="shortDescription">Short Description</Label>
              <Input
                id="shortDescription"
                {...register("shortDescription", {
                  required: "Short description is required",
                  maxLength: {
                    value: 100,
                    message: "Description must be less than 100 characters",
                  },
                })}
                placeholder="UX Designer with 5+ years of experience"
              />
              {errors.shortDescription && <p className="text-sm text-destructive">{errors.shortDescription.message}</p>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="biography">Biography</Label>
              <Textarea
                id="biography"
                {...register("biography", { required: "Biography is required" })}
                placeholder="Detailed biography..."
                rows={5}
              />
              {errors.biography && <p className="text-sm text-destructive">{errors.biography.message}</p>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="skills">Skills (comma-separated)</Label>
              <Input
                id="skills"
                {...register("skills" as any, { required: "Skills are required" })}
                placeholder="UI Design, User Research, Prototyping"
                defaultValue={profile?.skills.join(", ")}
              />
              {errors.skills && <p className="text-sm text-destructive">{errors.skills.message}</p>}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel}>
            <X className="mr-2 h-4 w-4" />
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Profile
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

