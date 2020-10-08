import React, { useEffect, useRef, useState } from "react";
import { Map, ImageOverlay, Marker, Popup, Tooltip } from "react-leaflet"
import { CRS, Icon, LatLngBoundsExpression, LatLng } from "leaflet";
import FlowLayout from "components/layout/FlowLayout";
import "./InteractiveMap.scoped.scss";
import POI from "./POI";
import { IPOI, IPOILink, ILegend, IMapLocation, IQuestModalProps, IMapLegendProps, POILinkType, IMapRouteProps } from "./MapTypes";
import { DebounceInput } from "react-debounce-input";
import icons from "./icons";
import { RouteComponentProps } from "react-router-dom";

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

const InteractiveMap: React.FC<IInteractiveMapProps & RouteComponentProps<IMapRouteProps>> = ({
  allPOIs,
  initialMapView,
  mapBounds,
  questModal,
  mapLegend,
  mapImageUrl,
  mapRouteTemplate,
  history,
  match: {
    params: {
      game,
      map,
    },
  },
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
  }, [game, map, allPOIs, initialMapView])

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
        history.push(mapRouteTemplate.replace(":map", link.slug));
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

  return (
    <>
      <FlowLayout
        header={(
          <div
            className="header"
          >
            <DebounceInput
              type="text"
              placeholder="Type to search..."
              className="search-box"
              minLength={1}
              debounceTimeout={250}
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
        <Map
          crs={CRS.Simple}
          minZoom={-2}
          maxZoom={2}
          zoom={mapView.zoom}
          center={mapView.center}
          onclick={onMapClick}
          closePopupOnClick={true}
        >
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
        </Map>
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
    </>
  );
};

export default InteractiveMap;