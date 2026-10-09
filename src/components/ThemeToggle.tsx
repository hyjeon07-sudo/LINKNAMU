"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/45 text-base shadow-[0_2px_12px_-4px_rgba(160,90,50,0.2)] backdrop-blur-xl transition duration-300 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/10"
    >
      {/* 마운트 전에는 아이콘을 비워 서버/클라이언트 불일치를 피합니다 */}
      {dark === null ? null : dark ? "☀️" : "🌙"}
    </button>
  );
}
