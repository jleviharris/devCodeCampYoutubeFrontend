import "./index.css";

import React, { useState } from "react";

import Footer from "./components/Footer";
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
      <div className="test">
        <RowRenderer Videos={Videos} />
      </div>
      <Footer />
    </div>
  );
}
export default App;
