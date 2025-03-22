import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Building, Calendar, Clock, FileText } from "lucide-react";

export default function Applications() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">My Applications</h1>
            <p className="text-muted-foreground">
              Track and manage your job applications
            </p>
          </div>
          <Tabs defaultValue="active" className="space-y-4">
            <TabsList>
              <TabsTrigger value="active">Active (3)</TabsTrigger>
              <TabsTrigger value="archived">Archived (2)</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Residential Electrician</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Building className="h-3.5 w-3.5" />
                        <span>ElectraTech Solutions</span>
                      </CardDescription>
                    </div>
                    <Badge>Under Review</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Applied on Mar 20, 2025</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>2 days ago</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    View Application
                  </Button>
                  <Button variant="destructive" size="sm">
                    Withdraw
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Construction Laborer</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Building className="h-3.5 w-3.5" />
                        <span>BuildRight Construction</span>
                      </CardDescription>
                    </div>
                    <Badge>Interview Scheduled</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Applied on Mar 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>1 week ago</span>
                    </div>
                  </div>
                  <div className="mt-4 rounded-md bg-muted p-3">
                    <p className="text-sm font-medium">Interview Details</p>
                    <p className="text-sm text-muted-foreground">
                      March 25, 2025 at 2:00 PM
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Video call (link will be sent via email)
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    View Application
                  </Button>
                  <Button variant="destructive" size="sm">
                    Withdraw
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Plumbing Technician</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Building className="h-3.5 w-3.5" />
                        <span>FlowMaster Plumbing</span>
                      </CardDescription>
                    </div>
                    <Badge>Applied</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Applied on Mar 21, 2025</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>1 day ago</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    View Application
                  </Button>
                  <Button variant="destructive" size="sm">
                    Withdraw
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="archived" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>HVAC Technician</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Building className="h-3.5 w-3.5" />
                        <span>Cool Air Systems</span>
                      </CardDescription>
                    </div>
                    <Badge variant="outline">Rejected</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Applied on Feb 28, 2025</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>3 weeks ago</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    View Application
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Carpenter</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Building className="h-3.5 w-3.5" />
                        <span>Precision Woodworks</span>
                      </CardDescription>
                    </div>
                    <Badge variant="outline">Position Filled</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Applied on Mar 5, 2025</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>2 weeks ago</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    View Application
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
