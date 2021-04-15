import { HTMLProps } from 'react';
import { Props as IconProps } from './Icon';
interface Props extends Readonly<HTMLProps<HTMLInputElement>> {
    readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
    readonly iconProps?: IconProps;
}
export declare const Input: ({ className, type, containerProps, iconProps, ...props }: Props) => JSX.Element;
export {};
