import { useEffect, useState } from "react";
import History from "../components/History/History";
import Information from "../components/Information/Information";
import SearchForm from "../components/SearchForm/SearchForm";

export const Home = () => {
  const [history, updHistory] = useState();
  const [search, updSearch] = useState();

  useEffect(() => {
    // console.log(search);
  }, [search]);

  return (
    <main>
      <h3 className="text-2xl text-center pb-4">Пошук по трекінг-номеру</h3>
      <div className="sm:flex justify-between">
        <div>
          <SearchForm updSearch={updSearch} search={search} />
          <Information />
        </div>
        <History updSearch={updSearch} />
      </div>
    </main>
  );
};
