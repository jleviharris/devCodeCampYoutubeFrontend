import "../index.css";
import Searchbar from "./Searchbar";

const Header = ({ searchTerm, setSearchTerm, setVideos, RelatedV, setRelatedV}) => {
  return (
    <div className="header-container">
      <nav className="logo">
        Clone<span id="tube">Tube</span>
      </nav>
      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setVideos={setVideos}
        RelatedV={RelatedV}
        setRelatedV={setRelatedV}
      />
    </div>
  );
};

export default Header;
