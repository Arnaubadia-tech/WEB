import Link from "next/link"
import { Search, Calendar, MapPin, Info, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import EventSearchDemo from "@/components/event-search-demo"
import FeatureCard from "@/components/feature-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">EVENTIA</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#search" className="text-sm font-medium hover:text-primary">
              Search
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Discover Events with <span className="text-primary">AI-Powered</span> Insights
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  EVENTIA helps you find festivals and events with deep, personalized information powered by artificial
                  intelligence.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  <Search className="h-4 w-4" />
                  Try the AI
                </Button>
                <Button size="lg" variant="outline">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-muted/50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover how our AI helps you find the perfect events
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Search className="h-10 w-10 text-primary" />}
                title="Smart Search"
                description="Our AI understands natural language queries to find exactly what you're looking for."
              />
              <FeatureCard
                icon={<Calendar className="h-10 w-10 text-primary" />}
                title="Event Recommendations"
                description="Get personalized event suggestions based on your interests and past activities."
              />
              <FeatureCard
                icon={<MapPin className="h-10 w-10 text-primary" />}
                title="Location Awareness"
                description="Find events near you or plan ahead for your next trip with location-based filtering."
              />
              <FeatureCard
                icon={<Info className="h-10 w-10 text-primary" />}
                title="Deep Information"
                description="Access comprehensive details about venues, performers, schedules, and more."
              />
              <FeatureCard
                icon={<Sparkles className="h-10 w-10 text-primary" />}
                title="AI Insights"
                description="Unique perspectives and information that help you make informed decisions."
              />
              <FeatureCard
                icon={<Calendar className="h-10 w-10 text-primary" />}
                title="Event Planning"
                description="Create itineraries and get reminders for upcoming events you're interested in."
              />
            </div>
          </div>
        </section>

        <section id="search" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Try Our AI Search</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Ask about any event or festival and get detailed information instantly
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <EventSearchDemo />
            </div>
          </div>
        </section>

        <section id="about" className="bg-muted/50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About EVENTIA</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    EVENTIA was founded with a simple mission: to connect people with events that matter to them. Our AI
                    technology goes beyond basic listings to provide deep, contextual information about festivals,
                    concerts, exhibitions, and more.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    We believe that the right information can transform an ordinary outing into an extraordinary
                    experience. That's why we've built an AI that understands not just what events are happening, but
                    why they matter and how they connect to your interests.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Team collaboration"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  src="/placeholder.svg?height=400&width=600"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Have questions about EVENTIA? Want to partner with us? We'd love to hear from you.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>123 Innovation Street, Tech City</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>hello@eventia.ai</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border bg-background p-6">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first-name"
                      >
                        First name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="first-name"
                        placeholder="John"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last-name"
                      >
                        Last name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="last-name"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="email"
                      placeholder="john.doe@example.com"
                      type="email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="message"
                      placeholder="Your message here..."
                    />
                  </div>
                </div>
                <Button className="w-full">Send Message</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">EVENTIA</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 EVENTIA. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Cookies
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

