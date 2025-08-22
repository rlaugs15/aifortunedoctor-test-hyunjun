import Image from "next/image";

export default function Scene2() {
  return (
    <section className="w-full aspect-[375/285] pr-[4.265%] flex justify-between items-end mb-[14%]">
      <div className="relative aspect-[153/120] w-[40.8%] mb-[7%]">
        <Image src="/images/smoke.svg" fill alt="연기" />
      </div>
      <div className="relative aspect-[120/285] w-[32%]">
        <Image src="/images/scene2.jpg" fill alt="손글씨" />
      </div>
    </section>
  );
}
