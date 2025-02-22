"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div>
      <div className="bg-navbar-gradient rounded-b-3xl pt-4 pb-2">
        {/* Logo */}
        <div className="relative aspect-[180/90] mb-3 max-w-[180px] w-full m-auto">
          <Image src="/logo.png" alt="VT Logo" fill />
        </div>

        {/* Navbar */}
        <nav className="mx-2 bg-white rounded-b-3xl rounded-t-md px-8 py-10">
          <ul className="flex flex-wrap items-center justify-center space-y-2 sm:space-y-0">
            {[
              { href: "/", label: "HOME" },
              { href: "/about", label: "ABOUT US" },
              { href: "/interone", label: "INTERONE" },
              { href: "/premium-bond", label: "PREMIUM BOND" },
              { href: "/contact", label: "CONTACT" },
            ].map(({ href, label }, index) => (
              <li
                key={href}
                className={`flex items-center justify-center px-3 sm:px-4 md:px-6 ${
                  index !== 4 ? "border-r" : ""
                } text-center`}
              >
                <Link
                  href={href}
                  className={`inline-flex items-center text-xs sm:align-baseline sm:text-sm md:text-base ${
                    isActive(href) ? "text-[#007BFF]" : "text-gray-600"
                  } hover:text-[#0056b3]`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
