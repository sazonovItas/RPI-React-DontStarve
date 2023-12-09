import { DailyCharacterProps } from "./DailyCharacterValidator";
import "./DailyCharacter.css";
import PolygonTitle from "../../../../components/common/PolygonTitle/PolygonTitle";
import Video from "../../../../components/common/Video/Video";

function DailyCharacter(props: DailyCharacterProps) {
  return (
    <>
      <div className="DailyCharacter-container" id="dailycharacter">
        <div className="center-polygon-container">
          <PolygonTitle
            width="100%"
            text={props.Title}
            backColor="#3C2F28"
            fontColor="#FFF"
          />
        </div>
        <div className="DailyCharacter-desc-container">
          <div className="DCImage-container">
            <a href={`/RPI-React-DontStarve/${props.Character.ID}`}>
              <img
                className="DCImage"
                src={props.Character.DayCharacterImg}
                alt="DayCharacter image"
              />
            </a>
          </div>
          <div className="DailyCharacter-desc">
            <h1 className="DCName">{props.Character.Name}</h1>
            <h2
              className="DCPhrase"
              style={{ color: `${props.Character.PhraseColor}` }}
            >
              {props.Character.Phrase}
            </h2>
            <p className="DCDesc">{props.Character.Background}</p>
            <img
              className="DCSkins"
              src={props.Character.CharacterSkinsImg}
              alt="Characters skins"
            />
          </div>
        </div>
        <div className="DCVideo">
          <Video VideoId={props.Character.VideoLink} />
        </div>
      </div>
    </>
  );
}

export default DailyCharacter;
