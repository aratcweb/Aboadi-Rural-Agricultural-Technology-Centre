"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "What We Do", href: "/services" },
  { name: "Projects & Impact", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "News", href: "/news" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on path change
  useEffect(() => {
    // We wrap this in a timeout or avoid it to prevent cascading renders
    // or just disable the eslint rule since it's a common pattern for closing mobile menus
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/logo.png" alt="ARATC Logo" width={48} height={48} className="h-12 w-auto object-contain" />
              {/* Fallback text logo if image is missing/updating */}
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-green-950 group-hover:text-green-700 transition-colors">ARATC</span>
                <span className="text-xs font-medium text-muted hidden sm:block">Aboadi Rural Agricultural Technology Centre</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:gap-x-6 items-center">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-green-700",
                    isActive ? "text-green-700" : "text-charcoal"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <Button href="/contact?type=request-training" variant="primary" size="sm" className="ml-4">
              Request Training
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-charcoal hover:bg-green-50"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open main menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 h-dvh overflow-y-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <Image src="/logo.png" alt="ARATC Logo" width={32} height={32} className="h-8 w-auto object-contain" />
              <span className="text-2xl font-bold text-green-950">ARATC</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-charcoal hover:bg-green-50"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors hover:bg-green-50",
                        isActive ? "text-green-700 bg-green-50/50" : "text-charcoal"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <div className="py-6">
                <Button 
                  href="/contact?type=request-training" 
                  variant="primary" 
                  className="w-full justify-center"
                >
                  Request Training
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
