"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Props = {
  links: LinkItem[];
};

export default function LinkList({ links }: Props) {
  // 서버에서 받은 클릭 수. 받기 전에는 비어 있어 모든 링크가 0회로 보입니다.
  const [serverCounts, setServerCounts] = useState<Record<string, number>>({});
  // 이 페이지에서 누른 횟수. 서버 응답을 기다리지 않고 화면 숫자를 바로 올리는 데 씁니다.
  const [localClicks, setLocalClicks] = useState<Record<string, number>>({});

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져옵니다.
  useEffect(() => {
    fetch("/api/click", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data: Record<string, number>) => setServerCounts(data))
      .catch((error) => console.error("클릭 수를 불러오지 못했습니다.", error));
  }, []);

  const increment = (id: string) => {
    setLocalClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            id={link.id}
            title={link.title}
            url={link.url}
            count={(serverCounts[link.id] ?? 0) + (localClicks[link.id] ?? 0)}
            onClicked={() => increment(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
