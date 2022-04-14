import "../index.css";

import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="logo">
        Clone<span id="tube">Tube</span>
      </nav>
      <Searchbar />
    </div>
  );
};

export default Header;
