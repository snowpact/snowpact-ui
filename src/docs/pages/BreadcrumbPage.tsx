import type { FC } from 'react';
import { HiHome } from 'react-icons/hi';
import { Breadcrumb } from '../../lib/components/atoms';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const BreadcrumbPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default breadcrumb',
      code: (
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="#" icon={<HiHome />}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
          <Breadcrumb.Item>Snowpact UI React</Breadcrumb.Item>
        </Breadcrumb>
      )
    }
  ];

  return <DemoPage examples={examples} />;
};

export default BreadcrumbPage;
