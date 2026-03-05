// mockApi.ts

export type AccountStatus = 'NORMAL' | 'SUSPENDED' | 'DORMANT';

export interface Customer {
  id: string;
  name: string;
  phone: string;
  status: AccountStatus;
  joinDate: string;
  recentTransactionAmount: number;
}

export interface FetchCustomersParams {
  page: number;
  limit: number;
  name?: string;
  phone?: string;
  status?: AccountStatus | '';
  startDate?: string;
  endDate?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

// 초기 더미 데이터 생성
const generateMockCustomers = (): Customer[] => {
  const statuses: AccountStatus[] = ['NORMAL', 'SUSPENDED', 'DORMANT'];
  return Array.from({ length: 200 }, (_, i) => ({
    id: `CUST_${String(i + 1).padStart(4, '0')}`,
    name: `고객${i + 1}`,
    phone: `010-${String(Math.floor(Math.random() * 9000) + 1000)}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    joinDate: new Date(Date.now() - Math.floor(Math.random() * 10000000000))
      .toISOString()
      .split('T')[0],
    recentTransactionAmount: Math.floor(Math.random() * 1000000),
  }));
};

let MOCK_DB = generateMockCustomers();

export const MockApi = {
  // ① 고객 목록 조회 (필터링 및 페이지네이션)
  fetchCustomers: async (
    params: FetchCustomersParams,
  ): Promise<PaginatedResponse<Customer>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...MOCK_DB];

        if (params.name)
          filtered = filtered.filter((c) => c.name.includes(params.name!));
        if (params.phone)
          filtered = filtered.filter((c) => c.phone.includes(params.phone!));
        if (params.status)
          filtered = filtered.filter((c) => c.status === params.status);
        if (params.startDate)
          filtered = filtered.filter((c) => c.joinDate >= params.startDate!);
        if (params.endDate)
          filtered = filtered.filter((c) => c.joinDate <= params.endDate!);

        const totalCount = filtered.length;
        const totalPages = Math.ceil(totalCount / params.limit);
        const startIndex = (params.page - 1) * params.limit;
        const paginatedData = filtered.slice(
          startIndex,
          startIndex + params.limit,
        );

        resolve({
          data: paginatedData,
          totalCount,
          currentPage: params.page,
          totalPages,
        });
      }, 500); // 0.5초 네트워크 지연
    });
  },

  // ② 일괄 상태 변경 (에러 상황 포함)
  bulkSuspendAccounts: async (
    customerIds: string[],
  ): Promise<{ success: boolean; message: string }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 10% 확률로 에러 발생 (트러블슈팅/예외처리 평가용)
        if (Math.random() < 0.1) {
          reject(new Error('서버 응답 지연으로 처리에 실패했습니다.'));
          return;
        }

        MOCK_DB = MOCK_DB.map((c) =>
          customerIds.includes(c.id) ? { ...c, status: 'SUSPENDED' } : c,
        );
        resolve({
          success: true,
          message: `${customerIds.length}명의 계정이 일시 정지되었습니다.`,
        });
      }, 800);
    });
  },

  // ② -2 일괄 활성화 (에러 상황 포함)
  bulkActivateAccounts: async (
    customerIds: string[],
  ): Promise<{ success: boolean; message: string }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject(new Error('서버 응답 지연으로 처리에 실패했습니다.'));
          return;
        }

        MOCK_DB = MOCK_DB.map((c) =>
          customerIds.includes(c.id) ? { ...c, status: 'NORMAL' as const } : c,
        );
        resolve({
          success: true,
          message: `${customerIds.length}명의 계정이 활성화되었습니다.`,
        });
      }, 800);
    });
  },

  // ③ 보상금 지급
  payCompensation: async (
    customerId: string,
    amount: number,
    reason: string,
  ): Promise<{ success: boolean }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          `[보상금 지급 완료] 대상: ${customerId}, 금액: ${amount}, 사유: ${reason}`,
        );
        resolve({ success: true });
      }, 600);
    });
  },
};
