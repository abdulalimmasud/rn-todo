import PropTypes from "prop-types";
import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";
import { Wallet_Types } from "./walletData";

const Badge = ({ id, label, value, type, selectedWalletId, onPress }) => (
  <Text
    style={[
      styles.badge,
      type === Wallet_Types.BITCOIN ? styles.bitcoin : styles.ethereum
    ]}
  >
    {type}
  </Text>
);
Badge.propTypes = {
  type: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  badge: {
    fontSize: 12,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 6
  },
  bitcoin: {
    color: "#222",
    backgroundColor: Colors.yellow_orange
  },
  ethereum: {
    color: Colors.white,
    backgroundColor: Colors.bali_hai
  }
});

export default Badge;
