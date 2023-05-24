import classList from "helpers/styleHelpers";
import React from "react";
import styles from "./Trainer.module.scss";
import { ISkillTrainer } from "./Trainers";

interface ITrainerProps {
  trainer: ISkillTrainer,
  onAddClick?(): void,
  onRemoveClick?(): void,
  showAdd: boolean,
  showRemove: boolean,
  isInList?: boolean,
}

const Trainer: React.FC<ITrainerProps> = ({ trainer, onAddClick, onRemoveClick, showAdd, showRemove, isInList }) =>
  <div
    className={classList(styles.trainer)}
    key={trainer.skill + trainer.level + trainer.name}
  >
    {(showAdd || showRemove) &&
      <div>
        <button
          onClick={showAdd
            ? onAddClick
            : showRemove
              ? onRemoveClick
              : undefined}
          className={classList(isInList ? "primary-button" : "")}
        >
          {showAdd ? "+" : ""}
          {showRemove ? "-" : ""}
        </button>
      </div>
    }
    <div>
      <label>
        {trainer.skill} {trainer.level}
      </label>
      {trainer.location}{trainer.name
        ? <>, {trainer.name}</>
        : undefined
      }
      {trainer.note &&
        <span
          className={classList(styles.note)}
        >
          {trainer.note}
        </span>
      }
    </div>
  </div>;

export default Trainer;