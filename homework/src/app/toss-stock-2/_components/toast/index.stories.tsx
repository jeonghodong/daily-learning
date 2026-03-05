import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useToast } from './context';
import { Button } from '../UI/Button';

function ToastDemo() {
  const { addToast } = useToast();

  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Button
        variant="primary"
        onClick={() =>
          addToast({ message: '성공적으로 처리되었습니다.', type: 'success' })
        }
      >
        성공 토스트
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          addToast({ message: '처리에 실패했습니다.', type: 'error' })
        }
      >
        에러 토스트
      </Button>
    </div>
  );
}

const meta = {
  title: '과제/toss-stock-2/Toast',
  component: ToastDemo,
  tags: ['autodocs'],
} satisfies Meta<typeof ToastDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
