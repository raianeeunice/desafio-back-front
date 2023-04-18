import React, { useState } from "react";

const Search = ({ dataSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-center">
      <div className="input-group relative flex items-center w-96 mb-4">
        <input
          type="search"
          className="flex-auto block w-full px-3 py-1.5 mr-4 text-white bg-neutral-800 border border-solid border-gray-300 rounded outline-none"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <button
          className="btn inline-block px-6 py-2 border-2 bg-neutral-800 text-white font-medium text-xs uppercase rounded hover:bg-neutral-700 transition duration-150 ease-in-out"
          type="button"
          id="button-addon3"
          onClick={() => dataSearch(search)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
