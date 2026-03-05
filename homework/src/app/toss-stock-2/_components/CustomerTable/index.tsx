'use client';

import type { AccountStatus } from '../../_mocks/mockApi';
import { Checkbox } from '../UI/Checkbox';
import {
  type CustomerTableProps,
  STATUS_CLASSES,
  STATUS_LABELS,
} from './types';
import * as styles from './styles.css';
import { formatAmount } from './utils';

function StatusBadge({ status }: { status: AccountStatus }) {
  return (
    <span className={STATUS_CLASSES[status]}>{STATUS_LABELS[status]}</span>
  );
}

const skeletonWidths = ['5rem', '4rem', '7rem', '3.5rem', '6rem', '5rem'];

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
        <tr key={i} className={styles.skeletonRow}>
          {withCheckbox && (
            <td className={styles.skeletonTdCheckbox}>
              <div className={styles.skeletonPulseSm} />
            </td>
          )}
          {skeletonWidths.map((w, j) => (
            <td key={j} className={styles.skeletonTd}>
              <div className={styles.skeletonPulseMd} style={{ width: w }} />
            </td>
          ))}
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
  const showCheckbox =
    selectedIds !== undefined &&
    onToggle !== undefined &&
    onToggleAll !== undefined;

  return (
    <div className={isStale ? styles.wrapperStale : styles.wrapperFresh}>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              {showCheckbox && (
                <th className={styles.thCheckbox}>
                  <Checkbox
                    checked={isAllSelected}
                    onChange={() => onToggleAll?.()}
                    aria-label="전체 선택"
                  />
                </th>
              )}
              <th className={styles.th}>ID</th>
              <th className={styles.th}>이름</th>
              <th className={styles.th}>전화번호</th>
              <th className={styles.th}>상태</th>
              <th className={styles.th}>가입일</th>
              <th className={styles.th}>최근 거래 금액</th>
            </tr>
          </thead>
          {loading ? (
            <TableSkeleton withCheckbox={showCheckbox} />
          ) : (
            <tbody className={styles.tbody}>
              {customers.length === 0 ? (
                <tr>
                  <td
                    colSpan={showCheckbox ? 7 : 6}
                    className={styles.emptyCell}
                  >
                    검색 결과가 없습니다.
                  </td>
                </tr>
              ) : (
                customers.map((customer) => (
                  <tr key={customer.id} className={styles.tr}>
                    {showCheckbox && (
                      <td className={styles.tdCheckbox}>
                        <Checkbox
                          checked={selectedIds?.has(customer.id) ?? false}
                          onChange={() => onToggle?.(customer.id)}
                          aria-label={`${customer.name} 선택`}
                        />
                      </td>
                    )}
                    <td className={styles.td}>{customer.id}</td>
                    <td className={styles.tdMedium}>{customer.name}</td>
                    <td className={styles.tdMuted}>{customer.phone}</td>
                    <td className={styles.td}>
                      <StatusBadge status={customer.status} />
                    </td>
                    <td className={styles.tdMuted}>{customer.joinDate}</td>
                    <td className={styles.tdMuted}>
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
