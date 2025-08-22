// data/sajuSample.ts
import { FateResponse } from "@/types/fate";

export const fateSample: FateResponse = {
  username: "김현준",
  datetime: { year: 1912, month: 1, day: 11, clock: "02:30" },
  rows: [
    {
      id: 1,
      label: { han: "十星", ko: "십성" },
      values: {
        hour: { symbol: "傷官", desc: "(상관)" },
        day: { symbol: "比肩", desc: "(비견)" },
        month: { symbol: "傷官", desc: "(상관)" },
        year: { symbol: "傷官", desc: "(상관)" },
      },
    },
    {
      id: 2,
      label: { han: "天干", ko: "천간" },
      values: {
        hour: { label: "임", symbol: "壬", desc: "陽水", badge: "black" },
        day: { label: "정", symbol: "丁", desc: "陰火", badge: "red" },
        month: { label: "계", symbol: "癸", desc: "陰水", badge: "black" },
        year: { label: "계", symbol: "癸", desc: "陰水", badge: "black" },
      },
    },
    {
      id: 3,
      label: { han: "地支", ko: "지지" },
      values: {
        hour: { label: "인", symbol: "寅", desc: "陽木", badge: "teal" },
        day: { label: "사", symbol: "巳", desc: "陰火", badge: "red" },
        month: { label: "해", symbol: "亥", desc: "陰水", badge: "black" },
        year: { label: "유", symbol: "酉", desc: "陰金", badge: "white" },
      },
    },
    {
      id: 4,
      label: { han: "十星", ko: "십성" },
      values: {
        hour: { symbol: "比肩", desc: "(비견)" },
        day: { symbol: "劫財", desc: "(겁재)" },
        month: { symbol: "食神", desc: "(식신)" },
        year: { symbol: "偏財", desc: "(편재)" },
      },
    },
    {
      id: 5,
      label: { han: "十二運星", ko: "십이운성" },
      values: {
        hour: { symbol: "死", desc: "(사)" },
        day: { symbol: "帝旺", desc: "(제왕)" },
        month: { symbol: "胎", desc: "(태)" },
        year: { symbol: "長生", desc: "(장생)" },
      },
    },
    {
      id: 6,
      label: { han: "十二神殺", ko: "십이신살" },
      values: {
        hour: { symbol: "劫殺", desc: "(겁살)" },
        day: { symbol: "地殺", desc: "(지살)" },
        month: { symbol: "驛馬殺", desc: "(역마살)" },
        year: { symbol: "將星殺", desc: "(장성살)" },
      },
    },
    {
      id: 7,
      label: { han: "貴人", ko: "귀인" },
      values: {
        hour: { symbol: "(없음)" },
        day: { symbol: "(없음)" },

        // 월주는 단일이지만 향후 일관성을 위해
        month: {
          multi: [{ symbol: "天乙", desc: "(천을귀인)" }],
        },

        // 연주는 복수
        year: {
          multi: [
            { symbol: "太極", desc: "(태극귀인)" },
            { symbol: "文昌", desc: "(문창귀인)" },
          ],
        },
      },
    },
  ],
};
