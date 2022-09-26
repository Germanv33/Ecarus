import { FC } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import styles from "../Map/Map.module.sass";

interface Props {}

const Map: FC<Props> = ({ children }) => {
  return (
    <div>
      <MapContainer
        center={[55.7887, 49.1221]}
        zoom={12}
        zoomControl={false}
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <div className={styles.parent_content}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[55.7887, 49.1221]}>
            <Popup>Переработка</Popup>
          </Marker>
        </div>

        <div className={styles.children_content}>{children}</div>
        <ZoomControl />
      </MapContainer>
    </div>
  );
};

export default Map;
