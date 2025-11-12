import type { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  icon?: ReactNode;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ icon, children }) => {
  return (
    <button className={styles.button}>
      {icon && <span className={styles.button__icon}>{icon}</span>}
      <span className={styles.button__text}>{children}</span>
    </button>
  );
};
