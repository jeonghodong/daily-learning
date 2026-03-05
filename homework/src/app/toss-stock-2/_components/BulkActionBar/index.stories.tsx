import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { BulkActionBar } from '.';

const meta = {
  title: '과제/toss-stock-2/BulkActionBar',
  component: BulkActionBar,
  tags: ['autodocs'],
  args: {
    onBulkSuspend: fn(),
    onBulkActivate: fn(),
  },
} satisfies Meta<typeof BulkActionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Suspend: Story = {
  args: {
    selectedCount: 3,
    actionType: 'suspend',
    isPending: false,
  },
};

export const Activate: Story = {
  args: {
    selectedCount: 2,
    actionType: 'activate',
    isPending: false,
  },
};

export const Mixed: Story = {
  args: {
    selectedCount: 5,
    actionType: 'mixed',
    isPending: false,
  },
};

export const Pending: Story = {
  args: {
    selectedCount: 3,
    actionType: 'suspend',
    isPending: true,
  },
};

export const NoneSelected: Story = {
  args: {
    selectedCount: 0,
    actionType: 'mixed',
    isPending: false,
  },
};
