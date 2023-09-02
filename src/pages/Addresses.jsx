import { useEffect, useState } from "react";
import getLocs from "../api/getLocs";

export const Addresses = () => {
  const [data, loadData] = useState([]);

  useEffect(() => {
    getLocs().then((d) => loadData(d.data));
  }, []);

  let pageNumber = 1;

  const loadMore = () => {
    pageNumber += 1;
    getLocs(pageNumber).then((d) => loadData([...data, ...d.data]));
  };

  return (
    <main>
      <ul>
        {data &&
          data.map((el) => {
            return (
              <li
                key={el.SiteKey}
                className="grid grid-cols-3 gap-4 p-2 my-2 w-full"
              >
                <p className="col-span-1">
                  {el.RegionCity} <br />
                  {el.Schedule.Monday}
                </p>

                <p className="col-span-2">{el.Description}</p>
              </li>
            );
          })}
      </ul>
      <div className="text-center mb-2">
        {data.length > 0 && (
          <button
            onClick={loadMore}
            className="bg-orangered font-medium py-2 px-4 rounded text-white ml-2 hover:bg-orange-500 duration-300 inline-block"
          >
            Загрузити ще
          </button>
        )}
      </div>
    </main>
  );
};
