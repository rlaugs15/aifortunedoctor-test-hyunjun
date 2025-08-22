import { fateSample } from "@/mocks/fateSample";
import Image from "next/image";
import FateBox from "../fateBox/FateBox";
import GradientOverlay from "../GradientOverlay";
import SpeechBubbleDown from "../SpeechBubbleDown";

export default function Scene3() {
  /** 패칭, 캐시된 데이터 */
  const fateData = fateSample;
  return (
    <section className="relative">
      <div className="relative w-full aspect-[375/306]">
        <Image src="/images/scene3.svg" fill alt="3번 컷씬" />
        <FateBox fateData={fateData} />
      </div>
      <SpeechBubbleDown usreName={fateData.username} />
      <GradientOverlay position="bottom" color="global" height="h-[38.5%]" />
    </section>
  );
}
