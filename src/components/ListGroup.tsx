import { useState } from "react";
import { ClassType } from "../types/class";
import React from "react";

function ListGroup() {
  let items: ClassType[] = [
    { id: "1", name: "Barbarian" },
    { id: "2", name: "Bard" },
    { id: "3", name: "Cleric" },
    { id: "4", name: "Druid" },
    { id: "5", name: "Fighter" },
    { id: "6", name: "Monk" },
    { id: "7", name: "Paladin" },
    { id: "8", name: "Ranger" },
    { id: "9", name: "Rogue" },
    { id: "10", name: "Sorcerer" },
    { id: "11", name: "Warlock" },
    { id: "12", name: "Wizard" },
    { id: "13", name: "Artificer" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("");
  const emptyList: ClassType[] = [];

  return (
    <>
      <h1>Class List</h1>

      {items.length === 0 && <p>No classes found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className={
              selectedIndex === items.indexOf(item)
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item.id}
            onClick={() => setSelectedIndex(items.indexOf(item))}
            style={{ cursor: "pointer" }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
