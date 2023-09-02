import im from "../../images/1.png";
import del from "../../images/del.png";
import { useState } from "react";

const Item = ({ el, deleteItem, updSearch }) => {
  const [state, changeState] = useState({
    backgroundColor: "#e2e8f0",
  });
  return (
    <div className="flex space-x-2 my-2 mx-auto w-fit">
      <button
        className="bg-slate-200 flex justify-center items-center rounded w-10"
        onClick={() => {
          if (state.backgroundColor === "#e2e8f0") {
            changeState({
              backgroundColor: "#ff4500",
              color: "white",
            });
          } else {
            changeState({
              backgroundColor: "#e2e8f0",
              fontWeight: 400,
              color: "black",
            });
          }
        }}
      >
        <img src={im} width="15px" alt="pic" />
      </button>
      <p
        className="cursor-pointer p-3 px-9"
        onClick={() => updSearch(el)}
        style={state}
      >
        {el}
      </p>
      <button
        className="bg-slate-200 flex justify-center items-center rounded w-10"
        onClick={(e) => {
          deleteItem(el);
        }}
      >
        <img src={del} width="15px" alt="pic" />
      </button>
    </div>
  );
};

export default Item;
