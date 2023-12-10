import { CharacterOriginProps } from "./CharacterOriginValidator";
import Video from "../../../../../components/common/Video/Video";
import "./CharacterOrigin.css";
import SepTitle from "../../../../../components/common/SepTitle/SepTitle";

function CharacterOrigin(props: CharacterOriginProps) {
  return (
    <>
      <div className="CharacterOrigin-container">
        <SepTitle Text={props.Title} Id={"background"} />
        <div className="Video-container">
          <Video VideoId={props.YoutubeVideoId} />
        </div>
        <div className="CharacterOrigin-desc">
          <p>{props.Text}</p>
        </div>
      </div>
    </>
  );
}

export default CharacterOrigin;
