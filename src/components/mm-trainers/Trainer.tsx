import React from "react";
import { ISkillTrainer } from "./Trainers";
import "./Trainer.scoped.scss";

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
    className="trainer"
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
          className={isInList ? "primary-button" : ""}
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
          className="note"
        >
          {trainer.note}
        </span>
      }
    </div>
  </div>;

export default Trainer;