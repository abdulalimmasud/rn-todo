import PropTypes from "prop-types";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Wallet_Types } from "./walletData";
import Colors from "../utils/colors";
import Badge from "./Badge";

const WalletCard = ({ id, label, value, type, isSelected, onPress }) => (
  <TouchableOpacity
    activeOpacity={isSelected ? 1 : 0.7}
    onPress={() => onPress(id)}
    style={
      (styles.cardTouchable,
      { borderColor: isSelected ? Colors.malibu : Colors.white })
    }
  >
    <View style={[styles.cardWrap, { opacity: isSelected ? 1 : 0.6 }]}>
      <Text style={styles.header}>{label}</Text>
      <View style={styles.cardBottom}>
        <Badge type={type} />
        <Text>
          $
          {value.toLocalString("en-US", {
            minimumFractionDigits: 2,
            currency: "USD"
          })}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

WalletCard.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  type: PropTypes.oneOf(Object.values(Wallet_Types)).isRequired,
  onPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  cardTouchable: {
    borderRadius: 6,
    backgroundColor: Colors.white,
    marginVertical: 8,
    padding: 18,
    borderWidth: 3,
    borderStyle: "solid",
    shadowColor: Colors.black,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }
  },
  cardWrap: {
    display: "flex",
    justifyContent: "space-between",
    height: 110
  },
  header: {
    fontSize: 20,
    marginBottom: 4,
    fontWeight: "400"
  },
  cardBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  value: {
    fontSize: 28,
    fontWeight: "200",
    color: Colors.dove_gray
  }
});
export default WalletCard;
