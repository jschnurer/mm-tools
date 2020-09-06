import React, { useState } from "react";
import PageTitle from "../layout/PageTitle";
import PageLayout from "../layout/PageLayout";

const MMGames = [
  "MM1",
  "MM2",
  "MM3",
  "MM4/5",
  "MM6",
  "MM7",
  "MM8",
  "MM9",
];

interface IGameIndexable {
  [index: string]: string[];
};

const availableRaces: IGameIndexable = {
  "MM3": [
    "Human",
    "Elf",
    "Dwarf",
    "Gnome",
    "Half-Orc",
  ],
  "MM7": [
    "Human",
    "Elf",
    "Dwarf",
    "Goblin",
  ],
  "MM9": [
    "Human",
    "Elf",
    "Dwarf",
    "Half-Orc",
  ],
}

const availableClasses: IGameIndexable = {
  "MM1": [
    "Knight",
    "Paladin",
    "Archer",
    "Cleric",
    "Sorcerer",
    "Robber",
  ],
  "MM2": [
    "Knight",
    "Paladin",
    "Archer",
    "Cleric",
    "Sorcerer",
    "Robber",
    "Ninja",
    "Barbarian",
  ],
  "MM3": [
    "Knight",
    "Paladin",
    "Archer",
    "Cleric",
    "Sorcerer",
    "Robber",
    "Ninja",
    "Barbarian",
    "Druid",
    "Ranger",
  ],
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
  "MM8": [
    "Cleric",
    "Dark Elf",
    "Knight",
    "Minotaur",
    "Necromancer",
    "Troll",
    "Vampire",
  ],
  "MM9": [
    "Fighter -> Mercenary -> Gladiator",
    "Fighter -> Mercenary -> Assassin",
    "Fighter -> Crusader -> Ranger",
    "Fighter -> Crusader -> Paladin",
    "Initiate -> Scholar -> Mage",
    "Initiate -> Scholar -> Lich",
    "Initiative -> Healer -> Priest",
    "Initiative -> Healer -> Druid",
  ]
};

interface IPartySizes {
  [index: string]: number;
};

const partySizes: IPartySizes = {
  "MM1": 6,
  "MM2": 6,
  "MM3": 6,
  "MM4/5": 6,
  "MM6": 4,
  "MM7": 4,
  "MM8": 1,
  "MM9": 4,
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
    let classKey = game;
    let raceKey = game;
    if (game === "MM4/5") {
      classKey = "MM3";
    }
    if (game === "MM1"
      || game === "MM2"
      || game === "MM4/5") {
      raceKey = "MM3";
    }

    const classes = availableClasses[classKey];
    const partySize = partySizes[game];
    const races: string[] | undefined = availableRaces[raceKey];

    let partyMembers: string[] = [];

    for (let i = 0; i < partySize; i++) {
      let character = classes[Math.floor(Math.random() * classes.length)];

      if (races) {
        character += ` (${races[Math.floor(Math.random() * races.length)]})`;
      }

      partyMembers.push(character);
    }

    setState({
      game,
      partyMembers,
    });
  }

  return (
    <PageLayout
      header={(
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
        </>
      )}
    >
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
    </PageLayout>
  );
}

export default RandomParty;