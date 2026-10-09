export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  // public/ 폴더 기준 경로 (예: "/profile.jpg"). 비워두면 이름 첫 글자를 표시합니다.
  image?: string;
  links: LinkItem[];
};

// TODO: 보여 주기용 더미 값입니다. 실제 내 정보와 링크, 사진으로 바꿔 주세요.
export const profile: Profile = {
  name: "전해용",
  bio: "풀스택 개발자 / 요즘에는 ai 개발에 관심이 많아요",
  image: "/profile.png",
  links: [
    { id: "github", title: "💻 깃허브", url: "https://github.com/hyjeon07-sudo/LINKNAMU" },
    { id: "blog", title: "✍️ 블로그", url: "https://blog.naver.com/brucejeun" },
    { id: "email", title: "📧 이메일", url: "mailto:hyjeon07@gmail.com" },
  ],
};
