'use client';

import type { AccountStatus } from '../../mocks/mockApi';
import { Checkbox } from '../ui/Checkbox';
import {
  type CustomerTableProps,
  STATUS_CLASSES,
  STATUS_LABELS,
} from './types';
import { formatAmount } from './utils';

function StatusBadge({ status }: { status: AccountStatus }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_CLASSES[status]}`}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}

function TableSkeleton({
  rows = 10,
  withCheckbox = true,
}: {
  rows?: number;
  withCheckbox?: boolean;
}) {
  return (
    <tbody>
      {Array.from({ length: rows }).map((_, i) => (
        <tr key={i} className="border-b border-gray-200">
          {withCheckbox && (
            <td className="w-10 px-4 py-3">
              <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
            </td>
          )}
          <td className="px-4 py-3">
            <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
          </td>
          <td className="px-4 py-3">
            <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
          </td>
          <td className="px-4 py-3">
            <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
          </td>
          <td className="px-4 py-3">
            <div className="h-5 w-14 animate-pulse rounded-full bg-gray-200" />
          </td>
          <td className="px-4 py-3">
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
          </td>
          <td className="px-4 py-3">
            <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export function CustomerTable({
  customers,
  loading,
  isStale = false,
  selectedIds,
  onToggle,
  onToggleAll,
  isAllSelected = false,
}: CustomerTableProps) {
  const showCheckbox = selectedIds !== undefined && onToggle !== undefined && onToggleAll !== undefined;

  return (
    <div
      className={`overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-opacity ${isStale ? 'opacity-50' : 'opacity-100'}`}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {showCheckbox && (
                <th className="w-10 px-4 py-3 text-left">
                  <Checkbox
                    checked={isAllSelected}
                    onChange={() => onToggleAll?.()}
                    aria-label="전체 선택"
                  />
                </th>
              )}
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                이름
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                전화번호
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                상태
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                가입일
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                최근 거래 금액
              </th>
            </tr>
          </thead>
          {loading ? (
            <TableSkeleton withCheckbox={showCheckbox} />
          ) : (
            <tbody className="divide-y divide-gray-200 bg-white">
              {customers.length === 0 ? (
                <tr>
                  <td
                    colSpan={showCheckbox ? 7 : 6}
                    className="px-4 py-8 text-center text-sm text-gray-500"
                  >
                    검색 결과가 없습니다.
                  </td>
                </tr>
              ) : (
                customers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    {showCheckbox && (
                      <td className="w-10 px-4 py-3">
                        <Checkbox
                          checked={selectedIds?.has(customer.id) ?? false}
                          onChange={() => onToggle?.(customer.id)}
                          aria-label={`${customer.name} 선택`}
                        />
                      </td>
                    )}
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900">
                      {customer.id}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
                      {customer.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
                      {customer.phone}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm">
                      <StatusBadge status={customer.status} />
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
                      {customer.joinDate}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
                      {formatAmount(customer.recentTransactionAmount)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
