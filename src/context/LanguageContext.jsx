"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Import all translations
import { HOME_TRANSLATIONS_EN } from "@/translations/en/home";
import { ABOUT_TRANSLATIONS_EN } from "@/translations/en/about";
import { NAV_ITEMS as NAV_ITEMS_EN } from "@/translations/en/nav";
import { FOOTER_TRANSLATIONS as FOOTER_TRANSLATIONS_EN } from "@/translations/en/footer";
import { TESTIMONIALS as TESTIMONIALS_EN } from "@/translations/en/testimonials";
import { CONTACT_TRANSLATIONS_EN } from "@/translations/en/contact-en";
import { SERVICES_TRANSLATIONS_EN } from "@/translations/en/services-de";

import { HOME_TRANSLATIONS_DE } from "@/translations/de/home";
import { ABOUT_TRANSLATIONS_DE } from "@/translations/de/about";
import { NAV_ITEMS as NAV_ITEMS_DE } from "@/translations/de/nav";
import { FOOTER_TRANSLATIONS as FOOTER_TRANSLATIONS_DE } from "@/translations/de/footer";
import { TESTIMONIALS as TESTIMONIALS_DE } from "@/translations/de/testimonials";
import { CONTACT_TRANSLATIONS_DE } from "@/translations/de/contact-de";
import { SERVICES_TRANSLATIONS_DE } from "@/translations/de/services-de";

const LanguageContext = createContext();

const translations = {
  en: {
    home: HOME_TRANSLATIONS_EN,
    about: ABOUT_TRANSLATIONS_EN,
    nav: NAV_ITEMS_EN,
    footer: FOOTER_TRANSLATIONS_EN,
    testimonials: TESTIMONIALS_EN,
    contact: CONTACT_TRANSLATIONS_EN,
    services: SERVICES_TRANSLATIONS_EN,
  },
  de: {
    home: HOME_TRANSLATIONS_DE,
    about: ABOUT_TRANSLATIONS_DE,
    nav: NAV_ITEMS_DE,
    footer: FOOTER_TRANSLATIONS_DE,
    testimonials: TESTIMONIALS_DE,
    contact: CONTACT_TRANSLATIONS_DE,
    services: SERVICES_TRANSLATIONS_DE,
  },
};

// Function to detect user's location and determine default language
const getDefaultLanguage = () => {
  // Check if language is already stored in localStorage
  if (typeof window !== "undefined") {
    const storedLanguage = localStorage.getItem("preferredLanguage");
    if (storedLanguage) {
      return storedLanguage;
    }

    // Detect language based on browser/location
    const userLanguage = navigator.language || navigator.userLanguage;
    
    // Check if user is in Germany or has German language preference
    if (userLanguage.startsWith("de")) {
      return "de";
    }
  }

  // Default to English
  return "en";
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize language on mount
  useEffect(() => {
    const defaultLang = getDefaultLanguage();
    setLanguage(defaultLang);
    setIsInitialized(true);
  }, []);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized && typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", language);
    }
  }, [language, isInitialized]);

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key;
      }
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}