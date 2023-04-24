import type { Language } from 'prism-react-renderer';
import Highlight, { Prism } from 'prism-react-renderer';
import type { FC } from 'react';

import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { CopyToClipboard } from './CopyToClipboard';

export interface CodeblockProps {
  language?: Language;
  code: string;
}

export const Codeblock: FC<CodeblockProps> = ({ language = 'javascript', code }) => {
  const theme = useTheme().theme.codeblock;
  return (
    <Highlight Prism={Prism} theme={theme.prismTheme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${theme.base}`} style={style}>
          <div className={theme.clipboard}>
            <CopyToClipboard text={code} />
          </div>
          {tokens.map((line, i) => (
            <div data-testid={`code-line-${i}`} key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
