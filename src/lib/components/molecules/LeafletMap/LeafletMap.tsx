import { DivIcon } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
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
};

export const LeafletMap = ({ height, width, initialCenter, defaultZoom, minZoom, maxZoom }: LeafletMapProps) => {
  const theme = useTheme().theme.leafletMap;
  const MARKER_ICON = new DivIcon(theme.icon);
  return (
    <div style={{ height: height, width: width }}>
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
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[initialCenter.latitude, initialCenter.longitude]} icon={MARKER_ICON} />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
