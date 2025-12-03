"use client";

import React from 'react';
import Link from 'next/link';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandLinkedin, IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h4 className="text-lg font-semibold mb-2">Blue Coast Vacations</h4>
          <p className="text-sm text-secondary-foreground opacity-80">Making stays memorable across the worlds best escapes. Boutique property management and guest services.</p>
          <div className="mt-4 flex items-center gap-3">
            <a aria-label="facebook" href="#" className="hover:opacity-80"><IconBrandFacebook /></a>
            <a aria-label="instagram" href="#" className="hover:opacity-80"><IconBrandInstagram /></a>
            <a aria-label="twitter" href="#" className="hover:opacity-80"><IconBrandTwitter /></a>
            <a aria-label="linkedin" href="#" className="hover:opacity-80"><IconBrandLinkedin /></a>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-semibold mb-2">Quick Links</h5>
          <ul className="text-sm text-secondary-foreground space-y-2">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold mb-2">Contact</h5>
          <ul className="text-sm text-secondary-foreground space-y-2">
            <li className="flex items-center gap-2"><IconPhone className="size-4" /> <span>+1 (555) 123-4567</span></li>
            <li className="flex items-center gap-2"><IconMail className="size-4" /> <span>hello@bluecoastvacations.com</span></li>
            <li className="flex items-center gap-2"><IconMapPin className="size-4" /> <span>123 Seaside Ave, Santa Barbara, CA</span></li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold mb-2">Business Hours</h5>
          <p className="text-sm text-secondary-foreground">Mon - Fri: 9am - 6pm</p>
          <p className="text-sm text-secondary-foreground mt-2">Sat: 10am - 3pm</p>
          <p className="text-sm text-secondary-foreground mt-2">Sun: Closed</p>
        </div>

      </div>

      <div className="mt-8 max-w-7xl mx-auto border-t border-secondary/30 pt-6 text-sm text-secondary-foreground opacity-80 flex items-center justify-between">
        <p>© {year} Blue Coast Vacations — All rights reserved</p>
        <p>Made with care • Privacy Policy</p>
      </div>
    </footer>
  );
}
