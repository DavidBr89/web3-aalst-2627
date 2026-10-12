import React from "react";

const List = () => {
  // Fake vanuit REST API
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
  ];

  return (
    <ul>
      {items.map((it) => {
        return <li key={it.id}>{it.name}</li>;
      })}
    </ul>
  );
};

export default List;
