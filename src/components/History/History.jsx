import React from "react";
import Item from "../Item/Item";
const list = [
  "20400048799002",

  "20400048799003",

  "20400048799004",

  "20400048799005",

  "59000544395305",
];

// const deleteItem = id => {
//   updContacts(prevState => {
//     return prevState.filter(el => el.id !== id);
//   });
// };

// const addItem = (name, tel) => {
//   const isExist = contacts.find(
//     e => e.name.toLocaleLowerCase() === name.toLocaleLowerCase()
//   );
//   if (isExist) {
//     alert('Already exists');
//     return;
//   }

const History = ({ updSearch }) => {
  return (
    <div className="sm:max-w-[300px] p-2 ">
      {list && (
        <div className="">
          <h3 className="bg-slate-200 rounded p-2 text-center font-medium w-[288px] mx-auto">
            Історія
          </h3>

          <ul>
            {list.map((el) => (
              <li
                className="cursor-pointer hover:bg-slate-100"
                onClick={() => updSearch(el)}
              >
                <Item el={el} key={el.id} deleteItem={"deleteItem"} />
              </li>
            ))}
          </ul>
          <p className="bg-orangered text-white rounded p-2 text-center w-[288px] mx-auto cursor-pointer hover:bg-orange-400 duration-300">
            Видалити усі
          </p>
        </div>
      )}
    </div>
  );
};

export default History;
