import { COLS } from "@/constants/fate";
import { cn } from "@/libs/utils";
import { CellValue, ColKey, RowLabel } from "@/types/fate";

interface DoubbleCellProps {
  label: RowLabel;
  value: Record<ColKey, CellValue>;
}

export default function TripleCell({ label, value }: DoubbleCellProps) {
  return (
    <tr>
      <th scope="row">
        <div className="flex flex-col">
          <span className="text-[clamp(3px,3.6vw,12px)]">{label.han}</span>
          <span className="text-[clamp(3px,3.6vw,8px)] font-bold">{label.ko}</span>
        </div>
      </th>
      {COLS.map((cal, idx) => {
        const fate = value[cal];

        const claasArr: string[] = [];
        if (fate.badge === "black") {
          claasArr.push("bg-black", "text-white");
        } else if (fate.badge === "red") {
          claasArr.push("bg-[#C23030]", "text-white");
        } else if (fate.badge === "teal") {
          claasArr.push("bg-[#18868C]", "text-white");
        } else if (fate.badge === "white") {
          claasArr.push("border-1", "text-black");
        }
        const classResult = claasArr.join(" ");
        return (
          <td key={`${fate.label}-${fate.symbol}-${idx}`} className="bg-white">
            <div
              className={cn(
                "flex flex-col items-center justify-center rounded-[12.55px] w-[82.5%] aspect-square m-auto p-1",
                classResult
              )}
            >
              <span className="text-[clamp(3px,3.6vw,7.6px)] leading-none">{fate.label}</span>
              <span className="text-[clamp(3px,3.6vw,25.11px)] leading-none">{fate.symbol}</span>
              <span className="text-[clamp(3px,3.6vw,8.37px)] leading-none font-bold">
                {fate.desc}
              </span>
            </div>
          </td>
        );
      })}
    </tr>
  );
}
