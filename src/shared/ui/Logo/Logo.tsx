import { type FC } from 'react';
import styles from './Logo.module.scss';
import clsx from 'clsx';

interface LogoProps {
  size?: 'large' | 'small';
  className?: string;
  onClick?: () => void;
}

export const Logo: FC<LogoProps> = ({ size = 'large', className, onClick }) => {
  const logoClasses = clsx(styles.logo, className, { [styles[`logo_${size}`]]: !!size });

  return (
    <div
      onClick={onClick}
      className={logoClasses}
    />
  );
};
