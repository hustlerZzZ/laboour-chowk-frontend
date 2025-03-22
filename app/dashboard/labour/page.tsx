import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Find Your Perfect Job
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Browse thousands of job opportunities for skilled workers and
                  professionals.
                </p>
              </div>
              <div className="mx-auto w-full max-w-3xl">
                <div className="grid gap-4 md:grid-cols-[1fr_auto]">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search jobs by title, skills or keywords..."
                      className="w-full bg-background pl-9"
                    />
                  </div>
                  <Button type="submit" size="lg">
                    Search Jobs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Job Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="full-time"
                        className="h-4 w-4"
                      />
                      <label htmlFor="full-time">Full-time</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="part-time"
                        className="h-4 w-4"
                      />
                      <label htmlFor="part-time">Part-time</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="contract"
                        className="h-4 w-4"
                      />
                      <label htmlFor="contract">Contract</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="temporary"
                        className="h-4 w-4"
                      />
                      <label htmlFor="temporary">Temporary</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Experience Level
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="entry" className="h-4 w-4" />
                      <label htmlFor="entry">Entry Level</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="mid" className="h-4 w-4" />
                      <label htmlFor="mid">Mid Level</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="senior" className="h-4 w-4" />
                      <label htmlFor="senior">Senior Level</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Salary Range</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="0-25">$0 - $25/hr</SelectItem>
                      <SelectItem value="25-50">$25 - $50/hr</SelectItem>
                      <SelectItem value="50-75">$50 - $75/hr</SelectItem>
                      <SelectItem value="75-100">$75 - $100/hr</SelectItem>
                      <SelectItem value="100+">$100+/hr</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Available Jobs</h2>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                      <SelectItem value="highest">Highest Paying</SelectItem>
                      <SelectItem value="lowest">Lowest Paying</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">
                          Residential Electrician
                        </CardTitle>
                        <Badge>Full-time</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>San Francisco, CA</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3.5 w-3.5" />
                          <span>$35 - $45/hr</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>Posted 2 days ago</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        We are looking for a skilled residential electrician to
                        join our team. The ideal candidate will have experience
                        with electrical installations, troubleshooting, and
                        repairs in residential settings.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline">Electrical</Badge>
                        <Badge variant="outline">Wiring</Badge>
                        <Badge variant="outline">Troubleshooting</Badge>
                        <Badge variant="outline">Installation</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/dashboard/labour/3/apply" className="w-full">
                        <Button className="w-full">View Details</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">
                          Construction Laborer
                        </CardTitle>
                        <Badge>Contract</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>Austin, TX</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3.5 w-3.5" />
                          <span>$22 - $28/hr</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>Posted 1 week ago</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Construction laborer needed for a 3-month project.
                        Responsibilities include site preparation, material
                        handling, and assisting skilled tradespeople. Physical
                        stamina and ability to follow safety protocols required.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline">Construction</Badge>
                        <Badge variant="outline">Physical Labor</Badge>
                        <Badge variant="outline">Safety</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/dashboard/labour/3/apply" className="w-full">
                        <Button className="w-full">View Details</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">
                          Plumbing Technician
                        </CardTitle>
                        <Badge>Full-time</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>Chicago, IL</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3.5 w-3.5" />
                          <span>$30 - $40/hr</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>Posted 3 days ago</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Experienced plumbing technician needed for residential
                        and commercial service calls. Must have knowledge of
                        plumbing systems, fixture installation, and repair
                        techniques. Valid driver's license required.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline">Plumbing</Badge>
                        <Badge variant="outline">Repair</Badge>
                        <Badge variant="outline">Installation</Badge>
                        <Badge variant="outline">Troubleshooting</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/dashboard/labour/3/apply" className="w-full">
                        <Button className="w-full">View Details</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
                <div className="flex items-center justify-center">
                  <Button variant="outline">Load More Jobs</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
