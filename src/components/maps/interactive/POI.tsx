import classList from "helpers/styleHelpers";
import React from "react";
import { IPOI, IPOILink } from "./MapTypes";
import styles from "./POI.module.scss";

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
    className={classList(styles.poi)}
    onClick={onClick}
  >
    <span className={classList(styles.name)}>{poi.name}</span>
    <span className={classList(styles.note)}>{poi.note?.split('\n').map((x, ix) => (
      <div
        key={ix}
      >{x}</div>
    ))}</span>
    {showSearchNote &&
      <span className={classList(styles.note)}>{poi.searchNote}</span>
    }
    {poi.links &&
      renderLinks(poi.links, linkify, onLinkClick)
    }
    {showRemove
      && onRemoveClick &&
      <button
        className={styles["remove-button"]}
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
              className={styles["link-button"]}
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
            className={classList(styles.link)}
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