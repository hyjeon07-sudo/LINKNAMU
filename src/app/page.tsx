import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

// 와이어프레임 구성: 상단 원형 프로필 사진 → 이름 → 한 줄 소개 → 세로로 쌓인 링크 카드
export default function Home() {
  return (
    <>
      {/* 글래스 카드 뒤로 은은하게 비치는 장식용 빛 번짐 */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-[-6rem] h-80 w-80 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-900/20" />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/15" />
        <div className="absolute bottom-[-8rem] left-1/4 h-96 w-96 rounded-full bg-amber-100/60 blur-3xl dark:bg-amber-900/15" />
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-20 pt-24 sm:px-8 sm:pt-28">
        <div className="absolute right-6 top-6 sm:right-8">
          <ThemeToggle />
        </div>

        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />

        <nav aria-label="링크 목록" className="mt-12">
          <LinkList links={profile.links} />
        </nav>
      </main>
    </>
  );
}
