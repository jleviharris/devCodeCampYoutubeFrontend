import "./index.css";

import React, { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import RowRenderer from "./components/MainVideos/RowRenderer";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import DisplayMainVideo from "./components/MainVideos/DisplayMainVideo";

function App({id, title, description}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [Videos, setVideos] = useState([]);
  const [RelatedV, setRelatedV] = useState([]);
  
  return (
    <Router>
       
        <Routes>
          
          <Route path="/" exact element={ <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setVideos={setVideos}
          RelatedV={RelatedV}
          setRelatedV={setRelatedV}
        />}/>
          <Route path="/main" exact element={<RowRenderer Videos={Videos} RelatedV={RelatedV} setRelatedV={setRelatedV} />}/>
          <Route path="/SingleVideo" exact element={<DisplayMainVideo id={id} title={title} description={description}/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);
export default App;



