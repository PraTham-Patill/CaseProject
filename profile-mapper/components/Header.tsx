"use client"

import { useState } from "react"
import Link from "next/link"
import { useProfiles } from "@/context/ProfileContext"
import { MapPin, Search, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  const { searchQuery, setSearchQuery } = useProfiles()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <MapPin className="h-6 w-6 text-primary" />
            <span>ProfileMapper</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/profiles" className="text-sm font-medium transition-colors hover:text-primary">
            Profiles
          </Link>
          <Link href="/map" className="text-sm font-medium transition-colors hover:text-primary">
            Map
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex relative w-full max-w-sm items-center mx-4">
          <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search profiles..."
            className="w-full pl-8 bg-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Admin Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/admin">
            <Button variant="outline" size="sm">
              <User className="mr-2 h-4 w-4" />
              Admin
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/profiles" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Profiles
            </Link>
            <Link href="/map" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Map
            </Link>
            <Link href="/admin" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Admin
            </Link>
            <div className="relative w-full pt-2">
              <Search className="absolute left-2.5 top-[1.15rem] h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search profiles..."
                className="w-full pl-8 bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

