import localFont from "next/font/local";

export const hanseok = localFont({
  src: [{ path: "../../public/fonts/GapyeongHanseokbongL.woff2", weight: "300", style: "normal" }],
  display: "swap", // or "optional" (튀는 현상 거의 제거)
  fallback: ["system-ui", "Apple SD Gothic Neo", "Malgun Gothic", "Arial"],
  adjustFontFallback: "Arial", // 폴백 메트릭 보정 → 레이아웃 점프 감소
  variable: "--font-hanseok", // CSS 변수로도 사용하고 싶으면
});
