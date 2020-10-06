import React from "react";
import { IPOI, IPOILink } from "./MapTypes";
import "./POI.scoped.scss";

interface IPOIProps {
  poi: IPOI,
  showRemove: boolean,
  onClick?(): void,
  onRemoveClick?(): void,
  onLinkClick?(link: IPOILink): void,
  linkify: boolean,
  showSearchNote?: boolean,
}

const POI: React.FC<IPOIProps> = ({
  poi,
  showRemove,
  linkify,
  showSearchNote,
  onClick,
  onRemoveClick,
  onLinkClick
}) =>
  <div
    className="poi"
    onClick={onClick}
  >
    <span className="name">{poi.name}</span>
    <span className="note">{poi.note}</span>
    {showSearchNote &&
      <span className="note">{poi.searchNote}</span>
    }
    {poi.links?.map(l =>
      linkify
        ? (
          <button
            className="link-button"
            key={l.slug}
            onClick={onLinkClick
              ? () => onLinkClick(l)
              : undefined
            }
          >
            {l.text}
          </button>
        ) : (
          <span
            className="link"
            key={l.slug}
          >
            {l.text}
          </span>
        )
    )}
    {showRemove
      && onRemoveClick &&
      <button
        className="remove-button"
        onClick={onRemoveClick}
      >
        Remove Marker
      </button>
    }
  </div>;

export default POI;