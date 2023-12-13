import SepTitle from "../../../../../components/common/SepTitle/SepTitle";
import "./Map.css";
import { MapProps } from "./MapValidator";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function CharacterLocation(props: MapProps) {
  const defaultState = {
    center: props.Place,
    zoom: 9,
  };

  return (
    <>
      <SepTitle Text={props.Title} Id="map" />
      <div className="Map-container">
        <h2 className="Map-text">{props.PlaceName}</h2>
        <YMaps>
          <Map defaultState={defaultState} className="Map-class">
            <Placemark geometry={props.Place} />
          </Map>
        </YMaps>
      </div>
    </>
  );
}

export default CharacterLocation;
