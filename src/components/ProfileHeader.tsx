import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <section className="flex flex-col items-center text-center">
      {/* 흰 테두리 + 따뜻한 그림자를 겹쳐 사진이 살짝 떠 보이도록 합니다 */}
      <div className="relative h-32 w-32 overflow-hidden rounded-full bg-orange-100 shadow-[0_12px_32px_-8px_rgba(194,105,52,0.35),0_4px_10px_-4px_rgba(120,60,20,0.2)] ring-4 ring-white/80 dark:bg-stone-800 dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)] dark:ring-white/10 sm:h-36 sm:w-36">
        {image ? (
          <Image
            src={image}
            alt={`${name} 프로필 사진`}
            fill
            sizes="144px"
            className="object-cover"
            // SVG는 이미지 최적화 대상이 아니므로 원본 그대로 보여 줍니다.
            unoptimized={image.endsWith(".svg")}
            priority
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-4xl font-semibold text-orange-400 dark:text-stone-400">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-7 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2.5 max-w-xs text-[15px] leading-relaxed text-stone-500 [word-break:keep-all] dark:text-stone-400">
        {bio}
      </p>
    </section>
  );
}
