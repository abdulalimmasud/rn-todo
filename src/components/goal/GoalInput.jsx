import React, { useState } from "react";
import { StyleSheet, View, Button, Modal } from "react-native";
import Body from "../Body";
import Input from "../common/Input";

const GoalInput = props => {
  const [enteredGoal, setEnterGoal] = useState("");
  const goalInputHandler = enteredText => {
    setEnterGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnterGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <Body style={styles.inputContainer}>
        <Input
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </Body>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderColor: "#000",
    width: 250,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

export default GoalInput;
