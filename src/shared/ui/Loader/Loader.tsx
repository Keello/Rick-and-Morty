import type { FC } from 'react';
import styles from './Loader.module.scss';
import clsx from 'clsx';
import LoaderSvg from '@assets/images/loader.svg?react';

interface LoaderProps {
  size?: 'large' | 'small';
  label?: string;
}

export const Loader: FC<LoaderProps> = ({ size = 'large', label }) => {
  const svgClasses = clsx(styles.loader__svg, { [styles[`loader__svg_${size}`]]: !!size });

  return (
    <div className={styles.loader}>
      <LoaderSvg className={svgClasses} />
      <p className={styles.loader__label}>{label}</p>
    </div>
  );
};
