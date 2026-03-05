export const MAX_VISIBLE = 5;

export function getPageNumbers(
  currentPage: number,
  totalPages: number,
): number[] {
  if (totalPages <= MAX_VISIBLE) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const half = Math.floor(MAX_VISIBLE / 2);
  let start = Math.max(1, currentPage - half);
  const end = Math.min(totalPages, start + MAX_VISIBLE - 1);
  if (end - start + 1 < MAX_VISIBLE) {
    start = Math.max(1, end - MAX_VISIBLE + 1);
  }
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
