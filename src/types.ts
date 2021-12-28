import { colorNames } from '../constants/colorNames';
import { iconNames } from '../constants/iconNames';
import { sizes } from '../constants/sizes';
import { tints } from '../constants/tints';
import { weights } from '../constants/weights';

export type ColorName = typeof colorNames[number];
export type IconName = typeof iconNames[number];
export type Size = typeof sizes[number];
export type Tint = typeof tints[number];
export type Weight = typeof weights[number];
