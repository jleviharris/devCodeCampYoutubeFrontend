import "./index.css";

import React, { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import RowRenderer from "./components/MainVideos/RowRenderer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [Videos, setVideos] = useState([]);
  const [RelatedV, setRelatedV] = useState([]);
  
  return (
    <div className="container">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setVideos={setVideos}
        RelatedV={RelatedV}
        setRelatedV={setRelatedV}
      />
      <div className="test">
        <RowRenderer Videos={Videos} RelatedV={RelatedV} setRelatedV={setRelatedV} />
      </div>
      <Footer/>
    </div>
  );
}
export default App;



