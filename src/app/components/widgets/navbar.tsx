import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      {" "}
      <div className="bg-navbar-gradient rounded-b-3xl pt-4 pb-2">
        <div className="relative aspect-[180/90] mb-3 max-w-[180px] w-full m-auto">
          <Image src="/logo.png" alt="VT Logo" fill />
        </div>
        <nav className="mx-2 bg-white rounded-b-3xl rounded-t-md px-8 py-10">
          <ul className="flex items-center justify-center">
            <li className="px-6 border-r">
              <Link href="/" className="text-[#007BFF] hover:text-[#0056b3]">
                HOME
              </Link>
            </li>
            <li className="px-6 border-r">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                ABOUT US
              </Link>
            </li>
            <li className="px-6 border-r">
              <Link
                href="/interone"
                className="text-gray-600 hover:text-gray-900"
              >
                INTERONE
              </Link>
            </li>
            <li className="px-6 border-r">
              <Link
                href="/premium-bond"
                className="text-gray-600 hover:text-gray-900"
              >
                PREMIUM BOND
              </Link>
            </li>
            <li className="px-6">
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Navigation bar */}
    </div>
  );
}

export default Navbar;
