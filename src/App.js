import "./App.css";
import { useState, useEffect } from "react";
import VideoList from "./components/VideoList/VideoList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  const [videoItem, setVideoItem] = useState([]); /* 새롭네.. 이게뭐임 */
  const search = (searchValue) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&regioncode=us&q=${searchValue}&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideoItem(result.items))
      .catch(error => console.log('error', error));
  }/* search 함수 */

  useEffect(
    () => {
      let requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=us&key=${API_KEY}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) =>
          setVideoItem(result.items)
        ) /* json파일에서 items만 가져오기~ */
        .catch((error) => console.log("error", error));
    },
    [] /* 마운팅 될 때 한번만 */
  );
  return (
    <div className="App">
      <SearchBar searchResult={search} />
      <VideoList videoItem={videoItem} />
    </div>
  );
}

export default App;
