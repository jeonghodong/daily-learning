import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FormField } from '.';

const meta = {
  title: '과제/toss-stock-2/UI/FormField',
  component: FormField,
  tags: ['autodocs'],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'example',
    label: '이름',
    children: <input id="example" type="text" placeholder="이름을 입력하세요" />,
  },
};
