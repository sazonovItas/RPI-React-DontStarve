import { useEffect } from "react";
import { ErrorPageProps } from "./ErrorComponentProps";
import "./ErrorComponent.css";

function ErrorPage(props: ErrorPageProps) {
  useEffect(() => {
    const body = document.body;
    if (body != null) {
      body.style.backgroundImage = `url(${props.BackImg})`;
    }
  });
  return (
    <>
      <div className="container">
        <div className="img-container">
          <img className="img" src={props.Img} alt="ErrorImg" />
        </div>
        <div className="desc-container">
          <h1>{props.Title}</h1>
          <h2>{props.SubTitle}</h2>
          <p>{props.Description}</p>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
