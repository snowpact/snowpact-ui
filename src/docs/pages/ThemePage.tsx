import type { FC } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { HiInformationCircle } from 'react-icons/hi';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Alert, Card } from '../../lib';
import type { CustomHelloInternetTheme } from '../../lib/components/bosons';
import { HelloInternet } from '../../lib/components/bosons';

const ThemePage: FC = () => {
  const theme: CustomHelloInternetTheme = { alert: { color: { primary: 'bg-primary' } } };

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Theme</span>
        <div className="py-4">
          <Alert color="warning" icon={HiInformationCircle}>
            This feature is highly experimental. In the future, it could be deprecated or even suffer several changes.
          </Alert>
          <p className="mt-4">
            Sometimes you want to give your web application a little more personality and customize some aspects of
            Flowbite. This is possible thanks to the support we offer for themes. To use our theme support, your
            application needs to be surrounded by the Flowbite component, and you must tell this component which theme
            you want to load for your application.
          </p>
        </div>
        <Card>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {reactElementToJSXString(<HelloInternet theme={{ theme }}>...</HelloInternet>, {
              showFunctions: true,
              functionValue: (fn) => fn.name,
              sortProps: false,
              useBooleanShorthandSyntax: false,
              useFragmentShortSyntax: false
            })}
          </SyntaxHighlighter>
        </Card>
      </div>
    </div>
  );
};

export default ThemePage;
