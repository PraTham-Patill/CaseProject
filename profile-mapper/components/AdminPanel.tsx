"use client"

import { useState } from "react"
import { useProfiles } from "@/context/ProfileContext"
import { ProfileForm } from "@/components/ProfileForm"
import type { Profile } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit, Trash2, Plus, Search, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"

export function AdminPanel() {
  const { profiles, filteredProfiles, searchQuery, setSearchQuery, deleteProfile, isLoading } = useProfiles()
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null)
  const [isAddingProfile, setIsAddingProfile] = useState(false)
  const [profileToDelete, setProfileToDelete] = useState<Profile | null>(null)

  const handleEditProfile = (profile: Profile) => {
    setSelectedProfile(profile)
    setIsAddingProfile(false)
  }

  const handleAddProfile = () => {
    setSelectedProfile(null)
    setIsAddingProfile(true)
  }

  const handleCancelForm = () => {
    setSelectedProfile(null)
    setIsAddingProfile(false)
  }

  const handleDeleteClick = (profile: Profile) => {
    setProfileToDelete(profile)
  }

  const handleConfirmDelete = () => {
    if (profileToDelete) {
      deleteProfile(profileToDelete.id)
      setProfileToDelete(null)
    }
  }

  const handleCancelDelete = () => {
    setProfileToDelete(null)
  }

  if (selectedProfile || isAddingProfile) {
    return (
      <div className="container py-8">
        <ProfileForm profile={selectedProfile || undefined} onCancel={handleCancelForm} />
      </div>
    )
  }

  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Profile Management</CardTitle>
              <CardDescription>Manage user profiles in the system</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search profiles..."
                  className="pl-8 w-full sm:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button onClick={handleAddProfile}>
                <Plus className="mr-2 h-4 w-4" />
                Add Profile
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : filteredProfiles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No profiles found. Try adjusting your search or add a new profile.
              </p>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden md:table-cell">Email</TableHead>
                    <TableHead className="hidden md:table-cell">Location</TableHead>
                    <TableHead className="hidden md:table-cell">Skills</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProfiles.map((profile) => (
                    <TableRow key={profile.id}>
                      <TableCell className="font-medium">{profile.name}</TableCell>
                      <TableCell className="hidden md:table-cell">{profile.email}</TableCell>
                      <TableCell className="hidden md:table-cell">{profile.address.split(",")[0]}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {profile.skills.slice(0, 2).map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                            >
                              {skill}
                            </span>
                          ))}
                          {profile.skills.length > 2 && (
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                              +{profile.skills.length - 2}
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="icon" onClick={() => handleEditProfile(profile)}>
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="text-destructive"
                            onClick={() => handleDeleteClick(profile)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={!!profileToDelete} onOpenChange={(open) => !open && setProfileToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the profile for {profileToDelete?.name}. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancelDelete}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

