import { DivIcon } from 'leaflet';
import type { FC } from 'react';
import { Marker } from 'react-leaflet';
import type { Coordinates } from './LeafletMap';

export interface LeafletMapMarkerProps {
  position: Coordinates;
}

const MARKER_ICON = new DivIcon({
  className: 'text-primary-500 leaflet-marker-icon',
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  html: `<svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 0 24 24" width="44"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`
});

export const LeafletMapMarker: FC<LeafletMapMarkerProps> = ({ position }): JSX.Element => {
  return <Marker position={[position.latitude, position.longitude]} icon={MARKER_ICON} />;
};
