import "../index.css";

import Searchbar from "./Searchbar";

const Header = ({ searchTerm, setSearchTerm, setVideos }) => {
  return (
    <div className="header-container">
      <nav className="logo">
        Clone<span id="tube">Tube</span>
      </nav>
      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setVideos={setVideos}
      />
    </div>
  );
};

export default Header;
