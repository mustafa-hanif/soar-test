import frequentTransferData from "@/api/mockData/frequentTransfer.json";
import { FrequestTransferClient } from "./frequenttransferclient";

export const FrequentTransfer = async () => {
  const frequentTransfer = frequentTransferData;
  return <FrequestTransferClient frequentTransfer={frequentTransfer} />;
};
