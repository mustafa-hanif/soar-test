import { useEffect, useState } from "react";

export const useClient = () => {
  const [clientOnly, setClientOnly] = useState(false);
  useEffect(() => {
    setClientOnly(true);
  }, []);
  return clientOnly;
};
