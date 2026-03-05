import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { DateInput } from '.';

const meta = {
  title: '과제/toss-stock-2/UI/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    id: 'startDate',
    label: '가입일 시작',
    value: '',
  },
};

export const WithDate: Story = {
  args: {
    id: 'startDate',
    label: '가입일 시작',
    value: '2024-01-01',
  },
};
