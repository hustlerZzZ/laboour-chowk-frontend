"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">Labour</span>चौक
        </Link>

        <div className="flex items-center gap-8">
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

          <div>
            {pathname === "/" && (
              <Link
                href="/dashboard"
                className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition duration-200 ease-in-out"
              >
                Dashbooard
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
