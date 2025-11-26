import clsx from 'clsx';
import type { CSSProperties, FC, PropsWithChildren, ReactNode } from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  icon,
  className,
  onClick,
  children,
  ...rest
}) => {
  return (
    <>
      <button
        className={clsx(styles.button, className)}
        onClick={onClick}
        {...rest}
      >
        {icon}
        <span className={styles.button__text}>{children}</span>
      </button>
    </>
  );
};
