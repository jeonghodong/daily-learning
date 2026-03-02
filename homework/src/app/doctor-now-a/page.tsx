/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import useDebounce from '@/src/hooks/doctor-now/use-debounce';
import { useEffect, useState } from 'react';

export interface Hospital {
  id: number;
  name: string;
  category: string;
  distance: number;
  isOpen: boolean;
}

export default function DoctorNowAPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputData, setInputData] = useState('');
  const [cloneData, setCloneData] = useState([]);
  const debounceValue = useDebounce(inputData, 300);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3001/aData.json');
      const data = await res.json();
      setData(data);
      setCloneData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleSearch = (v: any) => {
    setInputData(v.target.value);
    const filteredData = cloneData.filter((v: Hospital) =>
      v.name.includes(debounceValue),
    );

    console.log('debounceValue', debounceValue);
    console.log('filteredData', filteredData);

    if (filteredData.length !== 0 && v.target.value !== '') {
      setData(filteredData);
    } else if (v.target.value === '') {
      setData(cloneData);
    } else if (filteredData.length === 0) {
      setData([]);
    }
  };

  const handleCategoryFilter = (category: string) => {
    if (category === 'all') {
      return setData(cloneData);
    }

    const filteredData = cloneData.filter((v: Hospital) =>
      v.category.includes(category),
    );

    if (filteredData.length !== 0) {
      setData(filteredData);
    } else if (filteredData.length === 0) {
      setData([]);
    }
  };

  if (isLoading) return <></>;

  return (
    <div className="">
      {cloneData.map((v: Hospital, i) => {
        return (
          <button
            key={i}
            onClick={() => handleCategoryFilter(v.category)}
            style={{ marginLeft: '12px', cursor: 'pointer' }}
          >
            {v.category}
          </button>
        );
      })}

      <button
        onClick={() => handleCategoryFilter('all')}
        style={{ marginLeft: '12px', cursor: 'pointer' }}
      >
        전체
      </button>

      <input onChange={handleSearch} />

      {data.length !== 0 ? (
        data.map((v: Hospital, i: number) => (
          <div style={{ display: 'flex' }} key={i}>
            {v.id}
            {v.name}
            {v.category}
            {v.distance}
            {v.isOpen ? 'open' : 'close'}
          </div>
        ))
      ) : (
        <>데이터가 없어요!</>
      )}
    </div>
  );
}
