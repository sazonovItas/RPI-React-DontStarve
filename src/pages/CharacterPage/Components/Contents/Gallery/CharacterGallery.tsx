import SepTitle from "../../../../../components/common/SepTitle/SepTitle";
import "./CharacterGallery.css";
import { CharacterGalleryProps } from "./CharacterGalleryValidator";

function CharacterGallery(props: CharacterGalleryProps) {
  return (
    <>
      <SepTitle Text={props.Title} Id="gallery" />
      <div className="CharacterGallery-container"></div>
    </>
  );
}

export default CharacterGallery;
