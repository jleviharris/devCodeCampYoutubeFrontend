import "./index.css";

import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import MainCard from "./components/MainCard";
import RowRenderer from "./components/RowRenderer";
import { SearchForVideos } from "./Utilities/Search";

function App(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    (async function setup() {
      const SetUpVideos = await SearchForVideos();
      setVideos(SetUpVideos);
    })();
  }, []);
  console.log(Videos);

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
