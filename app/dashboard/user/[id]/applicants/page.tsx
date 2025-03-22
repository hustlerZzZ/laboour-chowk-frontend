import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  Download,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Mock job data
const jobData = {
  id: 1,
  title: "Residential Electrician",
  company: "Your Company",
  location: "San Francisco, CA",
  applicants: 12,
};

// Mock applicants data
const applicantsData = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    appliedDate: "Mar 22, 2025",
    experience: "5+ years",
    status: "New",
    resumeUrl: "#",
    coverLetter:
      "I am writing to express my interest in the Residential Electrician position. With over 5 years of experience in residential electrical work, I am confident in my ability to contribute to your team...",
    skills: [
      "Electrical Wiring",
      "Circuit Installation",
      "Troubleshooting",
      "Blueprint Reading",
      "Safety Protocols",
    ],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "(555) 987-6543",
    appliedDate: "Mar 21, 2025",
    experience: "3-5 years",
    status: "Reviewed",
    resumeUrl: "#",
    coverLetter:
      "I am excited to apply for the Residential Electrician position. I have 4 years of experience working on residential electrical systems and have completed numerous projects involving installation and repair...",
    skills: [
      "Electrical Systems",
      "Maintenance",
      "Repair",
      "Customer Service",
      "Code Compliance",
    ],
  },
  {
    id: 3,
    name: "Michael Davis",
    email: "michael.davis@example.com",
    phone: "(555) 456-7890",
    appliedDate: "Mar 20, 2025",
    experience: "1-2 years",
    status: "Contacted",
    resumeUrl: "#",
    coverLetter:
      "I am applying for the Residential Electrician position advertised on your website. Although I have only 2 years of professional experience, I have completed a comprehensive apprenticeship program and am eager to grow my skills...",
    skills: [
      "Electrical Installation",
      "Apprenticeship Training",
      "Basic Troubleshooting",
      "Team Collaboration",
    ],
  },
  {
    id: 4,
    name: "Emily Wilson",
    email: "emily.wilson@example.com",
    phone: "(555) 234-5678",
    appliedDate: "Mar 20, 2025",
    experience: "5+ years",
    status: "Interview Scheduled",
    resumeUrl: "#",
    coverLetter:
      "I am interested in the Residential Electrician position at your company. With 7 years of experience in both residential and commercial electrical work, I bring a wealth of knowledge and expertise to the role...",
    skills: [
      "Residential Wiring",
      "Commercial Electrical",
      "Project Management",
      "Team Leadership",
      "Safety Compliance",
    ],
  },
  {
    id: 5,
    name: "David Martinez",
    email: "david.martinez@example.com",
    phone: "(555) 876-5432",
    appliedDate: "Mar 19, 2025",
    experience: "3-5 years",
    status: "Rejected",
    resumeUrl: "#",
    coverLetter:
      "I am writing to apply for the Residential Electrician position. I have 3 years of experience working with electrical systems in residential settings and am certified in the latest safety protocols...",
    skills: [
      "Electrical Repair",
      "Residential Systems",
      "Safety Standards",
      "Customer Relations",
    ],
  },
];

export default function JobApplicants({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the job and applicants data based on the ID
  const job = jobData;
  const applicants = applicantsData;

  const newApplicants = applicants.filter((app) => app.status === "New");
  const reviewedApplicants = applicants.filter(
    (app) => app.status !== "New" && app.status !== "Rejected",
  );
  const rejectedApplicants = applicants.filter(
    (app) => app.status === "Rejected",
  );

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mb-6">
            <Link
              href="/dashboard/user"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to My Jobs
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold">Applicants for {job.title}</h1>
            <p className="text-muted-foreground">
              {job.applicants} people have applied to this position
            </p>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">
                All Applicants ({applicants.length})
              </TabsTrigger>
              <TabsTrigger value="new">
                New ({newApplicants.length})
              </TabsTrigger>
              <TabsTrigger value="reviewed">
                In Progress ({reviewedApplicants.length})
              </TabsTrigger>
              <TabsTrigger value="rejected">
                Rejected ({rejectedApplicants.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              {applicants.map((applicant) => (
                <ApplicantCard key={applicant.id} applicant={applicant} />
              ))}
            </TabsContent>
            <TabsContent value="new" className="space-y-4">
              {newApplicants.length === 0 ? (
                <EmptyState message="No new applicants" />
              ) : (
                newApplicants.map((applicant) => (
                  <ApplicantCard key={applicant.id} applicant={applicant} />
                ))
              )}
            </TabsContent>
            <TabsContent value="reviewed" className="space-y-4">
              {reviewedApplicants.length === 0 ? (
                <EmptyState message="No applicants in progress" />
              ) : (
                reviewedApplicants.map((applicant) => (
                  <ApplicantCard key={applicant.id} applicant={applicant} />
                ))
              )}
            </TabsContent>
            <TabsContent value="rejected" className="space-y-4">
              {rejectedApplicants.length === 0 ? (
                <EmptyState message="No rejected applicants" />
              ) : (
                rejectedApplicants.map((applicant) => (
                  <ApplicantCard key={applicant.id} applicant={applicant} />
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

function ApplicantCard({ applicant }: { applicant: any }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{applicant.name}</CardTitle>
              <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <span>Applied on {applicant.appliedDate}</span>
              </div>
            </div>
          </div>
          <Badge
            variant={applicant.status === "Rejected" ? "outline" : "default"}
          >
            {applicant.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Contact Information</h3>
              <div className="grid gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`mailto:${applicant.email}`}
                    className="hover:underline"
                  >
                    {applicant.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`tel:${applicant.phone}`}
                    className="hover:underline"
                  >
                    {applicant.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Experience</h3>
              <p className="text-sm">{applicant.experience}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Skills</h3>
              <div className="flex flex-wrap gap-1">
                {applicant.skills.map((skill: string, index: number) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Resume</h3>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href={applicant.resumeUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Cover Letter</h3>
              <div className="rounded-md border p-3">
                <p className="text-sm">{applicant.coverLetter}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
              <Button variant="outline" size="sm">
                Mark as Reviewed
              </Button>
              <Button variant="outline" size="sm">
                Schedule Interview
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                Reject
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
      <User className="h-10 w-10 text-muted-foreground" />
      <h3 className="mt-4 text-lg font-semibold">{message}</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        There are no applicants in this category.
      </p>
    </div>
  );
}
