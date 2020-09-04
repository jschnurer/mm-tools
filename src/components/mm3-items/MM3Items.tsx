import React, { useState } from "react";
import PageTitle from "components/layout/PageTitle";
import "./MM3Items.scoped.scss";
import weapons from "game-data/mm3/weapons.json";

const MM3Items: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState<{
    name: string;
    classes: string;
    hands: string;
    damage: string;
  }[]>([]);

  const doSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const wepMatches = weapons.filter(w => searchTerm
      .toUpperCase()
      .indexOf(w.name.toUpperCase()) > -1);
    setItems(wepMatches);
  }

  return (
    <>
      <PageTitle title="M&amp;M 3 Item Identifier" />
      <form
        onSubmit={(e) => doSearch(e)}
      >
        <input
          type="text"
          placeholder="Type item name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {items.length > 0 &&
        <ul className="results">
          {items.map(item =>
            <li key={item.name}>
              {item.name}
            </li>
          )}
        </ul>
      }
    </>
  );
}

export default MM3Items;