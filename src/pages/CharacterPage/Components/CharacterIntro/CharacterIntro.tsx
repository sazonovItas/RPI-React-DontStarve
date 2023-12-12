import "./CharacterIntro.css";
import { CharacterIntroProps } from "./CharacterIntroValidator";
import ContentsComponent from "../../../../components/common/Contents/Contents";

function CharacterIntro(props: CharacterIntroProps) {
  const curUrl = location.pathname;

  return (
    <>
      <div className="CharacterIntro-container">
        <div className="Desktop-container">
          <div className="CharacterIntro-Desc-container">
            <div className="CharacterIntro-Desc">
              <h1 className="Character-Name">{props.Name}</h1>
              <h2
                className="Character-Phrase"
                style={{ color: `${props.PhraseColor}` }}
              >
                {props.Phrase}
              </h2>
              <p className="Character-Description">{props.Description}</p>
            </div>
            <ContentsComponent
              CurUrl={curUrl}
              Title={props.Content.Title}
              Contents={props.Content.Contents}
            />
          </div>
          <div className="CharacterIntro-img-container">
            <img
              className="CharacterIntro-img"
              src={props.StatsImg}
              alt={"Stats image"}
              loading="lazy"
            />
          </div>
        </div>
        <div className="Phone-container">
          <div className="CharacterIntro-Desc-container">
            <div className="CharacterIntro-Desc">
              <h1 className="Character-Name">{props.Name}</h1>
              <h2
                className="Character-Phrase"
                style={{ color: `${props.PhraseColor}` }}
              >
                {props.Phrase}
              </h2>
            </div>
            <div className="CharacterIntro-img-container">
              <img
                className="CharacterIntro-img"
                src={props.StatsImg}
                alt={"Stats image"}
                loading="lazy"
              />
            </div>
            <div className="CharacterIntro-Desc">
              <p className="Character-Description">{props.Description}</p>
            </div>
          </div>
          <ContentsComponent
            CurUrl={curUrl}
            Title={props.Content.Title}
            Contents={props.Content.Contents}
          />
        </div>
      </div>
    </>
  );
}

export default CharacterIntro;
