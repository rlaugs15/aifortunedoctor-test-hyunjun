import { FateResponse } from "@/types/fate";
import FateFrame from "./FateFrame";
import FateHeader from "./FateHeader";
import FateTable from "./FateTable";

interface FateBoxProps {
  fateData: FateResponse;
}

export default function FateBox({ fateData }: FateBoxProps) {
  return (
    <FateFrame>
      <FateHeader userName={fateData.username} birthDate={fateData.datetime} />
      <FateTable fateData={fateData} />
    </FateFrame>
  );
}
