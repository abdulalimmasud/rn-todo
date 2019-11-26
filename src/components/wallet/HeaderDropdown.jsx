import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import Colors from "../utils/colors";

class HeaderDropdown extends Component {
  toggleDropdownVisibility = () => {
    const isWalletDropdownVisible = this.props.navigation.getParam(
      "isWalletDropdownVisible"
    );
    this.props.navigation.setParams({
      isWalletDropdownVisible: !isWalletDropdownVisible
    });
  };
  render() {
    const isWalletDropdownVisible = this.props.navigation.getParam(
      "isWalletDropdownVisible"
    );
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.toggleDropdownVisibility}
      >
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{this.props.title}</Text>
          <View style={styles.iconWrapper}>
            <Ionicons
              name={isWalletDropdownVisible ? "md-arrow-up" : "md-arrow-down"}
              color={"rgba(255,255,255,0.7)"}
              size={14}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    display: "flex",
    alignItems: "center",
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold"
  },
  iconWrapper: {
    marginTop: 2,
    marginLeft: 3
  }
});

HeaderDropdown.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default withNavigation(HeaderDropdown);
