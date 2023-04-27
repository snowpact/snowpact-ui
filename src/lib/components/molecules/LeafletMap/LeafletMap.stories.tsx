import type { Meta } from '@storybook/react';

import { LeafletMap } from '.';
import { MapStyles } from './LeafletMap';

const meta: Meta<typeof LeafletMap> = {
  title: 'Components/molecules/LeafletMap',
  component: LeafletMap,
  decorators: [(Story): JSX.Element => <Story />]
};
export default meta;

const Overlay = (
  <LeafletMap.Overlay position="bottom-left" width="200px" height="200px">
    <h2>
      <b>Snowpact</b>
    </h2>
    <p>Cergy</p>
  </LeafletMap.Overlay>
);

export const Default = () => (
  <LeafletMap width="800px" height="600px" defaultZoom={12} initialCenter={{ latitude: 51.505, longitude: -0.09 }}>
    <LeafletMap.Marker position={{ latitude: 51.505, longitude: -0.09 }} />
  </LeafletMap>
);

export const WithOverlay = () => (
  <LeafletMap
    width="800px"
    height="600px"
    defaultZoom={12}
    initialCenter={{ latitude: 51.505, longitude: -0.09 }}
    overlay={Overlay}
    mapStyle={MapStyles.Light}
  >
    <LeafletMap.Marker position={{ latitude: 51.505, longitude: -0.09 }} />
  </LeafletMap>
);
