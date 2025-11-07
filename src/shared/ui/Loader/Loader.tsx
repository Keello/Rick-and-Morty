import type { FC } from 'react';
import styles from './Loader.module.scss';
import LoaderSvg from '@assets/images/loader.svg?react';

interface LoaderProps {
  size?: 'large' | 'small';
  label?: string;
}

const Loader: FC<LoaderProps> = ({ size = 'large', label }) => {
  let svgSizeClass = styles.loader__svg;
  svgSizeClass +=
    size === 'large' ? ` ${styles.loader__svg_large}` : ` ${styles.loader__svg_small}`;

  return (
    <div className={styles.loader}>
      <LoaderSvg className={svgSizeClass} />
      <p className={styles.loader__label}>{label}</p>
    </div>
  );
};

export default Loader;
