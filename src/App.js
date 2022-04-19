import "./index.css";
import React, { useState } from "react";
import Header from "./components/Header";
import RowRenderer from "./components/RowRenderer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [Videos, setVideos] = useState([]);
  
  return (
    <div className="container">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setVideos={setVideos}
      />
      <RowRenderer Videos={Videos} />
    </div>
  );
}
export default App;
