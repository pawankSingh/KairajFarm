"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBasket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NavLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-playfair font-bold text-amber-700 dark:text-amber-400">
            Kairaj <span className="text-green-600 dark:text-green-400">Farm</span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {NavLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-amber-600 dark:hover:text-amber-400",
                  scrolled ? "text-gray-700 dark:text-gray-200" : "text-gray-800 dark:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
         {/* <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            <ShoppingBasket className="mr-2 h-4 w-4" />
            Shop Now
          </Button>*/}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "text-gray-700 dark:text-gray-200",
              scrolled ? "" : "hover:bg-white/20"
            )}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 py-2 space-y-2">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 font-medium text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400"
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-4">
              <ShoppingBasket className="mr-2 h-4 w-4" />
              Shop Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}