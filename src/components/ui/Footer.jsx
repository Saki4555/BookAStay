"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandLinkedin, IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  
   const [isMounted, setIsMounted] = useState(false);
  
    useEffect(() => {
      setIsMounted(true);
    }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h4 className="text-lg font-semibold mb-2">{t("footer.company")}</h4>
          <p className="text-sm text-secondary-foreground opacity-80">{t("footer.description")}</p>
          <div className="mt-4 flex items-center gap-3">
            <a aria-label="facebook" href="#" className="hover:opacity-80"><IconBrandFacebook /></a>
            <a aria-label="instagram" href="#" className="hover:opacity-80"><IconBrandInstagram /></a>
            <a aria-label="twitter" href="#" className="hover:opacity-80"><IconBrandTwitter /></a>
            <a aria-label="linkedin" href="#" className="hover:opacity-80"><IconBrandLinkedin /></a>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-semibold mb-2">{t("footer.quickLinks")}</h5>
          <ul className="text-sm text-secondary-foreground space-y-2">
            <li><Link href="/" className="hover:text-primary transition-colors">{t("nav.0.name")}</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">{t("nav.1.name")}</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">{t("nav.2.name")}</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">{t("nav.3.name")}</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold mb-2">{t("footer.contact")}</h5>
          <ul className="text-sm text-secondary-foreground space-y-2">
            <li className="flex items-center gap-2"><IconPhone className="size-4" /> <span>+1 (555) 123-4567</span></li>
            <li className="flex items-center gap-2"><IconMail className="size-4" /> <span>hello@bluecoastvacations.com</span></li>
            <li className="flex items-center gap-2"><IconMapPin className="size-4" /> <span>123 Seaside Ave, Santa Barbara, CA</span></li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold mb-2">{t("footer.businessHours")}</h5>
          <p className="text-sm text-secondary-foreground">{t("footer.hours.monFri")}</p>
          <p className="text-sm text-secondary-foreground mt-2">{t("footer.hours.sat")}</p>
          <p className="text-sm text-secondary-foreground mt-2">{t("footer.hours.sun")}</p>
        </div>

      </div>

      <div className="mt-8 max-w-7xl mx-auto border-t border-secondary/30 pt-6 text-sm text-secondary-foreground opacity-80 flex items-center justify-between">
        <p>© {year} {t("footer.company")} — {t("footer.copyright")}</p>
        <p>{t("footer.madeWithCare")}</p>
      </div>
    </footer>
  );
}
