import type { TOption } from './types';

export interface ISelectOptionProps<T> {
  option: T;
}

export const SelectOption = <T extends TOption>({ option }: ISelectOptionProps<T>) => {
  return <>{option.label}</>;
};
