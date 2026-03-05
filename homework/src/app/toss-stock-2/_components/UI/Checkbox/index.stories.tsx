import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { Checkbox } from '.';

const meta = {
  title: '과제/toss-stock-2/UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    checked: false,
    'aria-label': '선택',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    'aria-label': '선택',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    'aria-label': '선택 불가',
  },
};
