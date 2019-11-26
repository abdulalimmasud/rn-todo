import PropTypes from "prop-types";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Wallet_Types } from "./walletData";
import Colors from "../utils/colors";
import Badge from "./Badge";

const WalletRow = ({ children }) => (
  <View
    style={[
      styles.walletRow,
      { justifyContent: Array.isArray(children) ? "space-between" : "center" }
    ]}
  >
    {children}
  </View>
);
const WalletDetails = ({ wallet }) => (
  <View style={styles.wrapper}>
    <Text style={styles.header}>{wallet.label}</Text>
    <Text style={styles.value}>
      $
      {wallet.value.toLocalString("en-US", {
        minimumFractionDigits: 2,
        currency: "USD"
      })}
    </Text>
    <WalletRow>
      <Text style={styles.label}>Wallet Type</Text>
      <Badge type={wallet.type} />
    </WalletRow>
    <WalletRow>
      <Text style={styles.message}>{wallet.message}</Text>
    </WalletRow>
  </View>
);
WalletDetails.defaultProps = { wallet: {} };
WalletDetails.propTypes = {
  wallet: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    type: PropTypes.oneOf(Object.values(Wallet_Types)).isRequired,
    message: PropTypes.string.isRequired
  })
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%"
  },
  walletRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderTopColor: Colors.alto,
    borderTopWidth: StyleSheet.hairlineWidth
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400"
  },
  value: {
    textAlign: "center",
    fontSize: 34,
    fontWeight: "200",
    color: Colors.dove_gray,
    marginTop: 10,
    marginBottom: 28
  },
  label: {
    fontWeight: "600"
  },
  message: {
    textAlign: "center",
    paddingHorizontal: 10
  }
});

export default WalletDetails;
