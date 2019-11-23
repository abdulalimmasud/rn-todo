import React, { useState } from "react";
import TitleHeader from "../components/common/TitleHeader";
import StartGameScreen from "../components/game/StartGameScreen";
import GameScreen from "../components/game/GameScreen";
import GameOverScreen from "../components/game/GameOverScreen";
import Header from "../components/Header";
import Body from "../components/Body";

const Game = props => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const configureNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };
  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };
  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <Body>
      <Header navigation={props.navigation} />
      <TitleHeader title="Guess a Number" />
      {content}
    </Body>
  );
};

export default Game;
