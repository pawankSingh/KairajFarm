import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-playfair font-bold text-amber-700 dark:text-amber-400">
              FarmFresh<span className="text-green-600 dark:text-green-400">Eggs</span>
            </Link>
            <p className="mt-4">Farm fresh eggs from free-range, happy hens. Taste the difference of truly fresh eggs raised with care.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#products" className="hover:text-amber-600 dark:hover:text-amber-400">Our Products</Link></li>
              <li><Link href="#about" className="hover:text-amber-600 dark:hover:text-amber-400">About Us</Link></li>
              <li><Link href="#gallery" className="hover:text-amber-600 dark:hover:text-amber-400">Farm Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-amber-600 dark:hover:text-amber-400">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Rajora , Paniara , Maharajganj, Uttar Pradesh</li>
              <li>Open daily: 8am - 6pm</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: kairaj.business@gmail.com</li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400">
                <Facebook />
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400">
                <Instagram />
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Farm Fresh Eggs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}