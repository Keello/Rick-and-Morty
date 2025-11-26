import clsx from 'clsx';
import type { FC } from 'react';

import styles from './Loader.module.scss';

interface ILoaderProps {
  size?: 'large' | 'small';
  label?: string;
}

export const Loader: FC<ILoaderProps> = ({ size = 'large', label }) => {
  const imageClasses = clsx(styles.loader__img, { [styles[`loader__img_${size}`]]: !!size });

  return (
    <div className={styles.loader}>
      <div className={imageClasses} />
      <p className={styles.loader__label}>{label}</p>
    </div>
  );
};
