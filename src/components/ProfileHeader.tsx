import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-gray-200 bg-gray-200 dark:border-gray-700 dark:bg-gray-800 sm:h-56 sm:w-56">
        {image ? (
          <Image
            src={image}
            alt={`${name} 프로필 사진`}
            fill
            sizes="224px"
            className="object-cover"
            // SVG는 이미지 최적화 대상이 아니므로 원본 그대로 보여 줍니다.
            unoptimized={image.endsWith(".svg")}
            priority
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-4xl font-semibold text-gray-500 dark:text-gray-400">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-6 text-xl font-bold">{name}</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{bio}</p>
    </section>
  );
}
