import clsx from 'clsx';
import type { FC } from 'react';

import styles from './Status.module.scss';

interface IStatusProps {
  label?: string;
  status?: 'success' | 'warning' | 'error';
  size?: number;
}

export const Status: FC<IStatusProps> = ({ label, status = 'success', size = 10 }) => {
  const sizeWithUnit = size + 'px';

  return (
    <div
      className={clsx(styles.status, {
        [styles.status_success]: status === 'success',
        [styles.status_warning]: status === 'warning',
        [styles.status_error]: status === 'error'
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
