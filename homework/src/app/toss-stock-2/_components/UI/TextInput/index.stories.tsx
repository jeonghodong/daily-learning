import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { TextInput } from '.';

const meta = {
  title: '과제/toss-stock-2/UI/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'name',
    label: '고객 이름',
    value: '',
    placeholder: '이름 검색',
  },
};

export const WithValue: Story = {
  args: {
    id: 'name',
    label: '고객 이름',
    value: '홍길동',
    placeholder: '이름 검색',
  },
};
