import Carrier from "../components/icons/CarrierIcon";
import Battleship from "../components/icons/BattleshipIcon";
import Destroyer from "../components/icons/DestroyerIcon";
import Submarine from "../components/icons/SubmarineIcon";
import Patrol from "../components/icons/PatrolIcon";
import React from "react";

const shipTypes = [
  {
    name: "carrier",
    length: 5,
    addShipInfoToTypes: (props) => {
      return (
        <Carrier
          key={"carrier"}
          start={props.start}
          axis={props.axis}
          ship_length={5}
          sunk={props.sunk ? "sunk" : ""}
        />
      );
    },
  },
  {
    name: "battleship",
    length: 4,
    addShipInfoToTypes: (props) => {
      return (
        <Battleship
          key={"battleship"}
          start={props.start}
          axis={props.axis}
          ship_length={4}
          sunk={props.sunk ? "sunk" : ""}
        />
      );
    },
  },
  {
    name: "destroyer",
    length: 3,
    addShipInfoToTypes: (props) => {
      return (
        <Destroyer
          key={"destroyer"}
          start={props.start}
          axis={props.axis}
          ship_length={3}
          sunk={props.sunk ? "sunk" : ""}
        />
      );
    },
  },
  {
    name: "submarine",
    length: 3,
    addShipInfoToTypes: (props) => {
      return (
        <Submarine
          key={"submarine"}
          start={props.start}
          axis={props.axis}
          ship_length={3}
          sunk={props.sunk ? "sunk" : ""}
        />
      );
    },
  },
  {
    name: "patrol boat",
    length: 2,
    addShipInfoToTypes: (props) => {
      return (
        <Patrol
          key={"patrol-boat"}
          start={props.start}
          axis={props.axis}
          ship_length={2}
          sunk={props.sunk ? "sunk" : ""}
        />
      );
    },
  },
];

export default shipTypes;
