import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { SelectInput } from '.';

const statusOptions = [
  { value: '', label: '전체' },
  { value: 'NORMAL', label: '정상' },
  { value: 'SUSPENDED', label: '정지' },
  { value: 'DORMANT', label: '휴면' },
];

const meta = {
  title: '과제/toss-stock-2/UI/SelectInput',
  component: SelectInput,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'status',
    label: '계좌 상태',
    value: '',
    options: statusOptions,
  },
};

export const Selected: Story = {
  args: {
    id: 'status',
    label: '계좌 상태',
    value: 'SUSPENDED',
    options: statusOptions,
  },
};
