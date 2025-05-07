import { api } from "@/api";
import { FrequestTransferClient } from "./frequenttransferclient";

export const FrequentTransfer = async () => {
  const frequentTransfer = await api.frequentTransfer();
  return <FrequestTransferClient frequentTransfer={frequentTransfer.body} />;
};
