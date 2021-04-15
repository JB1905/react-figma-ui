import { HTMLProps } from 'react';
import { Props as IconProps } from './Icon';
interface Props extends Readonly<HTMLProps<HTMLDivElement>> {
    readonly selected?: boolean;
    readonly iconProps: IconProps;
}
export declare const IconButton: ({ selected, className, iconProps, ...props }: Props) => JSX.Element;
export {};
