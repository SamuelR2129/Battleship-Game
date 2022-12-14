import React, { useState, useContext } from "react";
import createPlayer from "../../factories/createPlayers";
import {
  InitWindow,
  PlayerForm,
} from "../styledComponents/gameControllerStyles";
import { store } from "../../GameController";

function Init({ setDismount, dismount }) {
  const { dispatch } = useContext(store);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    // do not refresh page
    e.preventDefault();

    // remove whitespace, reject space-only names
    // this does nothing for this function, only if there is an error
    // and needs to re-render. the setState would occur after this function completed
    setName(name.trim());
    // can't do if(!name) because setName hasn't yet updated
    if (!name.trim()) {
      setError("Name required");
      return;
    } else if (name.length > 20) {
      setError("Name is too long");
      return;
    } else {
      //remove the error if they enter a valid name after an invalid one
      setError("");
    }

    const human = createPlayer(name.trim());
    const computer = createPlayer("Computer");

    dispatch({ type: "SET_PLAYERS", payload: { human, computer } });

    // this allows for the component to render with
    // the fade out animation into the next app state
    setDismount(true);
    dispatch({ type: "SET_TIMELINE", payload: "setup" });
  };

  // this triggers if the component is fading out into next app state

  return (
    <InitWindow>
      <PlayerForm
        style={{ animation: dismount ? "fadeout 1.5s" : "fadein 6s ease-in" }}
        onSubmit={handleSubmit}
      >
        <label style={{ color: "white" }} htmlFor="name">
          Enter player name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Battleship combatant"
          onChange={handleChange}
          autoComplete="off"
          value={name}
        />
        {/* displays errors if name is invalid */}
        <p style={{ color: "red" }}>{error}</p>
        <input id="playerSubmitButton" type="submit" value="Submit" />
      </PlayerForm>
    </InitWindow>
  );
}

export default Init;
