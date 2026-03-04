'use client';

import { MockWebSocket, Stock, StockUpdate } from '@/src/mocks/mockWebSocket';
import { useEffect, useRef, useState } from 'react';
import { List } from 'react-window';
import Row from './_components/Row';

export default function TossStock() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const stockMapRef = useRef<Map<string, Stock>>(new Map());

  // console.log(stocks);

  useEffect(() => {
    const initialData = MockWebSocket.getInitialData();
    const map = new Map(initialData.map((s) => [s.id, s]));
    stockMapRef.current = map;
    setStocks(initialData); // eslint-disable-line react-hooks/set-state-in-effect

    const socket = new MockWebSocket();

    socket.onmessage = (event) => {
      const updates: StockUpdate[] = JSON.parse(event.data);
      const currentMap = stockMapRef.current;

      updates.forEach((update) => {
        const stock = currentMap.get(update.id);
        if (stock) {
          currentMap.set(update.id, {
            ...stock,
            price: stock.price + update.priceDelta,
            volume: stock.volume + update.volumeDelta,
            priceDelta: update.priceDelta,
          });
        }
      });

      setStocks(Array.from(currentMap.values()));
    };

    socket.connect();

    return () => {
      socket.close();
    };
  }, []);

  if (stocks.length === 0) {
    return <div className="text-center mt-20">로딩 중...</div>;
  }

  return (
    <div className="h-[500px] w-full max-w-2xl border mx-auto mt-10">
      <List<{ stocks: Stock[] }>
        rowComponent={Row}
        rowCount={stocks.length}
        rowHeight={50}
        rowProps={{ stocks }}
        style={{ height: 500, width: '100%' }}
      />
    </div>
  );
}
