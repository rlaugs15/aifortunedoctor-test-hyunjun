import Image from "next/image";
import ChapterTitle from "./ChapterTitle";
import GradientOverlay from "./GradientOverlay";
import SpeechBubbleUp from "./SpeechBubbleUp";

export default function Scene1() {
  return (
    <section className="relative aspect-[375/752]">
      <div className="relative bg-[url('/images/scene1.jpg')] aspect-[375/652]">
        <GradientOverlay position="top" height="h-1/4" color="black" />
        <ChapterTitle src="/images/chapter-title.svg" alt="1장 챕터 타이틀" />
        <div className="absolute bottom-0 right-0 w-[79.5%] overflow-clip aspect-[298/500]">
          <Image
            src="/images/cheongwol.svg"
            alt="청월아씨"
            fill
            className="drop-shadow-[18px_16px_12px_rgba(0,0,0,0.25)]"
          />
        </div>
        <GradientOverlay position="bottom" height="h-1/5" color="global" />
      </div>
      <SpeechBubbleUp usreName="김현준" />
    </section>
  );
}
