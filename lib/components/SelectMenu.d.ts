import { HTMLProps, ReactElement } from 'react';
interface SelectMenuProps<T> extends Readonly<HTMLProps<HTMLSelectElement>> {
    readonly options: T[];
    render(...optionData: [T, number, T[]]): ReactElement;
}
interface SelectMenuItemProps extends Readonly<HTMLProps<HTMLOptionElement>> {
}
export declare function SelectMenu<T extends object>({ options, render, className, ...props }: SelectMenuProps<T>): JSX.Element;
export declare const SelectMenuOption: ({ children, ...props }: SelectMenuItemProps) => JSX.Element;
export {};
