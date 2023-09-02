import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
// "20400349126274",
const History = ({ updSearch, addTrack }) => {
  const [history, updHistory] = useState(
    JSON.parse(localStorage.getItem("nptracklist")) ?? []
  );
  useEffect(() => {
    if (
      !history.includes(addTrack) &&
      addTrack !== undefined &&
      addTrack !== ""
    ) {
      const newArray = [...history, addTrack];
      updHistory(newArray);
      localStorage.setItem("nptracklist", JSON.stringify(newArray));
    }
  }, [addTrack]);

  const deleteItem = (el) => {
    const newArray = history.filter((item) => item !== el);
    updHistory(newArray);
    localStorage.setItem("nptracklist", JSON.stringify(newArray));
  };

  const delAll = () => {
    updHistory([]);
    localStorage.setItem("nptracklist", JSON.stringify([]));
  };

  const [historyShow, show] = useState(false);

  return (
    <div className="sm:max-w-[300px] p-2 ">
      {history && (
        <div className="">
          <h3
            onClick={() => show(!historyShow)}
            className="bg-slate-200 rounded p-2 text-center font-medium w-[288px] mx-auto cursor-pointer"
          >
            {historyShow ? <span>Скрити</span> : <span>Показати</span>} історію
          </h3>
          {historyShow && (
            <div>
              <ul>
                {history.length > 0 &&
                  history.map((el) => (
                    <li key={el}>
                      <Item
                        el={el}
                        deleteItem={deleteItem}
                        updSearch={updSearch}
                      />
                    </li>
                  ))}
              </ul>
              {history.length > 0 && (
                <p
                  onClick={delAll}
                  className="bg-orangered text-white rounded p-2 text-center w-[288px] mx-auto cursor-pointer hover:bg-orange-400 duration-300"
                >
                  Видалити усі
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default History;
