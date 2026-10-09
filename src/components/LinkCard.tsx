"use client";

type Props = {
  id: string;
  title: string;
  url: string;
};

export default function LinkCard({ id, title, url }: Props) {
  // 새 탭으로 이동해도 요청이 끊기지 않도록 sendBeacon으로 클릭을 기록합니다.
  const recordClick = () => {
    const body = new Blob([JSON.stringify({ id })], { type: "application/json" });
    if (!navigator.sendBeacon?.("/api/click", body)) {
      fetch("/api/click", { method: "POST", body, keepalive: true }).catch(() => {});
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
    >
      {title}
    </a>
  );
}
