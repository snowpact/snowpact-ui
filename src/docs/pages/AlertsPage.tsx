import type { FC } from 'react';
import { HiEye } from 'react-icons/hi';
import { Alert } from '../../lib';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const AlertsPage: FC = () => {
  const alertText = 'Info alert! Change a few things up and try submitting again.';
  const examples: CodeExample[] = [
    {
      title: 'Default alert',
      code: <Alert color="info" title={alertText} />
    },
    {
      title: 'Alerts with icon',
      code: <Alert color="failure" title={alertText} />
    },
    {
      title: 'Dismissible alerts',
      code: <Alert color="success" title={alertText} onDismiss={() => alert('Alert dismissed!')} />,
      codeStringifierOptions: { functionValue: (fn) => fn }
    },
    {
      title: 'Border accent',
      code: <Alert color="warning" title={alertText} />
    },
    {
      title: 'Additional content',
      code: (
        <Alert
          color="info"
          title={alertText}
          additionalContent={
            <>
              <div className="mb-4 mt-2 text-sm text-blue-700 dark:text-blue-800">
                More info about this info alert goes here. This example text is going to run a bit longer so that you
                can see how spacing within an alert works with this kind of content.
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900"
                >
                  <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
                  View more
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-blue-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:border-blue-800 dark:text-blue-800 dark:hover:text-white"
                >
                  Dismiss
                </button>
              </div>
            </>
          }
        />
      )
    },
    {
      title: 'All options',
      code: (
        <Alert
          color="success"
          title={alertText}
          onDismiss={() => alert('Alert dismissed!')}
          additionalContent={
            <>
              <div className="mb-4 mt-2 text-sm text-green-700 dark:text-green-800">
                More info about this info alert goes here. This example text is going to run a bit longer so that you
                can see how spacing within an alert works with this kind of content.
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900"
                >
                  <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
                  View more
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white"
                >
                  Dismiss
                </button>
              </div>
            </>
          }
        />
      )
    }
  ];

  return <DemoPage examples={examples} />;
};

export default AlertsPage;
