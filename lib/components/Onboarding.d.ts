import { HTMLProps } from 'react';
import { Props as IconProps } from './Icon';
interface Props extends Readonly<HTMLProps<HTMLDivElement>> {
    readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
    readonly iconProps: IconProps;
}
export declare const Onboarding: ({ children, className, containerProps, iconProps, ...props }: Props) => JSX.Element;
export {};
