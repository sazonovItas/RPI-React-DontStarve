import { ErrorPageProps } from "./ErrorComponentProps";
import "./ErrorComponent.css";

function ErrorPage(props: ErrorPageProps) {
  return (
    <>
      <div className="container">
        <img src={props.Img} alt="ErrorImg" />
        <h1>{props.Title}</h1>
        <h2>{props.SubTitle}</h2>
        <p>{props.Description}</p>
      </div>
    </>
  );
}

export default ErrorPage;
