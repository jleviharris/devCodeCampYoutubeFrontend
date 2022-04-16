import "../index.css";
import Searchbar from "./Searchbar";

const Header = (props) => {
  return (
    <div className="header-container">
      <nav className="logo">
        Clone<span id="tube">Tube</span>
      </nav>
      <Searchbar searchTerm={props.searchTerm} setSearchTerm={props.setSearchTerm}/>
    </div>
  );
};

export default Header;
