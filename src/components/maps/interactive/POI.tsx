import React from "react";
import "./POI.scoped.scss";

interface IPOIProps {
  name: string,
  desc: string,
  onClick?(): void,
}

const POI: React.FC<IPOIProps> = ({ name, desc, onClick }) =>
  <div
    className="poi"
  >
    <span className="name">{name}</span>
    <span className="desc">{desc}</span>
    {onClick &&
      <button
        className="remove-button"
        onClick={onClick}
      >
        Remove Marker
      </button>
    }
  </div>;

export default POI;