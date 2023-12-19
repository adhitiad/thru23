"use client";
import React from "react";
import ReactPlayer from "react-player/youtube";

const Video = () => {
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=Hdjn6P77j_k"
        width="100%"
        height="100%"
        controls
        playbackRate={1.0}
        playing={true}
        muted
        loop
      />
    </>
  );
};

export default Video;
