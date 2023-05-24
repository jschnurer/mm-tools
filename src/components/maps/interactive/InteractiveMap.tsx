import FlowLayout from "components/layout/FlowLayout";
import Modal from "components/layout/Modal";
import classList from "helpers/styleHelpers";
import { CRS, Icon, LatLng, LatLngBoundsExpression } from "leaflet";
import React, { useEffect, useRef, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { ImageOverlay, MapContainer, Marker, Popup, Tooltip, useMapEvents } from "react-leaflet";
import { useNavigate, useParams } from "react-router";
import styles from "./InteractiveMap.module.scss";
import { ILegend, IMapLegendProps, IMapLocation, IPOI, IPOILink, IQuestModalProps, POILinkType } from "./MapTypes";
import POI from "./POI";
import icons from "./icons";

interface IInteractiveMapProps {
  allPOIs: IPOI[],
  initialMapView: IMapLocation,
  mapBounds: LatLngBoundsExpression,
  questModal?(props: IQuestModalProps): JSX.Element,
  mapLegend(props: IMapLegendProps): JSX.Element,
  mapImageUrl: string,
  mapRouteTemplate: string,
}

function getInitialLegend() {
  let initialLegend: ILegend = {};

  Object
    .keys(icons)
    .forEach(key =>
      initialLegend[key] = true);

  return initialLegend;
}

export function formatPOI(poi: any): IPOI {
  return {
    slug: poi.slug,
    name: poi.name,
    note: poi.note,
    searchNote: poi.searchNote,
    position: new LatLng(poi.position[0], poi.position[1]),
    links: (poi.links as any)?.map((l: any) => ({
      type: l.type as POILinkType,
      slug: l.slug,
      text: l.text,
      position: l.position
        ? new LatLng(l.position[0], l.position[1])
        : undefined,
    })) || [],
    icon: icons[poi.icon],
    iconKey: poi.icon,
  };
}

const InteractiveMap: React.FC<IInteractiveMapProps> = ({
  allPOIs,
  initialMapView,
  mapBounds,
  questModal,
  mapLegend,
  mapImageUrl,
  mapRouteTemplate,
}) => {
  const [pois, setPois] = useState<IPOI[]>(allPOIs);
  const [searchResults, setSearchResults] = useState<IPOI[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mapView, setMapView] = useState(initialMapView);
  const [focus, setFocus] = useState<IPOI | null>(null);
  const [unfocusTimeout, setUnfocusTimeout] = useState<number | undefined>();
  const [focusQuest, setFocusQuest] = useState<string>("");
  const [isQuestModalOpen, setIsQuestModalOpen] = useState(false);
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [legend, setLegend] = useState<ILegend>(getInitialLegend());
  const navigate = useNavigate();

  const {
    game,
    map: mapName,
  } = useParams();

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

  useEffect(() => {
    setPois(allPOIs);
    setMapView(initialMapView);
    setFocus(null);
    setSearchTerm("");
    setSearchResults([]);
    setFocusQuest("");
    setIsQuestModalOpen(false);
    setIsLegendOpen(false);
    setLegend(getInitialLegend());
  }, [game, mapName, allPOIs, initialMapView])

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

  const focusPOI = (poi: IPOI) => {
    setFocus(poi);
    setUnfocusTimeout(
      window.setTimeout(() => {
        setFocus(null);
      }, 2000)
    );
  }

  const onSearchResultClick = (poi: IPOI) => {
    setSearchResults([]);

    setMapView({
      zoom: 1,
      center: poi.position,
    });

    focusPOI(poi);
  }

  const onShowLegend = () => {
    setIsLegendOpen(true);
  }

  const showInfo = () => {
    setIsInfoOpen(true);
  }

  const applyLegend = (legend: ILegend) => {
    setLegend(legend);
    setFocus(null);
  }

  const onLinkClick = (link: IPOILink) => {
    switch (link.type) {
      case "position": {
        if (link.position) {
          setMapView({
            zoom: 1,
            center: link.position,
          });
        }
        return;
      }
      case "map": {
        navigate(mapRouteTemplate.replace(":map", link.slug));
        return;
      }
      case "quest": {
        setFocusQuest(link.slug);
        setIsQuestModalOpen(true);
        return;
      }
      case "poi": {
        const poi = pois.find(x => x.slug === link.slug);
        if (poi) {
          focusPOI(poi);
        }
        return;
      }
    }
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

  return (
    <>
      <FlowLayout
        header={(
          <div
            className={classList(styles.header)}
          >
            <DebounceInput
              type="text"
              placeholder="Type to search..."
              className="search-box"
              minLength={1}
              debounceTimeout={250}
              value={searchTerm}
              onChange={(e: any) => doSearch(e.target.value)}
            />
            {searchResults.length > 0 &&
              <ul
                className={classList(styles["search-results"])}
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
              onClick={onShowLegend}
            >
              Legend
            </button>
            <button
              onClick={showInfo}
            >
              ?
            </button>
          </div>
        )}
      >
        <MapContainer
          crs={CRS.Simple}
          minZoom={-2}
          maxZoom={2}
          zoom={mapView.zoom}
          center={mapView.center}
          closePopupOnClick={true}
        >
          <MapClickEventHolder onClick={onMapClick} />

          <ImageOverlay
            url={mapImageUrl}
            bounds={mapBounds}
            attribution={`<a href="https://the-spoiler.com/RPG/New.World.Computing/might..magic.6.1/mm6.html">&copy; MM6 Spoiler</a>`}
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
        </MapContainer>
      </FlowLayout>
      {isQuestModalOpen &&
        questModal &&
        questModal({
          focusQuestSlug: focusQuest,
          onClose: () => {
            setFocusQuest("");
            setIsQuestModalOpen(false);
          },
        })
      }
      {isLegendOpen &&
        mapLegend({
          currentLegend: legend,
          onApply: (legend: ILegend) => {
            applyLegend(legend);
            setIsLegendOpen(false);
          },
          onClose: () => {
            setIsLegendOpen(false);
          },
        })
      }
      {isInfoOpen &&
        <Modal
          header="Info"
          onClose={() => setIsInfoOpen(false)}
          footer={(
            <>
              <button
                className="primary-button"
                onClick={() => setIsInfoOpen(false)}
              >
                Close
              </button>
            </>
          )}
        >
          <p>
            See something wrong with the map? <a href="https://github.com/jschnurer/mm-tools/issues">Submit an error report here!</a>
          </p>
          <p>
            If a marker is misplaced, you can click on the map to copy the clicked position to your clipboard.
            Include these coordinate corrections in any error submissions.
          </p>
          <p>
            All Might and Magic 6 maps and info was sourced from <a href="https://the-spoiler.com/RPG/New.World.Computing/might..magic.6.1/mm6.html">MM6 Spoiler</a>.
          </p>
        </Modal>
      }
    </>
  );
};

export default InteractiveMap;

interface IMapClickEventHolderProps {
  onClick(event: any): void,
}

const MapClickEventHolder: React.FC<IMapClickEventHolderProps> = ({
  onClick,
}) => {
  useMapEvents({
    click: onClick,
  });

  return null;
}
