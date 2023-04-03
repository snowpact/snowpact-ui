import Highlight, { Language, Prism } from 'prism-react-renderer';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import { FC } from 'react';

import { CopyToClipboard } from './CopyToClipboard';

export interface CodeblockProps {
  language?: Language;
  code: string;
}

export const Codeblock: FC<CodeblockProps> = ({ language = 'javascript', code }) => {
  return (
    <Highlight Prism={Prism} theme={oceanicNext} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} group relative`} style={style}>
          <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
            <CopyToClipboard text={code} />
          </div>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
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
