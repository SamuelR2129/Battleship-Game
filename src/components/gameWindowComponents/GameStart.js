import React, { useContext, useState, useEffect } from "react";
import { store } from "../../GameController";
import {
  GameStartContainer,
  HudWindow,
  LabelContainer,
} from "../styledComponents/gameControllerStyles";
import EnemyWatersGrid from "./EnemyWatersGrid";
import FriendlyWatersGrid from "./FriendlyWatersGrid";
import checkWinner from "../../helpers/checkWinner";

function GameStart({ setDismount }) {
  const { state, dispatch } = useContext(store);
  const { message } = state;
  const [hudMessage, setHudMessage] = useState("");

  useEffect(() => {
    if (checkWinner(state.players)) {
      setTimeout(() => {
        dispatch({
          type: "SET_WINNER",
          payload: null,
        });
      }, 2500);
    }
  });

  useEffect(() => {
    // set dismount animation check in case of another playthrough
    setDismount(false);
  }, [setDismount]);

  useEffect(() => {
    // trigger type effect for messages if state changes
    if (message) handleHudSet(message);
  }, [message]);

  useEffect(() => {
    dispatch({
      type: "SET_MESSAGE",
      payload: `Awaiting orders, Admiral ${state.players.human.playerName}`,
    });
  }, [dispatch, state.players.human.playerName]);

  const handleHudSet = (message) => {
    setHudMessage("");
    const messageArray = message.split("");
    let counter = 0;
    const messageDisplay = [];
    const typingMessageEmulator = setInterval(() => {
      messageDisplay.push(messageArray[counter]);
      setHudMessage(messageDisplay.join(""));
      counter++;
      if (counter >= messageArray.length) clearInterval(typingMessageEmulator);
    }, 5);
  };

  return (
    <>
      <GameStartContainer>
        <HudWindow>
          <p style={{ margin: "auto" }}>{hudMessage}</p>
        </HudWindow>
        <LabelContainer row="4">
          <h1 style={{ margin: "auto auto 0" }}>Friendly waters</h1>
        </LabelContainer>
        <LabelContainer row="2">
          <h1 style={{ margin: "auto auto 0" }}>Enemy waters</h1>
        </LabelContainer>
        <FriendlyWatersGrid />
        <EnemyWatersGrid />
      </GameStartContainer>
    </>
  );
}

export default GameStart;
