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
  name: "홍길동",
  bio: "여기에 한 줄 소개가 들어갑니다",
  image: "/profile-placeholder.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
    { id: "blog", title: "Blog", url: "https://example.com/" },
  ],
};
