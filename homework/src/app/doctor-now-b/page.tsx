'use client';

import { useHospitals } from '@/src/hooks/doctor-now/use-hospitals';
import { useEffect, useRef } from 'react';

export default function DoctorNowBPage() {
  const observerRef = useRef<HTMLDivElement | null>(null);

  // 훅 내부에서 데이터 fetching과 페이지네이션을 모두 관리하도록 설계
  const { hospitals, loadMore, hasMore, isLoading } = useHospitals();

  useEffect(() => {
    // 관찰 대상이 없거나, 더 가져올 데이터가 없거나, 이미 로딩 중이면 중단
    if (!observerRef.current || !hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore(); // 바닥에 닿으면 다음 페이지 요청
        }
      },
      { threshold: 1.0 }, // 완전히 노출되었을 때 실행
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [loadMore, hasMore, isLoading]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>닥터나우 병원 리스트</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {hospitals.map((hospital) => (
          <div
            key={hospital.id}
            style={{
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
          >
            <h3>{hospital.name}</h3>
            <p>
              {hospital.category} | ⭐ {hospital.rating}
            </p>
          </div>
        ))}
      </div>

      {/* 로딩 표시: 사용자 경험(UX)을 위해 중요함 */}
      {isLoading && (
        <p style={{ textAlign: 'center' }}>데이터를 불러오는 중입니다...</p>
      )}

      {/* 관찰 대상: 리스트 가장 하단에 배치 */}
      <div
        ref={observerRef}
        style={{ height: '50px', background: 'transparent' }}
      />

      {!hasMore && (
        <p style={{ textAlign: 'center', color: '#888' }}>
          마지막 데이터입니다.
        </p>
      )}
    </div>
  );
}
