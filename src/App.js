import "./index.css";

import React, { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import RowRenderer from "./components/MainVideos/RowRenderer";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import DisplayMainVideo from "./components/MainVideos/DisplayMainVideo";

function App({id, title, description}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [Videos, setVideos] = useState([]);
  const [RelatedV, setRelatedV] = useState([]);
  const [ID, setID] = useState('');
  const [Description, setDescription] = useState('');
  const [Title, setTitle] = useState('');
  
  return (
    
    <Router>
       
        <Routes>
          
          <Route path="/" exact element={ <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setVideos={setVideos}
          // RelatedV={RelatedV}
          // setRelatedV={setRelatedV}
        />}/>
          <Route path="/main" exact element={<RowRenderer Videos={Videos} RelatedV={RelatedV} setRelatedV={setRelatedV} id={id} setID={setID} ID={ID} title={title} setTitle={setTitle} setDescription={setDescription} description={description} Description={Description}/>}/>
          <Route path="/SingleVideo" exact element={<DisplayMainVideo Videos={Videos} id={id} ID={ID} title={title} description={description} Title={Title} Description={Description}/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;



