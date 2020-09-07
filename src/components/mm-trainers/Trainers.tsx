import React, { useState, useEffect } from "react";
import skillTrainers from "./skill-trainers.json";
import FlowLayout from "components/layout/FlowLayout";
import PageTitle from "components/layout/PageTitle";
import "./Trainers.scoped.scss";
import Modal from "components/layout/Modal";
import Trainer from "./Trainer";

export interface ISkillTrainer {
  category: string;
  level: string;
  skill: string;
  name: string;
  location: string;
  note?: string;
}

const games = ["MM2", "MM3", "MM4/5", "MM6", "MM7", "MM8"];
const skillLevels = ["Normal", "Expert", "Master", "Grandmaster"];

interface ISavedToDoList {
  mm2: ISkillTrainer[],
  mm3: ISkillTrainer[],
  mm45: ISkillTrainer[],
  mm6: ISkillTrainer[],
  mm7: ISkillTrainer[],
  mm8: ISkillTrainer[],
}

const Trainers: React.FC = () => {
  const [game, setGame] = useState("MM6");
  const [category, setCategory] = useState("*");
  const [skill, setSkill] = useState("*");
  const [isToDoOpen, setIsToDoOpen] = useState(false);
  const [toDoLists, setToDoLists] = useState<ISavedToDoList>({
    mm2: [],
    mm3: [],
    mm45: [],
    mm6: [],
    mm7: [],
    mm8: [],
  });

  let toDoList: ISkillTrainer[] = [];

  useEffect(() => {
    const item = localStorage.getItem("SkillTrainers/ToDo");

    if (!item) {
      return;
    }

    try {
      let parsedValue = JSON.parse(item);
      setToDoLists(parsedValue);
    } catch {
    }
  }, []);

  const addSkillToDo = (trainer: ISkillTrainer) => {
    if (toDoList.find(x => x.name === trainer.name
      && x.skill === trainer.skill
      && x.location === trainer.location)) {
      return;
    }

    let newToDoLists: ISavedToDoList;

    if (game === "MM2") {
      newToDoLists = {
        ...toDoLists,
        mm2: [...toDoList, trainer],
      };
    } else if (game === "MM3") {
      newToDoLists = {
        ...toDoLists,
        mm3: [...toDoList, trainer],
      };
    } else if (game === "MM4/5") {
      newToDoLists = {
        ...toDoLists,
        mm45: [...toDoList, trainer],
      };
    } else if (game === "MM6") {
      newToDoLists = {
        ...toDoLists,
        mm6: [...toDoList, trainer],
      };
    } else if (game === "MM7") {
      newToDoLists = {
        ...toDoLists,
        mm7: [...toDoList, trainer],
      };
    } else if (game === "MM8") {
      newToDoLists = {
        ...toDoLists,
        mm8: [...toDoList, trainer],
      };
    } else {
      return;
    }

    setToDoLists(newToDoLists);
    localStorage.setItem("SkillTrainers/ToDo", JSON.stringify(newToDoLists));
  }

  let trainers: ISkillTrainer[] = [];

  if (game === "MM2") {
    trainers = skillTrainers.mm2;
    toDoList = toDoLists.mm2;
  } else if (game === "MM3") {
    trainers = skillTrainers.mm3;
    toDoList = toDoLists.mm3;
  } else if (game === "MM4/5") {
    trainers = skillTrainers["mm4/5"];
    toDoList = toDoLists.mm45;
  } else if (game === "MM6") {
    trainers = skillTrainers.mm6;
    toDoList = toDoLists.mm6;
  } else if (game === "MM7") {
    trainers = skillTrainers.mm7;
    toDoList = toDoLists.mm7;
  } else if (game === "MM8") {
    trainers = skillTrainers.mm8;
    toDoList = toDoLists.mm8;
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
    <>
      <FlowLayout
        header={(
          <div className="controls">
            <PageTitle title={`${game} Skill Trainers`} />
            <div>
              <button
                onClick={() => setIsToDoOpen(true)}
              >
                View {game} ToDo List
              </button>
            </div>
            <div>
              <label>
                Game:
            </label>
              {games.map(gm => (
                <button
                  className={gm === game ? "primary-button" : ""}
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
                  className={cat === category ? "primary-button" : ""}
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
                  className={sk === skill ? "primary-button" : ""}
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
          <Trainer
            key={trainer.name + trainer.location + trainer.skill}
            trainer={trainer}
            onAddClick={() => addSkillToDo(trainer)}
            showAdd={true}
            showRemove={false}
          />
        ))}
      </FlowLayout>
      {isToDoOpen &&
        <Modal
          onClose={() => setIsToDoOpen(false)}
          header="ToDo List"
          footer={(
            <>
              <button>Remove All</button>
              <button
                className="primary-button"
                onClick={() => setIsToDoOpen(false)}
              >
                Done
              </button>
            </>
          )}
        >
          {!toDoList.length &&
            <p>
              You haven't added any skills to your toDo list.
              Try clicking the "+" button next to a skill to add
              it to your list.
            </p>
          }
          {toDoList.length > 0 &&
            toDoList.map(trainer => (
              <Trainer
                key={trainer.name + trainer.location + trainer.skill}
                trainer={trainer}
                onRemoveClick={() => addSkillToDo(trainer)}
                showAdd={false}
                showRemove={true}
              />
            ))
          }
        </Modal>
      }
    </>
  );
}

export default Trainers;