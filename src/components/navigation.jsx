"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

const navItems = [
  {
    label: "Company",
    // href: "#",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Customer Stories", href: "/about/#" },
      { label: "Process", href: "/how-it-works" },
    ],
  },
  {
    label: "Services",

    dropdown: [
      { label: "Terms of Services", href: "/legal" },
      { label: "Privacy Policy", href: "/legal/#privacy" },
      { label: "Refund Policy", href: "/legal/#refund" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const handleDropdownToggle = (label) => {
    // If clicking the same dropdown, close it. Otherwise, open the new one.
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="sticky top-0 z-20 bg-white/80 backdrop-blur-2xl">
      <div className="sticky top-0 mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="rounded-md p-2 hover:bg-white"
            onClick={closeAll}
          >
            <Image
              src="/business-brewery-logo.png"
              width={40}
              height={40}
              alt="Business-brewery-logo"
              priority
              className=""
            ></Image>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden space-x-6 md:flex">
            {navItems.map((item) => {
              // If item has dropdown
              if (item.dropdown) {
                return (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="px-3 py-2 font-bold text-stone-700 hover:text-amber-600"
                    >
                      {item.label}
                      <span className="ml-1">⌄</span>
                    </button>

                    {/* Dropdown Menu - only show if this dropdown is open */}
                    {openDropdown === item.label && (
                      <div className="absolute left-0 mt-2 w-48 rounded-2xl bg-white/90 backdrop-blur-2xl">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block rounded-2xl px-4 py-3 text-stone-700 hover:bg-amber-400 hover:shadow"
                            onClick={closeAll}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Regular link
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 font-bold text-stone-700 hover:text-amber-600"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-3xl text-stone-700 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="h-screen w-full pt-2 md:hidden">
            {navItems.map((item) => {
              // If item has dropdown in mobile
              if (item.dropdown) {
                return (
                  <div key={item.label} className="mb-2">
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="w-full rounded px-4 py-3 text-left text-stone-700"
                    >
                      {item.label}
                      <span className="float-right">
                        {openDropdown === item.label ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </span>
                    </button>

                    {/* Mobile Dropdown */}
                    {openDropdown === item.label && (
                      <div className="mt-2 ml-6 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-stone-600"
                            onClick={closeAll}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Regular mobile link
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="mb-1 block rounded px-4 py-3 text-stone-700"
                  onClick={closeAll}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
