"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function JobApplication({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted",
        description: "Your job application has been successfully submitted.",
      });
      router.push("/");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-8">
        <div className="container max-w-3xl px-4 md:px-6">
          <div className="mb-6">
            <Link
              href={`/dashboard/labour/`}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Job Details
            </Link>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Apply for Residential Electrician
              </CardTitle>
              <CardDescription>
                Complete the form below to submit your application for this
                position.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Personal Information</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    Experience & Qualifications
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <RadioGroup defaultValue="1-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="less-than-1" id="less-than-1" />
                        <Label htmlFor="less-than-1">Less than 1 year</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-2" id="1-2" />
                        <Label htmlFor="1-2">1-2 years</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-5" id="3-5" />
                        <Label htmlFor="3-5">3-5 years</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5-plus" id="5-plus" />
                        <Label htmlFor="5-plus">5+ years</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="certifications">
                      Certifications & Licenses
                    </Label>
                    <Textarea
                      id="certifications"
                      placeholder="List any relevant certifications or licenses you hold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills</Label>
                    <Textarea
                      id="skills"
                      placeholder="List your relevant skills and expertise"
                      required
                    />
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Resume & Cover Letter</h3>
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume</Label>
                    <div className="flex items-center gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Resume
                      </Button>
                      <span className="text-sm text-muted-foreground">
                        PDF, DOCX or TXT (Max 5MB)
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cover-letter">
                      Cover Letter (Optional)
                    </Label>
                    <Textarea
                      id="cover-letter"
                      placeholder="Tell us why you're a good fit for this position"
                      rows={5}
                    />
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    Additional Information
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Earliest Start Date</Label>
                    <Input id="start-date" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salary">
                      Salary Expectation (hourly rate)
                    </Label>
                    <Input
                      id="salary"
                      type="text"
                      placeholder="e.g. $35/hr"
                      required
                    />
                  </div>
                </div>
                <CardFooter className="flex justify-end gap-4 px-0">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
