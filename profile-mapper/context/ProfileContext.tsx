"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type Profile, mockProfiles } from "@/lib/data"

type SortOption = "name" | "recent"
type ViewMode = "grid" | "map"

interface ProfileContextType {
  profiles: Profile[]
  filteredProfiles: Profile[]
  selectedProfile: Profile | null
  searchQuery: string
  sortOption: SortOption
  viewMode: ViewMode
  isLoading: boolean
  error: string | null
  setSearchQuery: (query: string) => void
  setSortOption: (option: SortOption) => void
  setViewMode: (mode: ViewMode) => void
  selectProfile: (profile: Profile | null) => void
  addProfile: (profile: Profile) => void
  updateProfile: (profile: Profile) => void
  deleteProfile: (id: string) => void
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [filteredProfiles, setFilteredProfiles] = useState<Profile[]>([])
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOption, setSortOption] = useState<SortOption>("name")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Simulate loading data from an API
  useEffect(() => {
    const loadProfiles = async () => {
      try {
        setIsLoading(true)
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setProfiles(mockProfiles)
        setError(null)
      } catch (err) {
        setError("Failed to load profiles. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    loadProfiles()
  }, [])

  // Filter and sort profiles based on search query and sort option
  useEffect(() => {
    let result = [...profiles]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (profile) =>
          profile.name.toLowerCase().includes(query) ||
          profile.shortDescription.toLowerCase().includes(query) ||
          profile.skills.some((skill) => skill.toLowerCase().includes(query)),
      )
    }

    // Apply sorting
    if (sortOption === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortOption === "recent") {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }

    setFilteredProfiles(result)
  }, [profiles, searchQuery, sortOption])

  const selectProfile = (profile: Profile | null) => {
    setSelectedProfile(profile)
  }

  const addProfile = (profile: Profile) => {
    setProfiles((prev) => [...prev, profile])
  }

  const updateProfile = (updatedProfile: Profile) => {
    setProfiles((prev) => prev.map((profile) => (profile.id === updatedProfile.id ? updatedProfile : profile)))

    if (selectedProfile?.id === updatedProfile.id) {
      setSelectedProfile(updatedProfile)
    }
  }

  const deleteProfile = (id: string) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== id))

    if (selectedProfile?.id === id) {
      setSelectedProfile(null)
    }
  }

  const value = {
    profiles,
    filteredProfiles,
    selectedProfile,
    searchQuery,
    sortOption,
    viewMode,
    isLoading,
    error,
    setSearchQuery,
    setSortOption,
    setViewMode,
    selectProfile,
    addProfile,
    updateProfile,
    deleteProfile,
  }

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

export const useProfiles = () => {
  const context = useContext(ProfileContext)
  if (context === undefined) {
    throw new Error("useProfiles must be used within a ProfileProvider")
  }
  return context
}

