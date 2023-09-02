import React, { useEffect, useState } from "react";

function SearchForm({ search, updSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (search) {
      setSearchTerm(search);
    }
  }, [search]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updSearch(searchTerm);
  };

  return (
    <div className="sm:w-3/5">
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="mx-auto w-fit sm:mx-0 sm:w-full flex">
          <input
            className="outline-none rounded p-2 bg-slate-200"
            type="text"
            // placeholder="Tracking number..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            className="bg-orangered font-medium py-2 px-4 rounded text-white ml-2 hover:bg-orange-500 duration-300"
            type="submit"
          >
            Пошук
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
