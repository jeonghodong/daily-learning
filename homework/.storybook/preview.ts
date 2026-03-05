import type { Preview } from '@storybook/nextjs-vite';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - 테스트 UI에서만 접근성 위반 사항 표시
      // 'error' - CI 실패: 접근성 위반
      // 'off' - 접근성 검사를 완전히 건너뛰기
      test: 'todo',
    },
  },
};

export default preview;
