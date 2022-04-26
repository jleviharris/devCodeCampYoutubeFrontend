import "../index.css";
import { SearchForVideos } from "../Utilities/Search";
import { Link } from "react-router-dom";


const Searchbar = ({ searchTerm, setSearchTerm, setVideos }) => {
  const setSearch = (event) => {
    const searchWord = event.target.value;
    setSearchTerm(searchWord); 
  };
  const search = () => {
    SearchForVideos(searchTerm).then((videos) => setVideos(videos));
  };
  return (
    <div className="search">
      {" "}
      <form
        className="form-inline my-2 my-lg-0"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          onChange={setSearch}
          aria-label="Search"
        />
        <Link to="/main"><button onClick={search}>Search</button></Link>
      </form>
    
    </div>
  );
};
export default Searchbar;
