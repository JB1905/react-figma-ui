import { HTMLProps } from 'react';
interface Props extends Readonly<HTMLProps<HTMLInputElement>> {
    readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
    readonly labelProps?: Readonly<HTMLProps<HTMLLabelElement>>;
}
export declare const Checkbox: ({ children, id, className, containerProps, labelProps, ...props }: Props) => JSX.Element;
export {};
