import type { FC } from 'react';
import { HiCheck, HiClock } from 'react-icons/hi';
import { Badge } from '../../lib/components/atoms';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const BadgesPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default badge',
      code: (
        <div className="flex flex-wrap gap-2">
          <Badge color="info">Default</Badge>
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary">Secondary</Badge>
          <Badge color="tertiary">Tertiary</Badge>
          <Badge color="failure">Failure</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="warning">Warning</Badge>
        </div>
      ),
    },
    {
      title: 'Large badge',
      code: (
        <div className="flex flex-wrap gap-2">
          <Badge color="info" size="sm">
            Default
          </Badge>
          <Badge color="primary" size="sm">
            Primary
          </Badge>
          <Badge color="failure" size="sm">
            Failure
          </Badge>
          <Badge color="success" size="sm">
            Success
          </Badge>
          <Badge color="warning" size="sm">
            Warning
          </Badge>
          <Badge color="secondary" size="sm">
            Secondary
          </Badge>
          <Badge color="tertiary" size="sm">
            Tertiary
          </Badge>
        </div>
      ),
    },
    {
      title: 'Badges as links',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Badge href="/badges">Default</Badge>
          <Badge size="sm" href="/badges">
            Default
          </Badge>
        </div>
      ),
    },
    {
      title: 'Badges with icon',
      code: (
        <div className="flex flex-wrap gap-2">
          <Badge icon={HiCheck}>2 minutes ago</Badge>
          <Badge color="primary" icon={HiClock}>
            3 days ago
          </Badge>
        </div>
      ),
    },
    {
      title: 'Badge with icon only',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Badge icon={HiCheck} />
          <Badge color="primary" icon={HiCheck} />
          <Badge size="sm" icon={HiCheck} />
          <Badge color="primary" size="sm" icon={HiCheck} />
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default BadgesPage;
