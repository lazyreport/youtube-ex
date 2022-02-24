import React from "react";
import Video from "../Video/Video";

export default function VideoList(props) {
  return (
    <ul>
      {
      
      props.videoItem.map( videoItem => (
        <Video videoItem={videoItem} key={videoItem.id} />
      ))
      
      }
    </ul>
  );
}

