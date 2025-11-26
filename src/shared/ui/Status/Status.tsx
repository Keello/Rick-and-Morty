import clsx from 'clsx';
import type { FC } from 'react';

import styles from './Status.module.scss';

interface StatusProps {
  label?: string;
  type?: 'success' | 'warning' | 'error';
  size?: number;
}

export const Status: FC<StatusProps> = ({ label, type = 'success', size = 10 }) => {
  const sizeWithUnit = size + 'px';

  return (
    <div
      className={clsx(styles.status, {
        [styles.status_success]: type === 'success',
        [styles.status_warning]: type === 'warning',
        [styles.status_error]: type === 'error'
      })}
    >
      <div
        className={styles.status__circle}
        style={{ '--size': sizeWithUnit } as React.CSSProperties}
      />
      {label}
    </div>
  );
};
