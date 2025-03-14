"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Sarees",
    href: "/collections/chettinad-cotton",
    subMenu: [
      { title: "All Sarees", href: "/collections/chettinad-cotton" },
      { title: "Sungudi Cotton", href: "/collections/traditional-madurai-sungudi-sarees" },
      { title: "Chettinad Cotton", href: "/collections/traditional-chettinad-cotton-sarees" },
      { title: "Boutique Collection", href: "/collections/boutique-sarees" },
      { title: "Mul Mul Cotton", href: "/collections/mul-mul-cotton" },
      { title: "Voil Cotton", href: "/collections/voile-cotton-sarees" },
      { title: "Elite Series", href: "/collections/elite-sarees" },
    ],
  },
  {
    title: "Suit Material",
    href: "/collections/cotton-salwar-materials",
  },
  {
    title: "Contact Us",
    href: "/pages/contact-us",
  },
  {
    title: "Return Policy",
    href: "/pages/refund-policy",
  },
  {
    title: "Blog",
    href: "/blogs/sarees",
  },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/knotnthreads" },
  { name: "Twitter", href: "https://twitter.com/knotnthreads" },
  { name: "Pinterest", href: "https://in.pinterest.com/knotnthreads" },
  { name: "Instagram", href: "https://www.instagram.com/knotnthreads/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/knot-n-threads" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCnFhKb0zIqX-rWj6P1zxMvg" },
];

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Promo banner */}
      <div className="w-full bg-primary py-3 text-center text-sm text-white">
        <p>Buy 2 & Get 15% Off : "OFFER15" | Buy 3 & Get 20% :"OFFER20" | Extra 5% off For prepaid orders</p>
      </div>

      {/* Main header */}
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://web-assets.same.dev/3306058881/1236655765.png"
              alt="Knot N Threads"
              width={130}
              height={50}
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={item.href} className="text-primary hover:text-secondary transition-colors duration-200">
                  {item.title}
                </Link>

                {/* Dropdown for items with submenu */}
                {item.subMenu && hoveredItem === index && (
                  <div className="absolute left-0 top-full z-10 bg-white shadow-md rounded py-2 min-w-52">
                    {item.subMenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-4 py-2 text-primary hover:bg-gray-50 hover:text-secondary transition-colors duration-200"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Link href="/search" className="text-primary hover:text-secondary">
              <Search className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="text-primary hover:text-secondary">
              <ShoppingCart className="h-5 w-5" />
            </Link>

            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-0 lg:hidden text-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-medium">Menu</h2>
                      <SheetTrigger asChild>
                        <Button variant="ghost" className="p-0">
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetTrigger>
                    </div>
                  </div>
                  <div className="flex-1 overflow-auto py-4">
                    <nav className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <div key={item.title} className="px-6">
                          <Link href={item.href} className="text-primary hover:text-secondary block py-2">
                            {item.title}
                          </Link>
                          {item.subMenu && (
                            <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                              {item.subMenu.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="text-primary hover:text-secondary block py-1 text-sm"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>
                  <div className="p-6 border-t border-gray-200">
                    <div className="flex space-x-4 justify-center">
                      {socialLinks.slice(0, 4).map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-secondary"
                        >
                          <span className="sr-only">{social.name}</span>
                          {/* We'd need actual icons here, using first letter as placeholder */}
                          <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                            {social.name.charAt(0)}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
