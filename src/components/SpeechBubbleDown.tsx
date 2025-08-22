import { cn } from "@/libs/utils";
import Image from "next/image";

interface SpeechBubbleDownProps {
  usreName: string;
  className?: string;
}

export default function SpeechBubbleDown({ usreName, className = "" }: SpeechBubbleDownProps) {
  return (
    <div className={cn("absolute -top-[26%] left-[8.5%] w-[60.7%] aspect-[272/160]", className)}>
      <div className="relative aspect-[272/160]">
        <Image
          src="/images/speech-bubble-down.svg"
          alt="speech-bubble-down"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 text-[clamp(3px,3.6vw,16px)] top-[16%] left-[16%] aspect-[164/70] w-[70%] flex flex-col justify-center items-center">
          <span>{`제가 ${usreName}님의 사주를`}</span>
          <span>보기 쉽게 표로 정리했어요.</span>
        </div>
      </div>
    </div>
  );
}
