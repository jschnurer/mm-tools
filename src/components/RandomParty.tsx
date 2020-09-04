import React, { useState } from "react";
import PageTitle from "./layout/PageTitle";

const MMGames = [
  "MM6",
  "MM7",
];

interface IAvailableClasses {
  [index: string]: string[];
};

const availableClasses: IAvailableClasses = {
  "MM6": [
    "Knight",
    "Paladin",
    "Archer",
    "Druid",
    "Cleric",
    "Sorcerer",
  ],
  "MM7": [
    "Knight",
    "Paladin",
    "Archer",
    "Druid",
    "Cleric",
    "Sorcerer",
    "Monk",
    "Ranger",
    "Thief",
  ],
};

interface IPartySizes {
  [index: string]: number;
};

const partySizes: IPartySizes = {
  "MM6": 4,
  "MM7": 4,
}

interface IRandomPartyState {
  game: string,
  partyMembers: string[],
}

const RandomParty: React.FC = () => {
  const [state, setState] = useState<IRandomPartyState>({
    game: "",
    partyMembers: [],
  });

  const generateParty = (game: string) => {
    const classes = availableClasses[game];
    const partySize = partySizes[game];

    let partyMembers: string[] = [];

    for (let i = 0; i < partySize; i++) {
      partyMembers.push(classes[Math.floor(Math.random() * classes.length)]);
    }

    setState({
      game,
      partyMembers,
    });
  }

  return (
    <>
      <PageTitle title="Random Party" />
      <div>
        <p>
          Click a button to generate a random party for that game.
        </p>
        {MMGames.map(game => (
          <button
            key={game}
            onClick={() => generateParty(game)}
            className="primary-button"
          >
            {game}
          </button>
        ))}
      </div>
      {state.partyMembers.length > 0 &&
        <div>
          <h4>Random {state.game} Party</h4>
          <ol>
            {state.partyMembers.map((mem, ix) =>
              <li
                key={ix}
              >
                {mem}
              </li>
            )}
          </ol>
        </div>
      }
    </>
  );
}

export default RandomParty;