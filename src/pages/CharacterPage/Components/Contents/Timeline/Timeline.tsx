import SepTitle from "../../../../../components/common/SepTitle/SepTitle";
import "react-vertical-timeline-component/style.min.css";
import { TimelineProps } from "./TimelineValidator";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function Timeline(props: TimelineProps) {
  return (
    <>
      <SepTitle Text={props.Title} Id="timeline" />
      <div className="Timeline-container">
        <VerticalTimeline>
          {props.Timeline.map((item, key) => (
            <VerticalTimelineElement
              key={key}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(196, 137, 21, 0.98)",
                fontFamily: "DontStarveFont",
                fontStyle: "normal",
                fontWeight: 400,
              }}
              contentArrowStyle={{}}
              date={item.Date}
              dateClassName="date"
              iconStyle={{ background: "#633602", color: "#000" }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{
                  fontSize: "32px",
                }}
              >
                {item.Title}
              </h2>
              <p
                className="vertical-timeline-element-description"
                style={{
                  fontSize: "24px",
                }}
              >
                {item.Description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Timeline;
