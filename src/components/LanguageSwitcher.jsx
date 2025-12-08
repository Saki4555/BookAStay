"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-[70px] justify-center">
        <SelectValue placeholder="Language">
          {language === "en" && (
            <img src="/assets/us.webp" alt="English" width={24} height={24} />
          )}
          {language === "de" && (
            <img src="/assets/de.webp" alt="Deutsch" width={24} height={24} />
          )}
        </SelectValue>
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="en">
          <span className="flex items-center gap-2">
            <img src="/assets/us.webp" alt="English" width={20} height={20} />
            <span>English</span>
          </span>
        </SelectItem>

        <SelectItem value="de">
          <span className="flex items-center gap-2">
            <img src="/assets/de.webp" alt="Deutsch" width={20} height={20} />
            <span>Deutsch</span>
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
