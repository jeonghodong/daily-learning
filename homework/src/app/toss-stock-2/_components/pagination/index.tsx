'use client';

import type { PaginationProps } from './types';
import { getPageNumbers } from './utils';

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
    <nav className="flex items-center justify-center gap-1 py-4" aria-label="페이지네이션">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canPrev}
        aria-label="이전 페이지"
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        이전
      </button>
      <div className="flex gap-1">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={`rounded-md border px-3 py-2 text-sm font-medium ${
              page === currentPage
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
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
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        다음
      </button>
    </nav>
  );
}
