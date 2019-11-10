import React from "react";

const VideoDetail = ({ video }) => {

    if (!video){
        return <div>Loading...</div>
    }


  return (
    <div>
      <div>Player</div>
      <div className="header">{video ? video.snippet.title : "click thumbnail"}</div>
      <div>{video ? video.snippet.description : "to see a video"}</div>
    </div>
  );
};

export default VideoDetail;