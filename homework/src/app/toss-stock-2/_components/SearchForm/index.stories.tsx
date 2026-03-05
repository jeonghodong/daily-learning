import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { SearchForm } from '.';

const meta = {
  title: '과제/toss-stock-2/SearchForm',
  component: SearchForm,
  tags: ['autodocs'],
  args: {
    onSearch: fn(),
  },
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    filters: {
      name: '',
      phone: '',
      status: '',
      startDate: '',
      endDate: '',
      page: 1,
      limit: 10,
    },
  },
};

export const WithFilters: Story = {
  args: {
    filters: {
      name: '홍길동',
      phone: '010-1234',
      status: 'NORMAL',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      page: 1,
      limit: 10,
    },
  },
};
