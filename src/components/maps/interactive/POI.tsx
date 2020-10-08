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
    <span className="note">{poi.note?.split('\n').map((x, ix) => (
      <div
        key={ix}
      >{x}</div>
    ))}</span>
    {showSearchNote &&
      <span className="note">{poi.searchNote}</span>
    }
    {poi.links &&
      renderLinks(poi.links, linkify, onLinkClick)
    }
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

function renderLinks(links: IPOILink[],
  linkify: boolean,
  onLinkClick: ((link: IPOILink) => void) | undefined,
) {
  if (linkify) {
    return (
      <ul>
        {links.map(l =>
          <li
            key={l.slug}
          >
            <button
              className="link-button"
              onClick={onLinkClick
                ? () => onLinkClick(l)
                : undefined
              }
            >
              {l.text}
            </button>
          </li>
        )}
      </ul>
    );
  } else {
    return (
      <>
        {links.map(l => (
          <span
            className="link"
            key={l.slug}
          >
            {l.text}
          </span>
        ))}
      </>
    )

  }

}

export default POI;