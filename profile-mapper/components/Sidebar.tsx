"use client"

import { useProfiles } from "@/context/ProfileContext"
import { Grid, Map, SlidersHorizontal, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export function Sidebar() {
  const { sortOption, setSortOption, viewMode, setViewMode } = useProfiles()

  return (
    <div className="w-full md:w-64 p-4 border-r h-[calc(100vh-4rem)] overflow-auto">
      <div className="space-y-6">
        <div>
          <h3 className="flex items-center text-lg font-semibold mb-2">
            <SlidersHorizontal className="mr-2 h-5 w-5" />
            Filters
          </h3>
          <Separator className="my-2" />
          <div className="space-y-4">
            <div>
              <Label htmlFor="view-mode" className="text-sm font-medium">
                View Mode
              </Label>
              <div className="flex mt-2 space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="flex-1"
                >
                  <Grid className="mr-2 h-4 w-4" />
                  Grid
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                  className="flex-1"
                  disabled={true} // Disable the map button for now
                >
                  <Map className="mr-2 h-4 w-4" />
                  Map
                </Button>
              </div>
              {viewMode === "map" && (
                <p className="text-xs text-muted-foreground mt-1">Map view is currently unavailable.</p>
              )}
            </div>

            <div>
              <Label htmlFor="sort-by" className="text-sm font-medium flex items-center">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Sort By
              </Label>
              <RadioGroup
                id="sort-by"
                value={sortOption}
                onValueChange={(value) => setSortOption(value as "name" | "recent")}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="name" id="sort-name" />
                  <Label htmlFor="sort-name" className="cursor-pointer">
                    Name
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="recent" id="sort-recent" />
                  <Label htmlFor="sort-recent" className="cursor-pointer">
                    Most Recent
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

