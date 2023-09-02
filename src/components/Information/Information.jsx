import React from "react";

const Information = () => {
  return (
    <div className="sm:flex p-2 mx-auto sm:mx-0 sm:max-w-none max-w-[300px]">
      <div className="w-fit mx-auto sm:mx-0 flex sm:block text-center">
        <p>Статус доставки: </p>
        <span className="bg-green-200 px-[2px]">Одержано</span>
      </div>
      <div className="ml-3">
        <p className="my-2 sm:my-0">
          <span className="bg-slate-200 px-[2px]">Відправлено:</span> Відділення
          №17 (до 30 кг): вул. Розумовська, 29
        </p>
        <p className="my-2 sm:my-0">
          <span className="bg-slate-200 px-[2px]">Отримано:</span> Відділення
          №13 (до 30 кг): просп. Гагаріна, 43
        </p>
      </div>
    </div>
  );
};

export default Information;
