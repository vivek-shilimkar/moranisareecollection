import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/knotnthreads", icon: Facebook },
  { name: "Twitter", href: "https://twitter.com/knotnthreads", icon: Twitter },
  { name: "Pinterest", href: "https://in.pinterest.com/knotnthreads", icon: Twitter }, // Using Twitter as placeholder
  { name: "Instagram", href: "https://www.instagram.com/knotnthreads/", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/knot-n-threads", icon: Linkedin },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCnFhKb0zIqX-rWj6P1zxMvg", icon: Youtube },
];

const customerCareLinks = [
  { name: "About Us", href: "/pages/about-us" },
  { name: "Contact Us", href: "/pages/contact-us" },
  { name: "FAQs", href: "/pages/faqs" },
];

const policyLinks = [
  { name: "Privacy Policy", href: "/pages/privacy-policy" },
  { name: "Refund Policy", href: "/pages/refund-policy" },
  { name: "Shipping Policy", href: "/pages/shipping-policy" },
  { name: "Terms of Service", href: "/pages/terms-of-service" },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6">
      <div className="container-custom">
        {/* Social links - visible on all screens */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-secondary"
                aria-label={`${social.name} link`}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        {/* Footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Customer Care Section */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-primary">Customer Care</h3>
            <ul className="space-y-2">
              {customerCareLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-primary">Our Policies</h3>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright text */}
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>&copy; {new Date().getFullYear()} knotnthreads All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
