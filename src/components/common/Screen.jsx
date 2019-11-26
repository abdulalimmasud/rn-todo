import PropTypes from "prop-types";
import React from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import Colors from "../utils/colors";

const Screen = ({ children, scrollEnabled, style }) => (
  <React.Fragment>
    <StatusBar barStyle="light-content" />
    <ScrollView
      scrollEnabled={scrollEnabled}
      style={[styles.view, style]}
      contentContainerStyle={styles.container}
    >
      {children}
    </ScrollView>
  </React.Fragment>
);

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.gallery
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20
  }
});

Screen.defaultProps = {
  children: null,
  scrollEnabled: true,
  style: {}
};

Screen.propTypes = {
  children: PropTypes.node,
  scrollEnabled: PropTypes.bool,
  style: PropTypes.object
};
export default Screen;
