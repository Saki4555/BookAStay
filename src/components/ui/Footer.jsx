"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background px-6 py-14 text-foreground">
      <div className="mx-auto max-w-4xl text-center space-y-2">

        {/* Demo Logo */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80"
            alt={t("footer.name")}
            className="h-14 w-auto rounded-md opacity-85"
          />
        </div>

        {/* Name */}
        <h4 className="text-lg font-medium">
          {t("footer.name")}
        </h4>

        {/* Description */}
        <p className="mx-auto max-w-md text-sm text-muted-foreground leading-relaxed">
          {t("footer.description")}
        </p>

        {/* Contact links */}
        <div className="flex justify-center gap-8 pt-2 text-sm">
          <a
            href="https://www.instagram.com/windsofzanzibar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
          >
            <IconBrandInstagram size={20} stroke={1.5} />
            <span>{t("footer.instagram")}</span>
          </a>

          <a
            href="mailto:hello@windsofzanzibar.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
          >
            <IconMail size={20} stroke={1.5} />
            <span>{t("footer.email")}</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="pt-4 text-xs text-muted-foreground">
          © {year} {t("footer.name")} · {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
