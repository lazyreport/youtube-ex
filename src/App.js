import "./App.css";
import { useState, useEffect } from "react";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [videoItem, setVideoItem] = useState([]); /* 새롭네.. 이게뭐임 */
  useEffect(
    () => {
      let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyCBSKOedj6MZgQsphrIRM46fNBDZR3lMoQ", requestOptions)
        .then(response => response.json())
        .then(result => setVideoItem(result.items))/* json파일에서 items만 가져오기~ */
        .catch(error => console.log('error', error));
    },
    [] /* 마운팅 될 때 한번만 */
  );
  return (
    <div className="App">
      <VideoList videoItem={videoItem} />
    </div>
  );
}

export default App;
