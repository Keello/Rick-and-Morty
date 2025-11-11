import type { FC } from 'react';
import styles from './Loader.module.scss';
import clsx from 'clsx';

interface LoaderProps {
  size?: 'large' | 'small';
  label?: string;
}

export const Loader: FC<LoaderProps> = ({ size = 'large', label }) => {
  const imageClasses = clsx(styles.loader__img, { [styles[`loader__img_${size}`]]: !!size });

  return (
    <div className={styles.loader}>
      <div className={imageClasses} />
      <p className={styles.loader__label}>{label}</p>
    </div>
  );
};
