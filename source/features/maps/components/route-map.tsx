import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
} from "react-leaflet";

import polyline from "@mapbox/polyline";

import type { LatLngTuple } from "leaflet";

export function RouteMap({ data }: any) {
  if (!data) return null;

  const coordinates: LatLngTuple[] = polyline
    .decode(data.route_geometry)
    .map(([lat, lng]: [number, number]) => [lat, lng]);

  return (
    <MapContainer
      center={coordinates[0]}
      zoom={6}
      className="h-[600px] w-full rounded-xl"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Polyline positions={coordinates} color="blue" />

      {data.fuel_stops.map((stop: any, idx: number) => (
        <Marker
          key={idx}
          position={[stop.latitude, stop.longitude]}
        >
          <Popup>
            <div>
              <p>{stop.name}</p>
              <p>${stop.price_per_gallon}/gal</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}