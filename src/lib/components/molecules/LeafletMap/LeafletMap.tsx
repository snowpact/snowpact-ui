import type { FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

import 'leaflet/dist/leaflet.css';

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type LeafletMapProps = {
  height: string;
  width: string;
  initialCenter: Coordinates;
  defaultZoom: number;
  minZoom?: number;
  maxZoom?: number;
  overlay?: React.ReactNode;
  children?: React.ReactNode;
  mapStyle?: MapStyles;
};

export enum MapStyles {
  Light = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  Classic = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'
}

export const LeafletMap: FC<LeafletMapProps> = ({
  height,
  width,
  initialCenter,
  defaultZoom,
  minZoom,
  maxZoom,
  mapStyle,
  overlay,
  children
}) => {
  const theme = useTheme().theme.leafletMap;

  return (
    <div style={{ height: height, width: width, position: 'relative' }}>
      <MapContainer
        center={[initialCenter.latitude, initialCenter.longitude]}
        zoom={defaultZoom}
        scrollWheelZoom={false}
        style={{ height: height, width: width }}
        className={theme.base}
      >
        <TileLayer
          minZoom={minZoom}
          minNativeZoom={minZoom}
          maxZoom={maxZoom}
          maxNativeZoom={maxZoom}
          attribution=""
          url={mapStyle ?? MapStyles.Classic}
        />
        {children}
      </MapContainer>
      {overlay && overlay}
    </div>
  );
};
