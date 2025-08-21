import { cn } from "@/libs/utils";

interface GradientOverlayProps {
  position: "top" | "bottom";
  color: "black" | "global";
  height: string;
  className?: string;
}

export default function GradientOverlay({
  position,
  color,
  height,
  className = "",
}: GradientOverlayProps) {
  const classNameArr: string[] = [];

  const colorMap = {
    black: { from: "from-black/0", to: "to-black" },
    global: { from: "from-global/0", to: "to-global" },
  };

  classNameArr.push(height);

  if (color === "black") {
    classNameArr.push(colorMap.black.from, colorMap.black.to);
  } else {
    classNameArr.push(colorMap.global.from, colorMap.global.to);
  }

  if (position === "top") {
    classNameArr.push("top-0", "bg-gradient-to-t");
  } else {
    classNameArr.push("bottom-0", "bg-gradient-to-b");
  }

  const result = classNameArr.join(" ");
  return <div className={cn("absolute pointer-events-none inset-x-0", result, className)} />;
}
