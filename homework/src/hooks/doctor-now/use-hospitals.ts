/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';

export const useHospitals = () => {
  const [hospitals, setHospitals] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const LIMIT = 10; // 테스트를 위해 10개씩

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    
    try {
      // 실무에서는 서버에 ?page=0&limit=10 처럼 요청을 보냄
      // 지금은 로컬 json이므로 fetch 후 가공하는 로직으로 대체 (서버라고 가정)
      const response = await fetch('http://localhost:3001/bData.json');
      const allData = await response.json();
      
      // 서버에서 페이지네이션 해서 준다고 가정하고 자르기
      const start = page * LIMIT;
      const end = start + LIMIT;
      const nextData = allData.slice(start, end);

      if (nextData.length === 0) {
        setHasMore(false);
      } else {
        setHospitals((prev) => [...prev, ...nextData]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("데이터 로드 실패", error);
    } finally {
      setIsLoading(false);
    }
  }, [page, isLoading, hasMore]);

  return { hospitals, loadMore, hasMore, isLoading };
};