import React from "react";

export default function Video(props) {
    return (
        <li className="Video">
            {
                props.videoItem.snippet.channelTitle
            }
        </li>
    )
}
