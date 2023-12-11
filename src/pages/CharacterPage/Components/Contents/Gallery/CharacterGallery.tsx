import SepTitle from "../../../../../components/common/SepTitle/SepTitle";
import "./CharacterGallery.css";
import { CharacterGalleryProps } from "./CharacterGalleryValidator";

function CharacterGallery(props: CharacterGalleryProps) {
  return (
    <>
      <SepTitle Text={props.Title} Id="gallery" />
      <div className="CharacterGallery-container">
        {props.Imgs.map((item, key) => (
          <div key={key} className="Gallery-img-container">
            <img className="Gallery-img" src={item} alt={"Gallery image"} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CharacterGallery;
