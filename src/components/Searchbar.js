import "../index.css";

const Searchbar = () => {
  return (
    <div className="search">
      {" "}
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default Searchbar;
