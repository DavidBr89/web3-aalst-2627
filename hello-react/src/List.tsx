import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
}

interface Student {
  id: number;
  fName: string;
}

// Fake vanuit REST API
const defaultItems = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 6, name: "Item 6" },
];

const List = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [student, setStudent] = useState<Student | null>(null);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [street, setStreet] = useState("");

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    street: "",
  });

  const fullName = `${fName} ${lName}`;

  return (
    <div>
      <p>{student?.fName}</p>
      <ul>
        {defaultItems.map((di) => (
          <li key={di.id}>{di.name}</li>
        ))}
        {items.map((it) => {
          return <li key={it.id}>{it.name}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          setItems([...items, { id: 21, name: "Test" }]);
          console.log(items);
        }}>
        Voeg toe
      </button>
    </div>
  );
};

export default List;
