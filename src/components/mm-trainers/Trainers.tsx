import React, { useState } from "react";
import skillTrainers from "./skill-trainers.json";
import PageLayout from "components/layout/PageLayout";
import PageTitle from "components/layout/PageTitle";
import "./Trainers.scoped.scss";

interface ISkillTrainer {
  category: string;
  level: string;
  skill: string;
  name: string;
  location: string;
  note?: string;
}

const games = ["MM2", "MM6", "MM7", "MM8"];
const skillLevels = ["Normal", "Expert", "Master", "Grandmaster"];

const Trainers: React.FC = () => {
  const [game, setGame] = useState("MM6");
  const [category, setCategory] = useState("*");
  const [skill, setSkill] = useState("*");

  let trainers: ISkillTrainer[] = [];

  if (game === "MM2") {
    trainers = skillTrainers.mm2;
  } else if (game === "MM6") {
    trainers = skillTrainers.mm6;
  } else if (game === "MM7") {
    trainers = skillTrainers.mm7;
  } else if (game === "MM8") {
    trainers = skillTrainers.mm8;
  }

  const categories = ["*",
    ...new Set(trainers
      .map(t => t.category))]
    .sort((a, b) => a < b ? -1 : 1);

  const skills = ["*",
    ...new Set(trainers
      .filter(t => t.category === category
        || category === "*")
      .map(t => t.skill))]
    .sort((a, b) => a < b ? -1 : 1);

  const filteredTrainers = trainers
    .filter(t => (t.category === category
      || category === "*"
    )
      && (skill === "*"
        || t.skill === skill))
    .sort((a, b) => {
      if (a.skill < b.skill) {
        return -1;
      } else if (a.skill > b.skill) {
        return 1;
      }

      const aLvl = skillLevels.indexOf(a.level);
      const bLvl = skillLevels.indexOf(b.level);

      if (aLvl < bLvl) {
        return -1;
      } else if (aLvl > bLvl) {
        return 1;
      }

      if (a.location < b.location) {
        return -1;
      } else if (a.location > b.location) {
        return 1;
      }

      return a.name < b.name
        ? -1
        : 1;
    });

  const changeGame = (game: string) => {
    setGame(game);
    setSkill("*");
  }

  const changeCategory = (cat: string) => {
    setCategory(cat);
    setSkill("*");
  }

  return (
    <PageLayout
      header={(
        <div className="controls">
          <PageTitle title={`${game} Skill Trainers`} />
          <div>
            <label>
              Game:
            </label>
            {games.map(gm => (
              <button
                className={`primary-button ${gm === game ? "active" : ""}`}
                key={gm}
                onClick={() => changeGame(gm)}
              >
                {gm}
              </button>
            ))}
          </div>
          <div>
            <label>
              Categories:
            </label>
            {categories.map(cat => (
              <button
                className={`primary-button ${cat === category ? "active" : ""}`}
                key={cat}
                onClick={() => changeCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div>
            <label>
              Skill:
            </label>
            {skills.map(sk => (
              <button
                className={`primary-button ${sk === skill ? "active" : ""}`}
                key={sk}
                onClick={() => setSkill(sk)}
              >
                {sk}
              </button>
            ))}
          </div>
        </div>
      )}
    >
      {filteredTrainers.map(trainer => (
        <p
          className="trainer"
          key={trainer.skill + trainer.level + trainer.name}
        >
          <label>
            {trainer.skill} {trainer.level}
          </label>
          {trainer.location}, {trainer.name}
          {trainer.note &&
            <span
              className="note"
            >
              {trainer.note}
            </span>
          }
        </p>
      ))}
    </PageLayout>
  );
}

export default Trainers;