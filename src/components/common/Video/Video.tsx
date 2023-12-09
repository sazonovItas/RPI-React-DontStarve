import YouTube, { YouTubeProps } from "react-youtube";
import { VideoProps } from "./VideoValidator";
import "./Video.css";

function Video(props: VideoProps) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube videoId={props.VideoId} opts={opts} onReady={onPlayerReady} />
  );
}

export default Video;
