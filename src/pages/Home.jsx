import { useEffect, useState } from "react";
import History from "../components/History/History";
import Information from "../components/Information/Information";
import SearchForm from "../components/SearchForm/SearchForm";
import getTrInfo from "../api/getTrInfo";

export const Home = () => {
  const [search, updSearch] = useState();

  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //working track num "20400349126274"
  useEffect(() => {
    if (search) {
      setLoading(true);
      getTrInfo(search)
        .then((response) => {
          setdata(response);
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          setdata([]);
          setLoading(false);
          setError("Упс шось пішло не так...");
        });
    }
  }, [search]);

  return (
    <main>
      <h3 className="text-2xl text-center pb-4">Пошук по трекінг-номеру</h3>
      <div className="sm:flex justify-between">
        <div>
          <SearchForm updSearch={updSearch} search={search} />
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <Information data={data} />
          )}
          {error && <div>Error: {error}</div>}
        </div>
        <History updSearch={updSearch} addTrack={search} />
      </div>
    </main>
  );
};
