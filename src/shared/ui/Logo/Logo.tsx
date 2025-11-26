import clsx from 'clsx';
import { type FC } from 'react';

import styles from './Logo.module.scss';

interface ILogoProps {
  size?: 'large' | 'small';
  className?: string;
  onClick?: () => void;
}

export const Logo: FC<ILogoProps> = ({ size = 'large', className, onClick }) => {
  const logoClasses = clsx(styles.logo, className, { [styles[`logo_${size}`]]: !!size });

  return (
    <div
      onClick={onClick}
      className={logoClasses}
    />
  );
};
