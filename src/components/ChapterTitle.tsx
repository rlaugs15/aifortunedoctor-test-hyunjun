import { cn } from "@/libs/utils";
import Image, { ImageProps } from "next/image";

interface ChapterTitleProps extends Omit<ImageProps, "src" | "width" | "height" | "alt"> {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
}

export default function ChapterTitle({ src, alt, className = "", ...props }: ChapterTitleProps) {
  return (
    <div className={cn(" w-full aspect-[375/261] flex justify-center items-center", className)}>
      <div className="relative w-[41.87%] max-w-[157px] aspect-[157/84]">
        <Image src={src} fill alt={alt} {...props} />
      </div>
    </div>
  );
}
