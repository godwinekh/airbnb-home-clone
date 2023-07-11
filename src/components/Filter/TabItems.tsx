import { StaticImageData } from "next/image";
import Room from "@@/images/filter/rooms.jpg";
import Pool from "@@/images/filter/pools.jpg";
import Trending from "@@/images/filter/trending.jpg";
import EarthHome from "@@/images/filter/earth.jpg";
import Design from "@@/images/filter/design.jpg";
import Mansion from "@@/images/filter/mansions.jpg";
import AmazingView from "@@/images/filter/views.jpg";
import IconicCity from "@@/images/filter/domes.jpg";
import Dome from "@@/images/filter/mansions.jpg";
import World from "@@/images/filter/world.jpg";
import OMG from "@@/images/filter/omg.jpg";
import Breakfast from "@@/images/filter/breakfasts.jpg";
import Kitchen from "@@/images/filter/kitchen.jpg";
import Boats from "@@/images/filter/boats.jpg";
import BeachFront from "@@/images/filter/beach.jpg";
import Country from "@@/images/filter/country.jpg";
import Island from "@@/images/filter/islands.jpg";
import Play from "@@/images/filter/play.jpg";
import Cycladic from "@@/images/filter/cycladic.jpg";
import Desert from "@@/images/filter/desert.jpg";
import Tower from "@@/images/filter/towers.jpg";
import Cabin from "@@/images/filter/cabins.jpg";
import Park from "@@/images/filter/parks.jpg";
import Arctic from "@@/images/filter/artic.jpg";
import Tropical from "@@/images/filter/tropical.jpg";
import Casa from "@@/images/filter/casas.jpg";
import LakeFront from "@@/images/filter/lakefront.jpg";
import Ski from "@@/images/filter/ski.jpg";
import BeachSide from "@@/images/filter/beachside.jpg";
import Farm from "@@/images/filter/farms.jpg";
import Castle from "@@/images/filter/castles.jpg";
import HouseBoat from "@@/images/filter/houseboats.jpg";
import Hut from "@@/images/filter/huts.jpg";
import Lake from "@@/images/filter/lake.jpg";
import Luxe from "@@/images/filter/luxe.jpg";
import Vineyard from "@@/images/filter/vineyards.jpg";
import Frame from "@@/images/filter/frames.jpg";
import Piano from "@@/images/filter/pianos.jpg";
import Tiny from "@@/images/filter/tinyhomes.jpg";
import Historical from "@@/images/filter/historical.jpg";
import Yurt from "@@/images/filter/yurts.jpg";
import Ryokan from "@@/images/filter/ryokans.jpg";
import Camping from "@@/images/filter/camping.jpg";
import OffGrid from "@@/images/filter/offgrid.jpg";
import Danmusi from "@@/images/filter/danmusi.jpg";
import Surfing from "@@/images/filter/surfing.jpg";
import Cave from "@@/images/filter/caves.jpg";
import New from "@@/images/filter/new.jpg";
import TreeHouse from "@@/images/filter/treehouse.jpg";
import Camper from "@@/images/filter/campers.jpg";
import Golfing from "@@/images/filter/golfing.jpg";
import Skiing from "@@/images/filter/skiing.jpg";
import Hanok from "@@/images/filter/hanoks.jpg";
import Windmill from "@@/images/filter/windmills.jpg";
import Minsus from "@@/images/filter/minsus.jpg";
import Barn from "@@/images/filter/barns.jpg";
import Adapted from "@@/images/filter/adapted.jpg";
import Container from "@@/images/filter/containers.jpg";
import Creative from "@@/images/filter/creative.jpg";
import Riad from "@@/images/filter/riads.jpg";
import Trulli from "@@/images/filter/trulli.jpg";

interface TabItem {
  image: StaticImageData;
  label: string;
};

const TabItems: TabItem[] = [
  { image: Room, label: "Rooms" },
  { image: Pool, label: "Amazing pools" },
  { image: Trending, label: "Trending" },
  { image: EarthHome, label: "Earth homes" },
  { image: Design, label: "Design" },
  { image: Mansion, label: "Mansions" },
  { image: AmazingView, label: "Amazing views" },
  { image: IconicCity, label: "Iconic cities" },
  { image: Dome, label: "Domes" },
  { image: World, label: "Top of the world" },
  { image: OMG, label: "OMG" },
  { image: Breakfast, label: "Bed & breakfasts" },
  { image: Kitchen, label: "Chef's kitchen" },
  { image: Boats, label: "Boats" },
  { image: BeachFront, label: "Beachfront" },
  { image: Country, label: "Countryside" },
  { image: Island, label: "Islands" },
  { image: Play, label: "Play" },
  { image: Cycladic, label: "Cycladic homes" },
  { image: Desert, label: "Desert" },
  { image: Tower, label: "Towers" },
  { image: Cabin, label: "Cabins" },
  { image: Park, label: "National parks" },
  { image: Arctic, label: "Arctic" },
  { image: Tropical, label: "Tropical" },
  { image: Casa, label: "Casas particulares" },
  { image: LakeFront, label: "Lakefront" },
  { image: Ski, label: "Ski-in/out" },
  { image: BeachSide, label: "Beach" },
  { image: Farm, label: "Farms" },
  { image: Castle, label: "Castles" },
  { image: HouseBoat, label: "Houseboats" },
  { image: Hut, label: "Shepherd's huts" },
  { image: Lake, label: "Lake" },
  { image: Luxe, label: "Luxe" },
  { image: Vineyard, label: "Vineyards" },
  { image: Frame, label: "A-frames" },
  { image: Piano, label: "Grand pianos" },
  { image: Tiny, label: "Tiny homes" },
  { image: Historical, label: "Historical homes" },
  { image: Yurt, label: "Yurts" },
  { image: Ryokan, label: "Ryokans" },
  { image: Camping, label: "Camping" },
  { image: OffGrid, label: "Off-the-grid" },
  { image: Danmusi, label: "Danmusi" },
  { image: Surfing, label: "Surfing" },
  { image: Cave, label: "Caves" },
  { image: New, label: "New" },
  { image: TreeHouse, label: "Treehouses" },
  { image: Camper, label: "Campers" },
  { image: Golfing, label: "Golfing" },
  { image: Skiing, label: "Skiing" },
  { image: Hanok, label: "Hanoks" },
  { image: Windmill, label: "Windmills" },
  { image: Minsus, label: "Minsus" },
  { image: Barn, label: "Barns" },
  { image: Adapted, label: "Adapted" },
  { image: Container, label: "Containers" },
  { image: Creative, label: "Creative spaces" },
  { image: Riad, label: "Riads" },
  { image: Trulli, label: "Trulli" },
];

export default TabItems;
