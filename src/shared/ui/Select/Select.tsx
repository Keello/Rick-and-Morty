import clsx from 'clsx';
import { type ReactElement, useEffect, useRef, useState } from 'react';

import { ArrowDown, Close } from '@app/assets/icons';

import styles from './Select.module.scss';
import type { TOption } from './types';

interface ISelectProps<T extends TOption> {
  value: T['value'] | null;
  onChange: (value: T['value']) => void;
  options?: T[];
  placeholder?: string;
  className?: string;
  allowClear?: boolean;
  size?: 'large' | 'small';
  renderOption?: (option: T) => ReactElement;
}

export const Select = <T extends TOption>({
  options = [],
  placeholder = 'Select option',
  value = null,
  className,
  allowClear = false,
  size = 'large',
  onChange,
  renderOption
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

  const handleClear = () => {
    onChange?.(null);
  };

  const renderSelectOption = (option: T) => {
    const customOption = renderOption?.(option);

    return customOption ?? option.label;
  };

  return (
    <div
      ref={rootRef}
      className={clsx(styles.select, className, { [styles.select_small]: size === 'small' })}
    >
      <div
        className={styles.select__control}
        onClick={handleToggle}
      >
        {selectedOption ? renderSelectOption(selectedOption) : placeholder}
        {allowClear && selectedOption ? (
          <Close
            className={clsx(styles.select__close)}
            onClick={handleClear}
          />
        ) : null}
        <ArrowDown
          className={clsx(styles.select__arrow, {
            [styles.select__arrow_open]: isOpen,
            [styles.select__arrow_withValue]: allowClear && selectedOption
          })}
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
                {renderSelectOption(option)}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
