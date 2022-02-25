import React from "react";
import Video from "../Video/Video";
import videolist from "./videolist.css";


export default function VideoList(props) {
  return (
    <ul className="videoList">
      {
      
      props.videoItem.map( videoItem => (
        <Video videoItem={videoItem} key={videoItem.etag} />
      ))
      
      }
    </ul>
  );
}

