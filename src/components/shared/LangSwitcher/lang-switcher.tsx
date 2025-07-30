"use client";
import { useEffect, useRef, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { Languages } from "lucide-react";
import { supportedLanguages } from "@/lib/languages/languages";

const COOKIE_NAME = "googtrans";

declare global {
  interface Window {
    google: any;
    __GOOGLE_TRANSLATION_CONFIG__?: {
      defaultLanguage: string;
    };
  }
}

const LanguageSwitcher = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  const [languageConfig, setLanguageConfig] = useState<any>();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // Load Google Translate script and initialize
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById("google-translate-script")) return;
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    // Define the global init function
    // @ts-ignore
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
  }, []);

  // Initialize current language from cookie
  useEffect(() => {
    const cookies = parseCookies();
    const existingValue = cookies[COOKIE_NAME];
    let languageValue = existingValue?.split("/")?.[2];

    if (!languageValue && window.__GOOGLE_TRANSLATION_CONFIG__) {
      languageValue = window.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      setCurrentLanguage(languageValue);
    }
    if (window.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(window.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLanguage = (lang: string) => {
    document.cookie = `googtrans=; path=/; domain=${process.env.NEXT_PUBLIC_ROOT_DOMAIN}; expires=Thu, 01 Jan 1971 00:00:00 UTC;`;
    setCookie(null, COOKIE_NAME, `/auto/${lang}`);
    location.reload();
  };

  // if (!currentLanguage || !languageConfig) return null;

  return (
    <div className="relative text-center notranslate">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="p-0.5 lg:p-1.5 lg:border cursor-pointer"
      >
        <Languages className="size-4 lg:size-5" />
      </button>
      {dropdownOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 top-full mt-2 min-w-44 bg-white rounded-sm shadow-md z-10"
        >
          {supportedLanguages.map((ld) => (
            <button
              key={ld.name}
              onClick={() => switchLanguage(ld.name)}
              className="flex items-center gap-x-2 py-2 px-4 w-full text-left hover:bg-gray-200 transition"
            >
              {ld.title}
            </button>
          ))}
        </div>
      )}
      <div id="google_translate_element" style={{ display: "none" }} />
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
