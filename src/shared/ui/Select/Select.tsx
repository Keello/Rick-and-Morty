import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import { ArrowDown } from '@app/assets/icons';

import styles from './Select.module.scss';
import { type ISelectOptionProps, SelectOption } from './SelectOption';
import type { TOption } from './types';

interface ISelectProps<T extends TOption> {
  options?: T[];
  placeholder?: string;
  value: T['value'];
  onChange: (value: T['value']) => void;
  className?: string;
  RenderOption?: React.FC<ISelectOptionProps<T>>;
}

export const Select = <T extends TOption>({
  options = [],
  placeholder = 'Select option',
  value = null,
  onChange,
  className,
  RenderOption = SelectOption
}: ISelectProps<T>) => {
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

  const handleSelect = (value: T['value']) => {
    onChange?.(value);
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
        {selectedOption ? <RenderOption option={selectedOption} /> : placeholder}
        <ArrowDown
          className={clsx(styles.select__arrow, { [styles.select__arrow_open]: isOpen })}
        />
      </div>

      {isOpen && (
        <ul className={styles.select__list}>
          {options.map((option) => {
            const isSelected = value === option.value;

            return (
              <li
                key={option.value}
                className={clsx(styles.select__option, {
                  [styles.select__option_selected]: isSelected
                })}
                onClick={() => handleSelect(option.value)}
              >
                <RenderOption option={option} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
