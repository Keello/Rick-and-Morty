import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

import { ArrowDown } from '@app/assets/icons';

import styles from './Select.module.scss';
import type { Option } from './types';

interface SelectProps {
  options?: Option[];
  placeholder?: string;
  value?: string | null;
  onChange?: (value: string) => void;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options = [],
  placeholder = 'Select option',
  value = null,
  onChange,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const selectedOption = options.find((o) => o.value === value) || null;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as HTMLElement)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const selectByIndex = (idx: number | null) => {
    if (idx == null) return;
    const opt = options[idx];
    if (!opt) return;
    onChange?.(opt.value);
    setIsOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className={clsx(styles.select, className)}
    >
      <div className={styles.select__backdrop} />
      <div
        className={styles.select__control}
        onClick={handleToggle}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <ArrowDown
          className={clsx(styles.select__arrow, { [styles.select__arrow_open]: isOpen })}
        />
      </div>

      {isOpen && (
        <ul className={styles.select__list}>
          {options.map((opt, idx) => {
            const isSelected = value === opt.value;

            return (
              <li
                key={opt.value}
                className={clsx(styles.select__option, {
                  [styles.select__option_selected]: isSelected
                })}
                onClick={() => selectByIndex(idx)}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
