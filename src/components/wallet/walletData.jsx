export const Wallet_Types = {
  ETHEREUM: "Ethereum",
  BITCOIN: "Bitcoin"
};

export default WALLET_DATA = [
  {
    id: 1,
    label: "Investo Partners Wallet",
    Value: 18675,
    type: Wallet_Types.ETHEREUM,
    message: "3 of 4 signatures required to process trasactions"
  },
  {
    id: 2,
    label: "Bitcoin Multisig Wallet",
    Value: 98368,
    type: Wallet_Types.BITCOIN,
    message: "4 of 8 signatures required to process trasactions"
  },
  {
    id: 3,
    label: "Ethereum Singlesig Wallet",
    Value: 3456,
    type: Wallet_Types.ETHEREUM,
    message: "1 signature required to process trasactions"
  },
  {
    id: 4,
    label: "Capital Ventures Wallet",
    Value: 8761,
    type: Wallet_Types.ETHEREUM,
    message: "1 signature required to process trasactions"
  },
  {
    id: 5,
    label: "Delmar Group Wallet",
    Value: 76789,
    type: Wallet_Types.BITCOIN,
    message: "4 of 5 signature required to process trasactions"
  }
];
