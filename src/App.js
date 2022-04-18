import React, { useState, useEffect } from 'react';
import "./index.css";
import axios from 'axios';
import Header from './components/Header';
import MainCards from './components/MainCards';

function App() {
  const APIKEY = "AIzaSyDAXtEJIM9IO2wD89wXhcRxmu72ryJGk2I";
  const [searchTerm, setSearchTerm] = useState('');
  const [Videos, setVideos] = useState([]);
  
  const getData = async () => {
    
    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${APIKEY}&fields=items(id,snippet(channelId,title))&part=snippet&type=video`);
      function placeVideos(){
        let tempVideos = response.data.items;
        setVideos(tempVideos);
      }
    placeVideos();
    }
    catch (ex) {
      console.log('Error in API call');
    }
  } 
    useEffect(() => {
      getData()
    }, []);
    console.log(Videos);
  return (
    <div className='container'>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <MainCards Videos={Videos} />
    </div>
  );
}
export default App;
