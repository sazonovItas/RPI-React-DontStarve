import { ErrorPageProps } from "./ErrorPageProps";
import "./ErrorPage.css";

function ErrorPage(props: ErrorPageProps) {
  return (
    <>
      <div className="container">
        <h1>{props.Title}</h1>
        <h2>{props.SubTitle}</h2>
        <p>{props.Description}</p>
      </div>
    </>
  );
}

export default ErrorPage;
