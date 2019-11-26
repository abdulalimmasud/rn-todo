import React, { Component } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import WalletNavigator from "../components/wallet/WalletNavigator";

class Wallet extends Component {
  static router = WalletNavigator.router;
  render() {
    return (
      <Body>
        <Header navigation={this.props.navigation} />
        <WalletNavigator navigation={this.props.navigation} />
      </Body>
    );
  }
}

export default Wallet;
