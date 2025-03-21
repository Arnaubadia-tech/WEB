"use client"

import { useState } from "react"
import { Search, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function EventSearchDemo() {
  const [query, setQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<
    | null
    | {
        title: string
        date: string
        location: string
        description: string
        image: string
      }[]
  >(null)

  const handleSearch = () => {
    if (!query.trim()) return

    setIsSearching(true)

    // Simulate AI search with a timeout
    setTimeout(() => {
      setIsSearching(false)

      // Mock results based on query
      if (query.toLowerCase().includes("music") || query.toLowerCase().includes("festival")) {
        setResults([
          {
            title: "Summer Sound Festival",
            date: "July 15-17, 2025",
            location: "Riverside Park, Tech City",
            description:
              "A three-day music festival featuring top artists across multiple genres. The event includes food vendors, art installations, and camping options.",
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            title: "Jazz in the Park",
            date: "August 5, 2025",
            location: "Central Gardens, Tech City",
            description:
              "An evening of smooth jazz under the stars. Bring your own picnic and enjoy performances from local and international jazz musicians.",
            image: "/placeholder.svg?height=200&width=300",
          },
        ])
      } else if (query.toLowerCase().includes("art") || query.toLowerCase().includes("exhibition")) {
        setResults([
          {
            title: "Modern Art Exhibition",
            date: "June 10-30, 2025",
            location: "City Gallery, Tech City",
            description:
              "Featuring works from contemporary artists exploring themes of technology and nature. Guided tours available daily.",
            image: "/placeholder.svg?height=200&width=300",
          },
        ])
      } else {
        setResults([
          {
            title: "Tech Conference 2025",
            date: "September 22-24, 2025",
            location: "Convention Center, Tech City",
            description:
              "The biggest tech event of the year with keynotes, workshops, and networking opportunities. Early bird tickets available now.",
            image: "/placeholder.svg?height=200&width=300",
          },
        ])
      }
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex w-full max-w-3xl items-center space-x-2">
        <Input
          type="text"
          placeholder="What kind of events are you looking for?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1"
        />
        <Button onClick={handleSearch} disabled={isSearching}>
          {isSearching ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          ) : (
            <Search className="h-4 w-4" />
          )}
          <span className="ml-2">Search</span>
        </Button>
      </div>

      {isSearching && (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="mt-4 text-sm text-muted-foreground">Our AI is searching for events...</p>
        </div>
      )}

      {results && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Results</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {results.map((event, index) => (
              <Card key={index}>
                <CardContent className="p-0">
                  <img src={event.image || "/placeholder.svg"} alt={event.title} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <h4 className="font-semibold">{event.title}</h4>
                    <div className="mt-2 space-y-1 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                    <Button variant="outline" size="sm" className="mt-4">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

