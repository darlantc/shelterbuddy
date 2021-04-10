import { useState } from "react";

type useIsFetchingPromiseProps = () => Promise<any>;

const useIsFetchingPromise = <T,>(onRefresh: useIsFetchingPromiseProps) => {
  const [isFetching, setIsFetching] = useState(false);
  const [result, setResult] = useState<T | null>(null);

  const refresh = async () => {
    setIsFetching(true);
    const result = await onRefresh();
    setResult(result);
    setIsFetching(false);
  };
  return [isFetching, result, refresh] as const;
};

export default useIsFetchingPromise;
