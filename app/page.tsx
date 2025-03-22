import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LuConstruction } from "react-icons/lu";
import {
  MdCarpenter,
  MdCleaningServices,
  MdElectricalServices,
  MdOutlinePlumbing,
} from "react-icons/md";
import {
  Search,
  MapPin,
  ArrowRight,
  Star,
  Clock,
  Users,
  Shield,
} from "lucide-react";
import { GiGardeningShears } from "react-icons/gi";
import { FaPaintRoller, FaTruckMoving } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Labour</span>चौक
            {/*<Image src="./logo.png" alt="logo" width={100} height={100} />*/}
          </div>

          <div className="flex items-center gap-8">
            <Link href="#" className="text-sm font-medium hidden md:block">
              Become a Worker
            </Link>
            <SignedOut>
              <SignInButton>
                <div className="bg-blue-600 text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-700 transition duration-200 ease-in-out">
                  Sign In
                </div>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative">
          <div className="flex py-32">
            <div className="container text-center">
              <div className="space-y-5">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Find Skilled Workers Near You
                </h1>
                <h2 className="text-2xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  on <span className="text-primary">Labour</span>
                  <span className="underline">चौक</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Connect with reliable laborers for construction, plumbing,
                  electrical work, and more.
                </p>
                <div className="flex items-center justify-center gap-4 pt-4 w-full">
                  <div className="flex gap-8">
                    <div className="relative flex-1 w-2/5">
                      <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="What service do you need?"
                        className="pl-10 pr-20 py-6 text-base"
                      />
                    </div>
                    <div className="relative flex-1 sm:flex-initial w-2/5">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Location"
                        className="pl-10 py-6 text-base"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Button size="lg" className="px-8">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center justify-center mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                Find skilled workers across various categories to help with your
                projects
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  href="#"
                  key={category.name}
                  className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="font-medium text-lg mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center group-hover:underline">
                    View Workers
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="flex flex-col items-center justify-center mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                Simple steps to find and hire skilled workers for your needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center justify-center mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Featured Workers
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                Top-rated professionals ready to help with your projects
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workers.map((worker) => (
                <div
                  key={worker.name}
                  className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={worker.image || "/placeholder.svg"}
                      alt={worker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium text-lg">{worker.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="text-sm font-medium">
                          {worker.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-primary font-medium mb-2">
                      {worker.profession}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {worker.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        ₹{worker.rate}/hour
                      </span>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="gap-2">
                View All Workers
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="flex flex-col items-center justify-center mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What Our Customers Say
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                Read testimonials from satisfied customers who found skilled
                workers through our platform
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-muted/30 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={
                          index == 0
                            ? "https://1.img-dpreview.com/files/p/TS560x560~forums/63132016/2a1e59e12f4543bea10f2385259c81cf"
                            : index == 1
                              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq0f1tSU2b8opZaApGh5tl2FreFb52dyo6Q&s"
                              : "https://standardbredtrader.com.au/assets/images/f4.jpeg"
                        }
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="flex flex-col items-center justify-center mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose Labour Chowk
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl">
                We connect you with verified skilled workers to get your job
                done right
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary-foreground text-primary flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">Verified Workers</h3>
                <p className="text-primary-foreground/80">
                  All workers on our platform are verified and
                  background-checked for your safety.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary-foreground text-primary flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">Quick Service</h3>
                <p className="text-primary-foreground/80">
                  Find and hire skilled workers within hours, not days.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary-foreground text-primary flex items-center justify-center mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">Large Network</h3>
                <p className="text-primary-foreground/80">
                  Access to thousands of skilled workers across various
                  categories.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="bg-muted/50 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Ready to find skilled workers?
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Join thousands of satisfied customers who found the perfect
                  workers for their projects.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="px-8">
                  Find Workers
                </Button>
                <Button variant="outline" size="lg">
                  Become a Worker
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Labour Chowk</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connecting skilled workers with people who need their services.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Construction
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Plumbing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Electrical
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Carpentry
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Painting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Trust & Safety
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Labour Chowk. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const categories = [
  {
    name: "Construction",
    description: "Masons, laborers, and helpers",
    icon: <LuConstruction />,
  },
  {
    name: "Plumbing",
    description: "Plumbers and pipe fitters",
    icon: <MdOutlinePlumbing />,
  },
  {
    name: "Electrical",
    description: "Electricians and helpers",
    icon: <MdElectricalServices />,
  },
  {
    name: "Carpentry",
    description: "Carpenters and woodworkers",
    icon: <MdCarpenter />,
  },
  {
    name: "Painting",
    description: "Painters and finishers",
    icon: <FaPaintRoller />,
  },
  {
    name: "Cleaning",
    description: "Cleaners and housekeepers",
    icon: <MdCleaningServices />,
  },
  {
    name: "Gardening",
    description: "Gardeners and landscapers",
    icon: <GiGardeningShears />,
  },
  {
    name: "Moving",
    description: "Movers and packers",
    icon: <FaTruckMoving />,
  },
];

const steps = [
  {
    title: "Search for Services",
    description:
      "Browse through various categories or search for specific skills you need.",
  },
  {
    title: "Choose a Worker",
    description:
      "Compare profiles, ratings, and prices to find the perfect match for your job.",
  },
  {
    title: "Book & Pay",
    description: "Schedule the service and pay securely through our platform.",
  },
];

const workers = [
  {
    name: "Rajesh Kumar",
    profession: "Construction Worker",
    description:
      "Experienced in building construction with 8+ years of work experience.",
    rating: 4.8,
    rate: 350,
    image:
      "https://humanfocus.co.uk/wp-content/uploads/how-to-become-construction-worker.jpg",
  },
  {
    name: "Sunil Sharma",
    profession: "Electrician",
    description:
      "Certified electrician specializing in residential and commercial wiring.",
    rating: 4.9,
    rate: 450,
    image:
      "https://labourmilega.com/wp-content/uploads/2023/04/electrician.jpg",
  },
  {
    name: "Amit Patel",
    profession: "Plumber",
    description:
      "Professional plumber with expertise in fixing leaks and installations.",
    rating: 4.7,
    rate: 400,
    image: "https://4.imimg.com/data4/DA/MJ/MY-2539624/plumber-services.png",
  },
];

const testimonials = [
  {
    name: "Priya Mehta",
    location: "Mumbai",
    rating: 5,
    text: "Found a skilled carpenter through Labour Chowk. He did an excellent job with my furniture repairs. Highly recommended!",
  },
  {
    name: "Rahul Singh",
    location: "Delhi",
    rating: 4,
    text: "Quick and reliable service. The electrician was professional and fixed all issues in my new apartment.",
  },
  {
    name: "Anita Desai",
    location: "Bangalore",
    rating: 5,
    text: "Great platform! Easy to find and hire skilled workers. The painter I hired did an amazing job with my house.",
  },
];
