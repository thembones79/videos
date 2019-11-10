import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={video.snippet.title} />
      </div>
      <div className="ui segment">
        <h4 className="header">
          {video ? video.snippet.title : "click thumbnail"}
        </h4>
        <p>{video ? video.snippet.description : "to see a video"}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
