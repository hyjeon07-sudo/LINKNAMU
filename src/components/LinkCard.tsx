"use client";

type Props = {
  id: string;
  title: string;
  url: string;
  count: number;
  onClicked?: () => void;
};

export default function LinkCard({ id, title, url, count, onClicked }: Props) {
  // 새 탭으로 이동해도 요청이 끊기지 않도록 sendBeacon으로 클릭을 기록합니다.
  const recordClick = () => {
    onClicked?.();
    const body = new Blob([JSON.stringify({ id })], { type: "application/json" });
    if (!navigator.sendBeacon?.("/api/click", body)) {
      fetch("/api/click", { method: "POST", body, keepalive: true }).catch(() => {});
    }
  };

  // mailto: 링크는 새 탭으로 열면 빈 탭이 남으므로 현재 탭에서 메일 앱을 엽니다.
  const isExternalPage = !url.startsWith("mailto:");

  return (
    <a
      href={url}
      target={isExternalPage ? "_blank" : undefined}
      rel={isExternalPage ? "noopener noreferrer" : undefined}
      onClick={recordClick}
      className="relative block w-full rounded-3xl border border-white/70 bg-white/45 px-16 py-[1.125rem] text-center text-[15px] font-semibold text-stone-700 shadow-[0_4px_20px_-6px_rgba(160,90,50,0.15)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_8px_28px_-8px_rgba(160,90,50,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 active:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.5)] dark:hover:bg-white/10"
    >
      {title}
      {/* 제목은 가운데에 두고, 클릭 수는 오른쪽 끝에 작게 붙입니다 */}
      <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-medium tabular-nums text-stone-400 dark:text-stone-500">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
