import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Map, ImageOverlay, Marker, Popup, Tooltip } from "react-leaflet"
import mm6WorldMap from "media/maps/mm6/mm6-world.png";
import { CRS, Icon, LatLng, LatLngBounds } from "leaflet";
import FlowLayout from "components/layout/FlowLayout";
import "./InteractiveMap.scoped.scss";
import POI from "./POI";
import mm6POIs from "./mm6.json";
import { IPOI, IPOILink, POILinkType } from "./MapTypes";
import { DebounceInput } from "react-debounce-input";
import icons from "./icons";
import MM6Quests from "./MM6Quests";
import MapLegend from "./MapLegend";

const allPOIs = mm6POIs.map((poi: any): IPOI => ({
  slug: poi.slug,
  name: poi.name,
  note: poi.note,
  searchNote: poi.searchNote,
  position: new LatLng(poi.position[0], poi.position[1]),
  links: (poi.links as any)?.map((l: any) => formatPOILink(l)) || [],
  icon: icons[poi.icon],
  iconKey: poi.icon,
}));

const initialMapView = {
  zoom: -2,
  center: new LatLng(1192, 1987),
};

function formatPOILink(l: any): IPOILink {
  return {
    type: l.type as POILinkType,
    slug: l.slug,
    text: l.text,
    position: l.position
      ? new LatLng(l.position[0], l.position[1])
      : undefined,
  };
}

interface IInteractiveMapProps {
  game: string,
  map: string,
}

export interface ILegend {
  [index: string]: boolean
}

const bounds = new LatLngBounds(new LatLng(0, 0), new LatLng(2385, 3975));

function getInitialLegend() {
  let initialLegend: ILegend = {};

  Object
    .keys(icons)
    .forEach(key =>
      initialLegend[key] = true);

  return initialLegend;
}

const InteractiveMap: React.FC<RouteComponentProps<IInteractiveMapProps>> = (props) => {
  const [pois, setPois] = useState<IPOI[]>(allPOIs);
  const [searchResults, setSearchResults] = useState<IPOI[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mapView, setMapView] = useState(initialMapView);
  const [focus, setFocus] = useState<IPOI | null>(null);
  const [unfocusTimeout, setUnfocusTimeout] = useState<number | undefined>();
  const [focusQuest, setFocusQuest] = useState<string>("");
  const [isQuestModalOpen, setIsQuestModalOpen] = useState(false);
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const [legend, setLegend] = useState<ILegend>(getInitialLegend());

  const searchResultsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchResultsRef.current
        && e.target
        && !searchResultsRef.current.contains(e.target as Node)) {
        setSearchResults([]);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    }
  }, [searchResultsRef, setSearchResults]);

  useEffect(() => {
    return () => {
      if (unfocusTimeout) {
        window.clearTimeout(unfocusTimeout);
      }
    };
  }, [unfocusTimeout]);

  const onRemoveMarkerClick = (poi: IPOI) => {
    setPois(pois.filter(x => x !== poi));
  }

  const doSearch = (term: string) => {
    setSearchTerm(term);

    if (term.length === 0) {
      setSearchResults([]);
      return;
    }

    const lowerTerm = term.toLowerCase();

    setSearchResults(
      allPOIs.filter(poi => poi.name.toLowerCase().indexOf(lowerTerm) > -1
        || (poi.note
          && poi.note.toLowerCase().indexOf(lowerTerm) > -1)
        || (poi.searchNote
          && poi.searchNote.toLowerCase().indexOf(lowerTerm) > -1)
        || (poi.links
          && poi.links.find(l => l.text.toLowerCase().indexOf(lowerTerm) > -1))
      ).sort((a, b) => a.name < b.name ? -1 : 1)
    );
  }

  const onSearchResultClick = (poi: IPOI) => {
    setSearchResults([]);

    setMapView({
      zoom: 1,
      center: poi.position,
    });

    setFocus(poi);

    setUnfocusTimeout(
      window.setTimeout(() => {
        setFocus(null);
      }, 2000)
    );
  }

  const onShowLegend = () => {
    setIsLegendOpen(true);
  }

  const applyLegend = (legend: ILegend) => {
    setLegend(legend);
    setFocus(null);
  }

  const onMapClick = (event: any) => {
    const el = document.createElement('textarea');
    el.value = parseInt(event.latlng.lat, 10) + ',' + parseInt(event.latlng.lng);
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  const onLinkClick = (link: IPOILink) => {
    switch (link.type) {
      case "map": {
        if (link.position) {
          setMapView({
            zoom: 1,
            center: link.position,
          });
        }
        return;
      }
      case "submap":
        // TODO: go to submap url
        return;
      case "quest":
        setFocusQuest(link.slug);
        setIsQuestModalOpen(true);
        return;
    }
  }

  return (
    <>
      <FlowLayout
        header={(
          <div className="header">
            <DebounceInput
              type="text"
              placeholder="Type to search..."
              className="search-box"
              minLength={1}
              debounceTimeout={300}
              value={searchTerm}
              onChange={(e) => doSearch(e.target.value)}
            />
            {searchResults.length > 0 &&
              <ul
                className="search-results"
                ref={searchResultsRef}
              >
                {searchResults.map(poi => (
                  <li
                    key={poi.slug}
                  >
                    <POI
                      poi={poi}
                      showRemove={false}
                      linkify={false}
                      onClick={() => onSearchResultClick(poi)}
                      showSearchNote
                    />
                  </li>
                ))}
              </ul>
            }
            <button
              className="secondary-button"
              onClick={onShowLegend}
            >
              Legend
        </button>
          </div>
        )}
      >
        <Map
          crs={CRS.Simple}
          minZoom={-2}
          maxZoom={2}
          zoom={mapView.zoom}
          center={mapView.center}
          onclick={onMapClick}
        >
          <ImageOverlay
            url={mm6WorldMap}
            bounds={bounds}
          />
          {pois
            .filter(poi => poi === focus
              || legend[poi.iconKey])
            .map(poi => (
              <Marker
                position={poi.position}
                key={poi.slug}
                icon={poi === focus
                  ? new Icon({
                    ...poi.icon.options,
                    className: poi.icon.options.className + " focused "
                      + (!legend[poi.iconKey]
                        ? "hidden"
                        : ""),
                  })
                  : poi.icon
                }
              >
                <Popup>
                  <POI
                    poi={poi}
                    showRemove={false}
                    onRemoveClick={() => onRemoveMarkerClick(poi)}
                    linkify={true}
                    onLinkClick={onLinkClick}
                  />
                </Popup>
                <Tooltip>
                  <POI
                    poi={poi}
                    showRemove={false}
                    linkify={false}
                  />
                </Tooltip>
              </Marker>
            ))}
        </Map>
      </FlowLayout>
      {isQuestModalOpen &&
        <MM6Quests
          focusQuestSlug={focusQuest}
          onClose={() => {
            setFocusQuest("");
            setIsQuestModalOpen(false);
          }}
        />
      }
      {isLegendOpen &&
        <MapLegend
          currentLegend={legend}
          onApply={(legend: ILegend) => {
            applyLegend(legend);
            setIsLegendOpen(false);
          }}
          onClose={() => {
            setIsLegendOpen(false);
          }}
        />
      }
    </>
  );
};

export default InteractiveMap;