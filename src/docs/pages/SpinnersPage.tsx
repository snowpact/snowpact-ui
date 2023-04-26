import type { FC } from 'react';
import { Button, Spinner } from '../../lib';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const SpinnersPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default spinner',
      code: <Spinner />
    },
    {
      title: 'Colors',
      code: (
        <div className="flex flex-wrap gap-2">
          <Spinner color="info" />
          <Spinner color="success" />
          <Spinner color="failure" />
          <Spinner color="warning" />
          <Spinner color="primary" />
          <Spinner color="secondary" />
          <Spinner color="tertiary" />
        </div>
      )
    },
    {
      title: 'Sizing',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
        </div>
      )
    },
    {
      title: 'Alignment',
      code: (
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Spinner />
          </div>
          <div className="text-center">
            <Spinner />
          </div>
          <div className="text-right">
            <Spinner />
          </div>
        </div>
      )
    },
    {
      title: 'Buttons',
      code: (
        <div className="flex flex-row gap-3">
          <Button>
            <Spinner />
            <span className="pl-3">Loading...</span>
          </Button>
          <Button color="primary">
            <Spinner />
            <span className="pl-3">Loading...</span>
          </Button>
        </div>
      )
    }
  ];

  return <DemoPage examples={examples} />;
};

export default SpinnersPage;
