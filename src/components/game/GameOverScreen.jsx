import React from "react";
import { Text, Button, StyleSheet } from "react-native";
import Body from "../Body";

const GameOverScreen = props => {
  return (
    <Body style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of Rounds:{props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </Body>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center"
  }
});
export default GameOverScreen;
