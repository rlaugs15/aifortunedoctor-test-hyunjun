import { cn } from "@/libs/utils";
import Image from "next/image";

interface SpeechBubbleUpProps {
  usreName: string;
  className?: string;
}

export default function SpeechBubbleUp({ usreName, className = "" }: SpeechBubbleUpProps) {
  return (
    <div className={cn("absolute bottom-[4%] w-[53.3%] aspect-[250/163]", className)}>
      <div className="relative aspect-[250/163]">
        <Image
          src="/images/speech-bubble-up.svg"
          alt="speech-bubble-up"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 text-[clamp(3px,3.6vw,16px)] top-[32%] left-[16%] aspect-[164/70] w-[70%] flex flex-col justify-between items-center">
          <span>이제 본격적으로</span>
          <span>{`${usreName}님의 사주팔자를`}</span>
          <span>분석해볼 차례네요</span>
        </div>
      </div>
    </div>
  );
}
