import React from "react";
import { IPOI } from "./MapTypes";
import "./POI.scoped.scss";

interface IPOIProps {
  poi: IPOI,
  showRemove: boolean,
  onClick?(): void,
}

const POI: React.FC<IPOIProps> = ({ poi, showRemove, onClick }) =>
  <div
    className="poi"
  >
    <span className="name">{poi.name}</span>
    <span className="note">{poi.note}</span>
    {poi.links?.map(l => (
      <button
        className="link-button"
        key={l.slug}
      >
        {l.text}
      </button>
    ))}
    {showRemove
      && onClick &&
      <button
        className="remove-button"
        onClick={onClick}
      >
        Remove Marker
      </button>
    }
  </div>;

export default POI;