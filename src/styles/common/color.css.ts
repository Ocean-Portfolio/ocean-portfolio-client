import { styleVariants } from '@vanilla-extract/css';
import {
  colorPaletteThemeVars,
  commonColorThemeVars,
  userColorThemeVars,
} from '../theme/index.css';

export const colorVariants = styleVariants({
  transparent: {
    color: 'transparent',
  },
  'gray-scale-00': {
    color: commonColorThemeVars.token['gray-scale-00'],
  },
  'gray-scale-01': {
    color: commonColorThemeVars.token['gray-scale-01'],
  },
  'gray-scale-02': {
    color: commonColorThemeVars.token['gray-scale-02'],
  },
  'gray-scale-03': {
    color: commonColorThemeVars.token['gray-scale-03'],
  },
  'gray-scale-04': {
    color: commonColorThemeVars.token['gray-scale-04'],
  },
  'gray-scale-05': {
    color: commonColorThemeVars.token['gray-scale-05'],
  },
  'gray-scale-06': {
    color: commonColorThemeVars.token['gray-scale-06'],
  },
  'sky-cyan-100': {
    color: colorPaletteThemeVars.token['sky-cyan-100'],
  },
  'sky-cyan-300': {
    color: colorPaletteThemeVars.token['sky-cyan-300'],
  },
  primary: {
    color: userColorThemeVars.token.primary,
  },
  'primary-variant': {
    color: userColorThemeVars.token['primary-variant'],
  },
  secondary: {
    color: userColorThemeVars.token.secondary,
  },
  'secondary-variant': {
    color: userColorThemeVars.token['secondary-variant'],
  },
  accent: {
    color: userColorThemeVars.token.accent,
  },
  tertiary: {
    color: userColorThemeVars.token.tertiary,
  },
  'tertiary-variant': {
    color: userColorThemeVars.token['tertiary-variant'],
  },
});

export const backgroundColorVariants = styleVariants({
  transparent: {
    backgroundColor: 'transparent',
  },
  'gray-scale-00': {
    backgroundColor: commonColorThemeVars.token['gray-scale-00'],
  },
  'gray-scale-01': {
    backgroundColor: commonColorThemeVars.token['gray-scale-01'],
  },
  'gray-scale-02': {
    backgroundColor: commonColorThemeVars.token['gray-scale-02'],
  },
  'gray-scale-03': {
    backgroundColor: commonColorThemeVars.token['gray-scale-03'],
  },
  'gray-scale-04': {
    backgroundColor: commonColorThemeVars.token['gray-scale-04'],
  },
  'gray-scale-05': {
    backgroundColor: commonColorThemeVars.token['gray-scale-05'],
  },
  'gray-scale-06': {
    backgroundColor: commonColorThemeVars.token['gray-scale-06'],
  },
  'sky-cyan-100': {
    backgroundColor: colorPaletteThemeVars.token['sky-cyan-100'],
  },
  'sky-cyan-300': {
    backgroundColor: colorPaletteThemeVars.token['sky-cyan-300'],
  },
  primary: {
    backgroundColor: userColorThemeVars.token.primary,
  },
  'primary-variant': {
    backgroundColor: userColorThemeVars.token['primary-variant'],
  },
  secondary: {
    backgroundColor: userColorThemeVars.token.secondary,
  },
  'secondary-variant': {
    backgroundColor: userColorThemeVars.token['secondary-variant'],
  },
  accent: {
    backgroundColor: userColorThemeVars.token.accent,
  },
  tertiary: {
    backgroundColor: userColorThemeVars.token.tertiary,
  },
  'tertiary-variant': {
    backgroundColor: userColorThemeVars.token['tertiary-variant'],
  },
});
