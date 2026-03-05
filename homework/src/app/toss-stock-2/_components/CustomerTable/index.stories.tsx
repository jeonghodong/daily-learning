import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { CustomerTable } from '.';
import type { Customer } from '../../_mocks/mockApi';

const mockCustomers: Customer[] = [
  {
    id: 'C001',
    name: '홍길동',
    phone: '010-1234-5678',
    status: 'NORMAL',
    joinDate: '2023-03-15',
    recentTransactionAmount: 1500000,
  },
  {
    id: 'C002',
    name: '김철수',
    phone: '010-9876-5432',
    status: 'SUSPENDED',
    joinDate: '2022-11-20',
    recentTransactionAmount: 320000,
  },
  {
    id: 'C003',
    name: '이영희',
    phone: '010-5555-1234',
    status: 'DORMANT',
    joinDate: '2021-07-01',
    recentTransactionAmount: 0,
  },
  {
    id: 'C004',
    name: '박민수',
    phone: '010-2222-3333',
    status: 'NORMAL',
    joinDate: '2024-01-10',
    recentTransactionAmount: 8750000,
  },
];

const meta = {
  title: '과제/toss-stock-2/CustomerTable',
  component: CustomerTable,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomerTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customers: mockCustomers,
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    customers: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    customers: [],
    loading: false,
  },
};

export const Stale: Story = {
  args: {
    customers: mockCustomers,
    loading: false,
    isStale: true,
  },
};

export const WithCheckbox: Story = {
  args: {
    customers: mockCustomers,
    loading: false,
    selectedIds: new Set(['C001', 'C003']),
    onToggle: fn(),
    onToggleAll: fn(),
    isAllSelected: false,
  },
};

export const AllSelected: Story = {
  args: {
    customers: mockCustomers,
    loading: false,
    selectedIds: new Set(mockCustomers.map((c) => c.id)),
    onToggle: fn(),
    onToggleAll: fn(),
    isAllSelected: true,
  },
};
