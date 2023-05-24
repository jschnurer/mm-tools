import { Icon } from "leaflet";

let iconMappings = [
  { name: "spear", iconUrl: "/mm-tools/images/leaflet/icons/arrowhead.svg", },
  { name: "dark", iconUrl: "/mm-tools/images/leaflet/icons/moon.svg", },
  { name: "identify", iconUrl: "/mm-tools/images/leaflet/icons/magnifying-glass.svg", },
  { name: "dagger", iconUrl: "/mm-tools/images/leaflet/icons/stiletto.svg", },
  { name: "spirit", iconUrl: "/mm-tools/images/leaflet/icons/aura.svg", },
  { name: "perception", iconUrl: "/mm-tools/images/leaflet/icons/eye-target.svg", },
  { name: "meditation", iconUrl: "/mm-tools/images/leaflet/icons/meditation.svg", },
  { name: "earth", iconUrl: "/mm-tools/images/leaflet/icons/stone-pile.svg", },
  { name: "repair", iconUrl: "/mm-tools/images/leaflet/icons/auto-repair.svg", },
  { name: "fire", iconUrl: "/mm-tools/images/leaflet/icons/flame.svg", },
  { name: "bodyBuilding", iconUrl: "/mm-tools/images/leaflet/icons/muscle-up.svg", },
  { name: "light", iconUrl: "/mm-tools/images/leaflet/icons/sun.svg", },
  { name: "bank", iconUrl: "/mm-tools/images/leaflet/icons/bank.svg", },
  { name: "mace", iconUrl: "/mm-tools/images/leaflet/icons/flanged-mace.svg", },
  { name: "body", iconUrl: "/mm-tools/images/leaflet/icons/person.svg", },
  { name: "axe", iconUrl: "/mm-tools/images/leaflet/icons/battle-axe.svg", },
  { name: "temple", iconUrl: "/mm-tools/images/leaflet/icons/greek-temple.svg", },
  { name: "mind", iconUrl: "/mm-tools/images/leaflet/icons/psychic-waves.svg", },
  { name: "air", iconUrl: "/mm-tools/images/leaflet/icons/tornado.svg", },
  { name: "sword", iconUrl: "/mm-tools/images/leaflet/icons/broadsword.svg", },
  { name: "bow", iconUrl: "/mm-tools/images/leaflet/icons/high-shot.svg", },
  { name: "diplomacy", iconUrl: "/mm-tools/images/leaflet/icons/public-speaker.svg", },
  { name: "quest", iconUrl: "/mm-tools/images/leaflet/icons/uncertainty.svg", },
  { name: "merchant", iconUrl: "/mm-tools/images/leaflet/icons/cash.svg", },
  { name: "coach", iconUrl: "/mm-tools/images/leaflet/icons/horse-head.svg", },
  { name: "blaster", iconUrl: "/mm-tools/images/leaflet/icons/ray-gun.svg", },
  { name: "fountain", iconUrl: "/mm-tools/images/leaflet/icons/water-fountain.svg", },
  { name: "chain", iconUrl: "/mm-tools/images/leaflet/icons/chain-mail.svg", },
  { name: "house", iconUrl: "/mm-tools/images/leaflet/icons/house.svg", },
  { name: "learning", iconUrl: "/mm-tools/images/leaflet/icons/read.svg", },
  { name: "staff", iconUrl: "/mm-tools/images/leaflet/icons/wizard-staff.svg", },
  { name: "cult", iconUrl: "/mm-tools/images/leaflet/icons/church.svg", },
  { name: "shield", iconUrl: "/mm-tools/images/leaflet/icons/shield.svg", },
  { name: "disarm", iconUrl: "/mm-tools/images/leaflet/icons/wolf-trap.svg", },
  { name: "water", iconUrl: "/mm-tools/images/leaflet/icons/droplets.svg", },
  { name: "info", iconUrl: "/mm-tools/images/leaflet/icons/info.svg", },
  { name: "shop", iconUrl: "/mm-tools/images/leaflet/icons/shop.svg", },
  { name: "dungeon", iconUrl: "/mm-tools/images/leaflet/icons/3d-stairs.svg", },
  { name: "leather", iconUrl: "/mm-tools/images/leaflet/icons/leather-armor.svg", },
  { name: "plate", iconUrl: "/mm-tools/images/leaflet/icons/shoulder-armor.svg", },
  { name: "obelisk", iconUrl: "/mm-tools/images/leaflet/icons/obelisk.svg", },
  { name: "inn", iconUrl: "/mm-tools/images/leaflet/icons/beer-stein.svg", },
  { name: "docks", iconUrl: "/mm-tools/images/leaflet/icons/anchor.svg", },
  { name: "training", iconUrl: "/mm-tools/images/leaflet/icons/crossed-swords.svg", },
  { name: "townHall", iconUrl: "/mm-tools/images/leaflet/icons/congress.svg", },
];

let icons: {
  [index: string]: Icon
} = {};

let duplicates = ["", "Expert", "Master"];

iconMappings.forEach(iconMapping => {
  duplicates.forEach(dupeSuffix => {
    icons[iconMapping.name + dupeSuffix] = new Icon({
      iconUrl: iconMapping.iconUrl,
      iconSize: [32, 32],
      className: `marker ${dupeSuffix}`,
    });

    if (iconMapping.name === "blaster") {
      console.log(iconMapping.name + dupeSuffix);
      console.log(icons[iconMapping.name + dupeSuffix]);
    }
  });
});

(window as any).icons = icons;

export default icons;