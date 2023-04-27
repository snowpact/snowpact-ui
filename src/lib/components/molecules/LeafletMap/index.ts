import { LeafletMap as LeafletMapComponent } from './LeafletMap';
import { LeafletMapMarker as LeafletMapMarkerComponent } from './LeafletMapMarker';
import { LeafletMapOverlay as LeafletMapOverlayComponent } from './LeafletMapOverlay';

LeafletMapComponent.displayName = 'LeafletMap';
LeafletMapMarkerComponent.displayName = 'LeafletMap.Marker';
LeafletMapOverlayComponent.displayName = 'LeafletMap.Overlay';

export const LeafletMap = Object.assign(LeafletMapComponent, {
  Marker: LeafletMapMarkerComponent,
  Overlay: LeafletMapOverlayComponent
});
