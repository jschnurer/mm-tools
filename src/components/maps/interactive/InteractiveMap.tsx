import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Map, ImageOverlay, Marker, Popup, Tooltip } from "react-leaflet"
import mm6WorldMap from "media/maps/mm6/mm6-world.png";
import { CRS, LatLng, LatLngBounds } from "leaflet";
import FlowLayout from "components/layout/FlowLayout";
import "./InteractiveMap.scoped.scss";
import POI from "./POI";
import mm6POIs from "./mm6.json";
import { IPOI, IPOILink, POILinkType } from "./MapTypes";
import { DebounceInput } from "react-debounce-input";

const allPOIs = mm6POIs.map((poi: any): IPOI => ({
  slug: poi.slug,
  name: poi.name,
  note: poi.note,
  position: new LatLng(poi.position[0], poi.position[1]),
  links: (poi.links as any)?.map((l: any) => formatPOILink(l)) || [],
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

const bounds = new LatLngBounds(new LatLng(0, 0), new LatLng(2385, 3975));

const InteractiveMap: React.FC<RouteComponentProps<IInteractiveMapProps>> = (props) => {
  const [pois, setPois] = useState<IPOI[]>(allPOIs);
  const [searchResults, setSearchResults] = useState<IPOI[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mapView, setMapView] = useState(initialMapView)

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
  }

  const resetMap = () => {
    setSearchResults([]);
    setSearchTerm("");
    setPois(allPOIs);
    setMapView(initialMapView);
  }

  return (
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
                  />
                </li>
              ))}
            </ul>
          }
        <button
          className="secondary-button"
          onClick={resetMap}
        >
          Reset map
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
      >
        <ImageOverlay
          url={mm6WorldMap}
          bounds={bounds}
        />
        {pois.map(poi => (
          <Marker
            position={poi.position}
            key={poi.slug}
          >
            <Popup>
              <POI
                poi={poi}
                showRemove
                onRemoveClick={() => onRemoveMarkerClick(poi)}
                linkify={true}
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
  );
};

export default InteractiveMap;