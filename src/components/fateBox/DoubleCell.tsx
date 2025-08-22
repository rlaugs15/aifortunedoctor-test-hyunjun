import { COLS } from "@/constants/fate";
import { CellValue, ColKey, RowLabel } from "@/types/fate";

interface DoubbleCellProps {
  label: RowLabel;
  value: Record<ColKey, Pick<CellValue, "symbol" | "desc" | "multi">>;
}

export default function DoubleCell({ label, value }: DoubbleCellProps) {
  return (
    <tr>
      <th scope="row">
        <div className="flex flex-col">
          <span className="text-[clamp(3px,3.6vw,12px)]">{label.han}</span>
          <span className="text-[clamp(3px,3.6vw,8px)] font-bold">{label.ko}</span>
        </div>
      </th>
      {COLS.map((cal) => {
        const fate = value[cal];

        let items: Pick<CellValue, "symbol" | "desc">[] = [];

        if (fate?.multi && fate.multi.length > 0) {
          items = fate.multi;
        } else if (fate?.symbol) {
          items = [{ symbol: fate.symbol, desc: fate.desc }];
        } else {
          items = [];
        }
        return (
          <td key={cal} className="bg-white">
            <div className="flex flex-col items-center">
              {items.length > 0 ? (
                items.map((item, idx) => (
                  <div key={`${cal}-${item.symbol}-${idx}`} className="flex flex-col items-center">
                    <span className="text-[clamp(3px,3.6vw,14.6px)]">{item.symbol}</span>
                    <span className="text-[clamp(3px,3.6vw,9.8px)] font-bold">{item.desc}</span>
                  </div>
                ))
              ) : (
                <span className="text-[clamp(3px,3.6vw,9.8px)] text-gray-400">(없음)</span>
              )}
            </div>
          </td>
        );
      })}
    </tr>
  );
}
