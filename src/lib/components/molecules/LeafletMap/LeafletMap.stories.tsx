import type { Meta } from '@storybook/react';

import { LeafletMap } from '.';

const meta: Meta<typeof LeafletMap> = {
  title: 'Components/molecules/LeafletMap',
  component: LeafletMap,
  decorators: [
    (Story): JSX.Element => (
      <div className="flex items-center justify-center text-center">
        <Story />
      </div>
    )
  ]
};
export default meta;

export const Default = () => (
  <LeafletMap width="800px" height="600px" defaultZoom={12} initialCenter={{ latitude: 51.505, longitude: -0.09 }} />
);
