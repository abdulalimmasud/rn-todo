import PropTypes from "prop-types";
import React from "react";
import { View, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { Wallet_Types } from "./walletData";
import Colors from "../utils/colors";
import Screen from "../common/Screen";
import WalletCard from "./WalletCard";
import WalletDetails from "./WalletDetails";

const WalletScreen = ({ navigation, wallets }) => {
  const isWalletDropdownVisible = navigation.getParam(
    "isWalletDropdownVisible"
  );
  const selectedWalletId =
    navigation.getParams("selectedWalletId") || wallets[0].id;

  const wallet = wallets.find(w => w.id === selectedWalletId);
  const handleSelectedWalletCard = id => {
    navigation.setParams({
      selectedWalletId: id,
      isWalletDropdownVisible: !isWalletDropdownVisible
    });
  };
  return (
    <Screen>
      {isWalletDropdownVisible ? (
        <Screen style={styles.wrapper}>
          {wallets.map(w => (
            <WalletCard
              key={w.id}
              value={w.id}
              label={w.label}
              value={w.value}
              type={w.type}
              isSelected={w.id === selectedWalletId}
              onPress={handleSelectedWalletCard}
            />
          ))}
        </Screen>
      ) : null}
      <View style={styles.bodyContainer}>
        <WalletDetails wallet={wallet} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    backgroundColor: "rgba(100,100,100, 0.8)"
  },
  bodyContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: Colors.white,
    marginVertical: 8,
    padding: 24,
    shadowColor: Colors.black,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }
  }
});

WalletScreen.defaultProps = { wallets: [] };
WalletScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  wallets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      type: PropTypes.oneOf(Object.values(Wallet_Types)).isRequired,
      message: PropTypes.string
    })
  )
};
export default withNavigation(WalletScreen);
