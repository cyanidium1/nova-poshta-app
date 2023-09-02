export const Addresses = () => {
  const locs = [
    { num: "1", addres: "221e street Kyiuv", working: "24h" },
    { num: "2", addres: "221e street Kyiuv", working: "24h" },
    { num: "3", addres: "221e street Kyiuv", working: "24h" },
    { num: "4", addres: "221e street Kyiuv", working: "24h" },
  ];

  return (
    <main>
      <ul>
        {locs &&
          locs.map((el) => {
            return (
              <li key={el.num} className="flex justify-between p-2 my-2">
                <p>{el.num}</p>
                <p>{el.addres}</p>
                <p>{el.working}</p>
              </li>
            );
          })}
      </ul>
    </main>
  );
};
