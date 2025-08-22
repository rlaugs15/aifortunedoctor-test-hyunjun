import { FateResponse } from "@/types/fate";
import DoubleCell from "./DoubleCell";
import TripleCell from "./TripleCell";

interface FateTableProps {
  fateData: FateResponse;
}

export default function FateTable({ fateData }: FateTableProps) {
  return (
    <section className="px-[3.4%] pb-[7.8%] aspect-[328/540]">
      <table className="fate-table h-full">
        <colgroup>
          <col className="w-[18%]" />
          <col className="w-[20.5%]" />
          <col className="w-[20.5%]" />
          <col className="w-[20.5%]" />
          <col className="w-[20.5%]" />
        </colgroup>
        <thead>
          <tr className="text-[clamp(3px,4.5vw,21px)]">
            <th></th>
            <th>時</th>
            <th>日</th>
            <th>月</th>
            <th>年</th>
          </tr>
        </thead>
        <tbody>
          {fateData.rows.map((fate) => {
            if (!fate.values.day.badge) {
              return <DoubleCell key={fate.id} label={fate.label} value={fate.values} />;
            } else {
              return <TripleCell key={fate.id} label={fate.label} value={fate.values} />;
            }
          })}
        </tbody>
      </table>
    </section>
  );
}
