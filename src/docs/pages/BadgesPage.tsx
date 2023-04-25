import type { FC } from 'react';
import { HiCheck, HiClock } from 'react-icons/hi';
import { Badge } from '../../lib';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const BadgesPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default badge',
      code: (
        <div className="flex flex-wrap gap-2">
          <Badge color="info">Default</Badge>
          <Badge color="failure">Failure</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="warning">Warning</Badge>
        </div>
      )
    },
    {
      title: 'Large badge',
      code: (
        <div className="flex flex-wrap gap-2">
          <Badge color="info">Default</Badge>
          <Badge color="failure">Failure</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="warning">Warning</Badge>
        </div>
      )
    },
    {
      title: 'Badges as links',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Badge href="/badges">Default</Badge>
          <Badge href="/badges">Default</Badge>
        </div>
      )
    },
    {
      title: 'Badges with icon',
      code: (
        <div className="flex flex-wrap gap-2">
          <Badge icon={<HiCheck />}>2 minutes ago</Badge>
          <Badge icon={<HiClock />}>3 days ago</Badge>
        </div>
      )
    },
    {
      title: 'Badge with icon only',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Badge icon={<HiCheck />} />
        </div>
      )
    }
  ];

  return <DemoPage examples={examples} />;
};

export default BadgesPage;
