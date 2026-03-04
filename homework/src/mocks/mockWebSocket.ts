// mockWebSocket.ts

export interface Stock {
    id: string;
    name: string;
    price: number;
    volume: number;
    priceDelta: number;
}

export interface StockUpdate {
    id: string;
    priceDelta: number; // 변동된 가격 폭 (예: +100, -50)
    volumeDelta: number; // 늘어난 거래량
}

export class MockWebSocket {
    private intervalId: NodeJS.Timeout | null = null;
    // 컴포넌트에서 이 onmessage에 콜백 함수를 할당하여 데이터를 수신합니다.
    public onmessage: ((event: { data: string }) => void) | null = null;

    // 1. 초기 1,000개 데이터 제공 (API 호출 대체)
    static getInitialData(): Stock[] {
        return Array.from({ length: 1000 }, (_, i) => ({
            id: `TOSS_${i.toString().padStart(4, '0')}`,
            name: `토스증권 가상종목 ${i}`,
            price: Math.floor(Math.random() * 90000) + 10000,
            volume: Math.floor(Math.random() * 5000),
            priceDelta: 0,
        }));
    }

    // 2. 웹소켓 연결 및 실시간 데이터 스트리밍 시작
    connect() {
        console.log('🔌 Mock WebSocket 연결됨');

        this.intervalId = setInterval(() => {
            if (!this.onmessage) return;

            // 1초마다 10~20개의 종목만 무작위로 가격/거래량 변동 발생
            const updateCount = Math.floor(Math.random() * 11) + 10;
            const updates: StockUpdate[] = Array.from(
                { length: updateCount },
                () => {
                    const randomIndex = Math.floor(Math.random() * 1000);
                    return {
                        id: `TOSS_${randomIndex.toString().padStart(4, '0')}`,
                        priceDelta:
                            (Math.random() > 0.5 ? 1 : -1) *
                            (Math.floor(Math.random() * 500) + 50),
                        volumeDelta: Math.floor(Math.random() * 10) + 1,
                    };
                },
            );

            // 서버에서 JSON String으로 데이터가 넘어오는 상황 시뮬레이션
            this.onmessage({ data: JSON.stringify(updates) });
        }, 1000); // 1초 주기
    }

    // 3. 웹소켓 연결 해제 (컴포넌트 언마운트 시 호출 필수)
    close() {
        if (this.intervalId) clearInterval(this.intervalId);
        console.log('🔌 Mock WebSocket 연결 해제됨');
    }
}
