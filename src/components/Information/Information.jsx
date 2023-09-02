const Information = ({ data }) => {
  return data.StatusCode === "3" ? (
    <div className="text-center">Номер не знайдено</div>
  ) : (
    data.length !== 0 && (
      <div className="sm:flex p-2 mx-auto sm:mx-0 sm:max-w-none max-w-[300px]">
        <div className="w-fit mx-auto sm:mx-0 flex sm:block text-center">
          <p>Статус доставки: </p>
          <span className="bg-green-200 px-[2px]">{data.Status}</span>
        </div>
        <div className="ml-3">
          <p className="my-2 sm:my-0">
            <span className="bg-slate-200 px-[2px]">Відправлено:</span>{" "}
            {data.WarehouseSender}
          </p>
          <p className="my-2 sm:my-0">
            <span className="bg-slate-200 px-[2px]">Отримано:</span>{" "}
            {data.WarehouseRecipient}
          </p>
        </div>
      </div>
    )
  );
};

export default Information;
