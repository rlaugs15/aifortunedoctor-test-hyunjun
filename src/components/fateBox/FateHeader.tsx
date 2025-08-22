import { Datetime } from "@/types/fate";
import Image from "next/image";

interface FateHeaderProps {
  userName: string;
  birthDate: Datetime;
}

export default function FateHeader({ userName, birthDate }: FateHeaderProps) {
  return (
    <section className="w-full flex justify-between items-start mt-[6.6%] mb-[4.3%]">
      <div className="relative aspect-[56/38] w-[16.7%]">
        <Image src="/images/cloud-left.svg" fill alt="왼쪽 구름" />
      </div>
      <header className="w-[68.1%] flex flex-col items-center gap-[25%]">
        <h2 className="text-[clamp(3px,3.6vw,16px)]">{`${userName}님의 사주`}</h2>
        <p className="font-bold text-[clamp(3px,3.6vw,20px)] text-[#424242]">
          {`${birthDate.year}년 ${birthDate.month}월 ${birthDate.day}일 ${birthDate.clock}`}
        </p>
      </header>
      <div className="relative aspect-[56/38] w-[16.7%]">
        <Image src="/images/cloud-right.svg" fill alt="오른쪽 구름" />
      </div>
    </section>
  );
}
