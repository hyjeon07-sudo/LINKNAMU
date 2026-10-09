import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

// 와이어프레임 구성: 상단 원형 프로필 사진 → 이름 → 한 줄 소개 → 세로로 쌓인 링크 카드
export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-12">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />

      <nav aria-label="링크 목록" className="mt-12">
        <ul className="flex flex-col gap-7">
          {profile.links.map((link) => (
            <li key={link.id}>
              <LinkCard id={link.id} title={link.title} url={link.url} />
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
