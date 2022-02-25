import React from "react";
import video from "./video.css";

export default function Video(props) {
  return (
    <li className="videoContainer">
      <div className="video">
        <img
          className="thumimg"
          src={props.videoItem.snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />

        <div className="titleData">
          <p className="title">{props.videoItem.snippet.title}</p>
          <p className="channelTitle">{props.videoItem.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
}
