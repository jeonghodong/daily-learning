'use client';

import type { PaginationProps } from './types';
import { getPageNumbers } from './utils';
import * as styles from './styles.css';

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 0) return null;

  const pages = getPageNumbers(currentPage, totalPages);
  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  return (
    <nav className={styles.nav} aria-label="페이지네이션">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canPrev}
        aria-label="이전 페이지"
        className={styles.button}
      >
        이전
      </button>
      <div className={styles.buttonGroup}>
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={
              page === currentPage ? styles.buttonActive : styles.button
            }
          >
            {page}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canNext}
        aria-label="다음 페이지"
        className={styles.button}
      >
        다음
      </button>
    </nav>
  );
}
