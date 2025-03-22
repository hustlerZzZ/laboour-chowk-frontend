"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  Building,
  Calendar,
  Clock,
  Edit,
  Eye,
  MoreHorizontal,
  Trash,
  Users,
  CheckCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const mockPostedJobs = [
  {
    id: 1,
    title: "Residential Electrician",
    company: "Your Company",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$35 - $45/hr",
    posted: "Mar 20, 2025",
    deadline: "Apr 15, 2025",
    status: "Active",
    applicants: 12,
    views: 145,
  },
  {
    id: 2,
    title: "Plumbing Technician",
    company: "Your Company",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$30 - $40/hr",
    posted: "Mar 15, 2025",
    deadline: "Apr 10, 2025",
    status: "Active",
    applicants: 8,
    views: 98,
  },
  {
    id: 3,
    title: "HVAC Installer",
    company: "Your Company",
    location: "San Francisco, CA",
    type: "Contract",
    salary: "$28 - $38/hr",
    posted: "Mar 10, 2025",
    deadline: "Apr 5, 2025",
    status: "Active",
    applicants: 5,
    views: 76,
  },
  {
    id: 4,
    title: "Construction Manager",
    company: "Your Company",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$50 - $65/hr",
    posted: "Feb 25, 2025",
    deadline: "Mar 25, 2025",
    status: "Expired",
    applicants: 15,
    views: 210,
  },
  {
    id: 5,
    title: "Carpenter",
    company: "Your Company",
    location: "San Francisco, CA",
    type: "Part-time",
    salary: "$25 - $35/hr",
    posted: "Feb 20, 2025",
    deadline: "Mar 20, 2025",
    status: "Filled",
    applicants: 20,
    views: 180,
  },
];

export default function MyJobs() {
  const { toast } = useToast();
  const [postedJobs, setPostedJobs] = useState(mockPostedJobs);
  const [deleteJobId, setDeleteJobId] = useState<number | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const activeJobs = postedJobs.filter((job) => job.status === "Active");
  const inactiveJobs = postedJobs.filter((job) => job.status !== "Active");

  const handleDeleteJob = () => {
    if (deleteJobId) {
      setPostedJobs(postedJobs.filter((job) => job.id !== deleteJobId));
      toast({
        title: "Job Deleted",
        description: "The job listing has been successfully deleted.",
      });
      setIsDeleteDialogOpen(false);
      setDeleteJobId(null);
    }
  };

  const handleMarkAsFilled = (jobId: number) => {
    setPostedJobs(
      postedJobs.map((job) =>
        job.id === jobId ? { ...job, status: "Filled" } : job,
      ),
    );
    toast({
      title: "Job Marked as Filled",
      description: "The job listing has been marked as filled.",
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">My Posted Jobs</h1>
              <p className="text-muted-foreground">
                Manage your job listings and view applicants
              </p>
            </div>
            <Link href="/dashboard/user/post-job">
              <Button>
                <Briefcase className="mr-2 h-4 w-4" />
                Post New Job
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Jobs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{postedJobs.length}</div>
                <p className="text-xs text-muted-foreground">All time</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Jobs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeJobs.length}</div>
                <p className="text-xs text-muted-foreground">
                  Currently accepting applications
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Applicants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {postedJobs.reduce((total, job) => total + job.applicants, 0)}
                </div>
                <p className="text-xs text-muted-foreground">Across all jobs</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="active" className="space-y-4">
            <TabsList>
              <TabsTrigger value="active">
                Active Jobs ({activeJobs.length})
              </TabsTrigger>
              <TabsTrigger value="inactive">
                Inactive Jobs ({inactiveJobs.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4">
              {activeJobs.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                  <Briefcase className="h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-semibold">No Active Jobs</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You don't have any active job listings. Post a new job to
                    get started.
                  </p>
                  <Link href="/dashboard/user/post-job" className="mt-4">
                    <Button>Post a Job</Button>
                  </Link>
                </div>
              ) : (
                activeJobs.map((job) => (
                  <Card key={job.id}>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                            <Building className="h-3.5 w-3.5" />
                            <span>{job.company}</span>
                            <span className="mx-1">•</span>
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <Badge>{job.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">
                            Job Type
                          </p>
                          <p className="text-sm font-medium">{job.type}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">
                            Salary Range
                          </p>
                          <p className="text-sm font-medium">{job.salary}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">
                            Posted On
                          </p>
                          <p className="text-sm font-medium">{job.posted}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">
                            Deadline
                          </p>
                          <p className="text-sm font-medium">{job.deadline}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between rounded-md bg-muted p-3">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">
                              {job.applicants} Applicants
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">
                              {job.views} Views
                            </span>
                          </div>
                        </div>
                        <Link href={`/dashboard/user/${job.id}/applicants`}>
                          <Button variant="outline" size="sm">
                            View Applicants
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex gap-2">
                        <Link href={`/jobs/${job.id}`}>
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            View Listing
                          </Button>
                        </Link>
                        <Link href={`/my-jobs/${job.id}/edit`}>
                          <Button variant="outline" size="sm">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Button>
                        </Link>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => handleMarkAsFilled(job.id)}
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Mark as Filled
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-destructive focus:text-destructive"
                            onClick={() => {
                              setDeleteJobId(job.id);
                              setIsDeleteDialogOpen(true);
                            }}
                          >
                            <Trash className="mr-2 h-4 w-4" />
                            Delete Listing
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardFooter>
                  </Card>
                ))
              )}
            </TabsContent>
            <TabsContent value="inactive" className="space-y-4">
              {inactiveJobs.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                  <Briefcase className="h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-semibold">
                    No Inactive Jobs
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You don't have any inactive job listings.
                  </p>
                </div>
              ) : (
                inactiveJobs.map((job) => (
                  <Card key={job.id}>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                            <Building className="h-3.5 w-3.5" />
                            <span>{job.company}</span>
                            <span className="mx-1">•</span>
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <Badge variant="outline">{job.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">
                            Job Type
                          </p>
                          <p className="text-sm font-medium">{job.type}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">
                            Salary Range
                          </p>
                          <p className="text-sm font-medium">{job.salary}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">
                            Posted On
                          </p>
                          <p className="text-sm font-medium">{job.posted}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">
                            Deadline
                          </p>
                          <p className="text-sm font-medium">{job.deadline}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between rounded-md bg-muted p-3">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">
                              {job.applicants} Applicants
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">
                              {job.views} Views
                            </span>
                          </div>
                        </div>
                        <Link href={`/my-jobs/${job.id}/applicants`}>
                          <Button variant="outline" size="sm">
                            View Applicants
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex gap-2">
                        <Link href={`/jobs/${job.id}`}>
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            View Listing
                          </Button>
                        </Link>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setDeleteJobId(job.id);
                          setIsDeleteDialogOpen(true);
                        }}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this job listing and remove it from
              our servers. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteJob}
              className="bg-destructive text-destructive-foreground"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
