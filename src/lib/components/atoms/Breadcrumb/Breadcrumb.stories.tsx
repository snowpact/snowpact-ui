import type { Meta } from '@storybook/react/types-6-0';
import { HiHome } from 'react-icons/hi';
import { Breadcrumb } from '.';

export default {
  title: 'Components/atoms/Breadcrumb',
  component: Breadcrumb
} as Meta;

export const Default = (): JSX.Element => (
  <Breadcrumb>
    <Breadcrumb.Item href="#" icon={<HiHome />}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
    <Breadcrumb.Item>Snowpact UI React</Breadcrumb.Item>
  </Breadcrumb>
);
