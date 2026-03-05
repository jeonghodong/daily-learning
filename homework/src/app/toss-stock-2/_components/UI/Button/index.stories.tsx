import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '.';

const meta = {
  title: '과제/toss-stock-2/UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit'],
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '검색',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '초기화',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: '처리 중...',
  },
};
