export type DateUnit = "hour" | "day" | "month" | "year";

export type ColKey = DateUnit;
export type BadgeColor = "black" | "red" | "teal" | "white";
export type Datetime = {
  year: number;
  month: number;
  day: number;
  clock: string;
};

/** 다중 항목(귀인 등)에서 1개의 원소 */
export type CellItem = {
  symbol: string; // 예: 天乙, 文昌
  desc?: string; // 예: (천을귀인)
  badge?: BadgeColor; // 필요 시 표시
};

export type CellValue = {
  label?: string; // 윗줄 작은 라벨 (예: 임, 정, 계, 유)

  symbol?: string; // 단일 표현(기존 필드) (예: 십성/천간/지지/십이운성/십이신살 등)
  desc?: string;

  multi?: CellItem[]; // 다중 표현(귀인/복수 신살 등에서 사용)

  badge?: BadgeColor; // 배경 색상
};

export type RowLabel = { han: string; ko: string };

export type Row = {
  id: number;
  label: RowLabel; // 행 라벨 (예: 十星, 天干, 地支 …)
  values: Record<ColKey, CellValue>;
};

export type FateResponse = {
  username: string;
  datetime: Datetime;
  rows: Row[];
};
