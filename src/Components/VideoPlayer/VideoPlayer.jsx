import React, { useRef } from "react";
import "./VideoPlayer.css";
import videoSrc from "../../assets/video.mp4";

const VideoPlayer = ({ playVideo, setplayVideo }) => {
  const clickOutside = useRef();
  const stopVideo = (event) => {
    if (event.target === clickOutside.current) {
      setplayVideo(false);
    }
  };

  return (
    <div
      ref={clickOutside}
      className={`videoPlayer ${playVideo ? "" : "hide"}`}
      onClick={(event) => stopVideo(event)}
    >
      <video src={videoSrc} className="video" muted autoPlay controls></video>
    </div>
  );
};

export default VideoPlayer;
