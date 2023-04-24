import type { PrismTheme } from 'prism-react-renderer';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';

export type CodeblockTheme = {
  base: string;
  clipboard: string;
  prismTheme: PrismTheme;
};

export const CODEBLOCK_THEME: CodeblockTheme = {
  base: 'group relative p-2',
  clipboard: 'absolute right-4 top-4 opacity-50 transition-opacity group-hover:opacity-100',
  prismTheme: oceanicNext
};
