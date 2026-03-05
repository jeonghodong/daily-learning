import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { Pagination } from '.';

const meta = {
  title: '과제/toss-stock-2/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    onPageChange: fn(),
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
  },
};

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
  },
};
