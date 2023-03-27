import type { FC } from 'react';
import { Progress } from '../../lib/components/atoms/Progress/Progress';

import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const ProgressPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default Progress',
      code: <Progress progress={45} />
    },
    {
      title: 'Sizing',
      code: (
        <div className="flex flex-col gap-2">
          <div className="text-base font-medium dark:text-white">Extra Small</div>
          <Progress progress={45} size="xs" color="primary" />
          <div className="text-base font-medium dark:text-white">Small</div>
          <Progress progress={45} size="sm" color="primary" />
          <div className="text-base font-medium dark:text-white">Default</div>
          <Progress progress={45} size="md" color="primary" />
          <div className="text-lg font-medium dark:text-white">Large</div>
          <Progress progress={45} size="lg" color="primary" />
          <div className="text-lg font-medium dark:text-white">Extra Large</div>
          <Progress progress={45} size="xl" color="primary" />
        </div>
      )
    },
    {
      title: 'Colors',
      code: (
        <div className="flex flex-col gap-2">
          <div className="text-base font-medium">Primary</div>
          <Progress progress={45} color="primary" />
          <div className="text-base font-medium text-blue-700">Info</div>
          <Progress progress={45} color="info" />
          <div className="text-base font-medium text-red-700">Failure</div>
          <Progress progress={45} color="failure" />
          <div className="text-base font-medium text-green-700">Success</div>
          <Progress progress={45} color="success" />
          <div className="text-base font-medium text-yellow-700">Warning</div>
          <Progress progress={45} color="warning" />
          <div className="text-base font-medium text-indigo-700">Secondary</div>
          <Progress progress={45} color="secondary" />
          <div className="text-base font-medium text-purple-700">Tertiary</div>
          <Progress progress={45} color="tertiary" />
        </div>
      )
    },
    {
      title: 'With label inside',
      code: <Progress progress={50} label="Flowbite" labelPosition="inside" size="lg" />
    },
    {
      title: 'With label outside',
      code: <Progress progress={45} label="Flowbite" labelPosition="outside" labelProgress={true} />
    }
  ];

  return <DemoPage examples={examples} />;
};

export default ProgressPage;
