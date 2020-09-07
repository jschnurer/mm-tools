import React, { useState } from "react";
import PageTitle from "../layout/PageTitle";
import FlowLayout from "../layout/FlowLayout";

const MMGames = [
  "MM1",
  "MM2",
  "MM3",
  "MM4/5",
  "MM6",
  "MM7",
  "MM8",
  "MM9",
  "MM10",
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
  "MM10": [
    "Human",
    "Elf",
    "Dwarf",
    "Orc",
  ],
};

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
  ],
};

const MM10ClassesByRace: IGameIndexable = {
  "Human": [
    "Mercenary",
    "Crusader",
    "Freemage",
  ],
  "Elf": [
    "Bladedancer",
    "Ranger",
    "Druid",
  ],
  "Dwarf": [
    "Defender",
    "Scout",
    "Runepriest",
  ],
  "Orc": [
    "Barbarian",
    "Hunter",
    "Shaman",
  ],
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
  "MM10": 4,
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

    let partyMembers: string[] = [];
    const races: string[] | undefined = availableRaces[raceKey];
    const partySize = partySizes[game];

    if (game === "MM10") {
      for (let i = 0; i < partySize; i++) {
        const race = races[Math.floor(Math.random() * races.length)];
        const classes = MM10ClassesByRace[race];

        partyMembers.push(`${classes[Math.floor(Math.random() * classes.length)]} (${race})`);
      }
    } else {
      const classes = availableClasses[classKey];

      for (let i = 0; i < partySize; i++) {
        let character = classes[Math.floor(Math.random() * classes.length)];

        if (races) {
          character += ` (${races[Math.floor(Math.random() * races.length)]})`;
        }

        partyMembers.push(character);
      }
    }

    setState({
      game,
      partyMembers,
    });
  }

  return (
    <FlowLayout
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
    </FlowLayout>
  );
}

export default RandomParty;