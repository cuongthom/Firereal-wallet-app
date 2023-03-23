import { StyleSheet } from "react-native";

export const seedFace = [
  "motor",
  "panic",
  "tip",
  "draft",
  "bleak",
  "wolf",
  "motor",
  "panic",
  "tip",
  "draft",
  "bleak",
  "wolf",
];

export const TokenInfo = [
  {
    name: "FIREAL",
    symbol: "FRL",
    price: 0.045,
    profit: 6.06,
    type: "BEP-20",
    amount: 0.0,
    usdtAmount: 0.0,
    image: require("../assets/image/logoTokenFrl.png"),
  },
  {
    name: "BTC",
    symbol: "BTC",
    price: 58.456,
    profit: 3.06,
    type: "BEP-20",
    amount: 0.0,
    usdtAmount: 0.0,
    image: require("../assets/image/btc-icon.png"),
  },
  {
    name: "ETH",
    symbol: "ETH",
    price: 2.546,
    profit: -2,
    type: "BEP-20",
    amount: 0.0,
    usdtAmount: 0.0,
    image: require("../assets/image/eth-icon.png"),
  },
  {
    name: "DOGE",
    symbol: "DOGE",
    price: 0.045,
    profit: 6.06,
    type: "BEP-20",
    amount: 0.0,
    usdtAmount: 0.0,
    image: require("../assets/image/doge-icon.png"),
  },
];

export const DataSlide = [
  {
    id: 1,
    img: require("../assets/new-image/first-image-about-screen.png"),
    title: "Managing Money is\n Easy with Fireal wallet",
    description:
      "Your finance work starts here. Our here to help\n you track and deal with speeding up your\n transactions.",
  },
  {
    id: 2,
    img: require("../assets/new-image/second-image-about-screen.png"),
    title: "Earn the highest yields\n on BTC, ETH, USDC",
    description:
      "Up to 17.3% APY on USDC/USDT, 8.7% on BTC,\n 10.3% on ETH. \n" +
      "No limits, no lockups",
  },
  {
    id: 3,
    img: require("../assets/new-image/third-image-about-screen.png"),
    title: "Store. Spend. Earn\n" + "2 Minutes",
    description:
      "Your finance work starts here. Our here to help\n you track and deal with speeding up your\n transactions.",
  },
];

export const DataSlide2 = [
  {
    id: 1,
    img: require("../assets/new-image/face-auth-icon.png"),
    title: "Enable Face ID",
    description:
      "Face ID is a convenient and secure method of \nsigning into your account",
  },
  {
    id: 2,
    img: require("../assets/new-image/biometric-authen-icon.png"),
    title: "Biometric Access",
    description:
      "Biometric Access is a convenient and secure method of \nsigning into your account",
  },
];
export const countryList = [
  {
    image: require("../assets/new-image/flag-united-states.png"),
    name: "United States",
  },
  {
    image: require("../assets/new-image/flag-united-kingdom.png"),
    name: "United Kingdom",
  },
  {
    image: require("../assets/new-image/flag-singapore.png"),
    name: "Singapore",
  },
  {
    image: require("../assets/new-image/flag-switzerland.png"),
    name: "Switzerland",
  },
];

export const listCurrencyUnit = [
  {
    value: "usd",
    symbol: "$",
    label: "USD",
  },
  {
    value: "eur",
    symbol: "€",
    label: "EUR",
  },
  {
    value: "gbp",
    symbol: "£",
    label: "GBP",
  },
  {
    value: "jpy",
    symbol: "¥",
    label: "JPY",
  },
  {
    value: "cny",
    symbol: "¥",
    label: "CNY",
  },
  {
    value: "krw",
    symbol: "₩",
    label: "KRW",
  },
  {
    value: "inr",
    symbol: "₹",
    label: "INR",
  },
  {
    value: "rub",
    symbol: "₽",
    label: "RUB",
  },
  {
    value: "vnd",
    symbol: "₫",
    label: "VND",
  },
];
export const darkMode = StyleSheet.create({
  bgDarkContainer: {
    flex: 1,
    backgroundColor: "#061237",
  },
  bgImageDark: {
    backgroundColor: "#1E2848",
  },
  bgIconDark: {
    backgroundColor: "#343849",
  },
});
export const st = StyleSheet.create({
  width100: {
    width: "100%",
  },
  width70: {
    width: "70%",
  },
  width60: {
    width: "60%",
  },
  width45: {
    width: "45%",
  },
  width35: {
    width: "35%",
  },
  width30: {
    width: "30%",
  },
  width20: {
    width: "20%",
  },
  width50px: {
    width: 50,
  },
  width70px: {
    width: 70,
  },
  fw600: {
    fontWeight: "600",
  },
  fw400: {
    fontWeight: "400",
  },
  fs15: {
    fontSize: 15,
  },
  fs14: {
    fontSize: 14,
  },
  fs13: {
    fontSize: 13,
  },

  fs10: {
    fontSize: 10,
  },
  textBlack: {
    color: "#000",
  },

  textGray: {
    color: "#9EA3AE",
  },

  textBlue: {
    color: "#00D085",
  },

  textStart: {
    textAlign: "left",
  },
  pr30Percent: {
    paddingRight: "30%",
  },

  pr10Percent: {
    paddingRight: "10%",
  },

  ph5Percent: {
    paddingHorizontal: "5%",
  },
  pv7Percent: {
    paddingVertical: "7%",
  },

  pv3Percent: {
    paddingVertical: "3%",
  },
  pr1: {
    paddingRight: 10,
  },
  pr2: {
    paddingRight: 20,
  },

  pt2: {
    paddingTop: 20,
  },
  pb15: {
    paddingBottom: 15,
  },
  pb16: {
    paddingBottom: 16,
  },
  borderRa10: {
    borderRadius: 10,
  },
  flex1: {
    flex: 1,
  },
  flexGrow1: {
    flexGrow: 1,
  },
  flexGrow2: {
    flexGrow: 2,
  },
  flexGrow3: {
    flexGrow: 3,
  },
  flexGrow4: {
    flexGrow: 4,
  },
  flexGrow5: {
    flexGrow: 5,
  },
  flexGrow6: {
    flexGrow: 6,
  },
  flexGrow7: {
    flexGrow: 7,
  },
  flexGrow8: {
    flexGrow: 8,
  },
  flexGrow9: {
    flexGrow: 9,
  },
  flexGrow10: {
    flexGrow: 10,
  },
  flexGrow11: {
    flexGrow: 11,
  },
  flexGrow12: {
    flexGrow: 12,
  },
  flexGrow13: {
    flexGrow: 13,
  },
  flexGrow14: {
    flexGrow: 14,
  },
  flexGrow15: {
    flexGrow: 15,
  },
  textCenter: {
    textAlign: "center",
  },
  textEnd: {
    textAlign: "end",
  },
  mr: {
    margin: 0,
  },
  mt1: {
    marginTop: 10,
  },
  mt2: {
    marginTop: 20,
  },
  mt3: {
    marginTop: 30,
  },
  mb2: {
    marginBottom: 20,
  },
  mb3: {
    marginBottom: 30,
  },
  mt4: {
    marginTop: 40,
  },

  textAlignRight: {
    textAlign: "right",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },

  textRight: {
    textAlign: "right",
  },
  alignItemStart: {
    alignItems: "flex-start",
  },
  m20: {
    margin: 20,
  },
  mr0: {
    marginRight: 5,
  },
  mr85: {
    marginRight: 85,
  },
  ml0: {
    marginLeft: 5,
  },
  ml1: {
    marginLeft: 10,
  },
  ml2: {
    marginLeft: 20,
  },
  ml3: {
    marginLeft: 30,
  },
  ml15: {
    marginLeft: 15,
  },
  ls2: {
    letterSpacing: 0.2,
  },
  ls3: {
    letterSpacing: 0.3,
  },
  lh16: {
    lineHeight: 16,
  },

  lh22: {
    lineHeight: 22,
  },
  lh24: {
    lineHeight: 24,
  },
  bgWhite: {
    backgroundColor: "#fff",
  },
  pv20Percent: {
    paddingVertical: "20%",
  },
  pv10Percent: {
    paddingVertical: "10%",
  },
  mv10Percent: {
    marginVertical: "10%",
  },

  pv1: {
    paddingVertical: 10,
  },
  width33: {
    width: "33%",
  },
  width50: {
    width: "50%",
  },
  width40: {
    width: "40%",
  },
  width80: {
    width: "80%",
  },
  width90: {
    width: "90%",
  },
  fw700: {
    fontWeight: "700",
  },
  fw500: {
    fontWeight: "500",
  },
  fs24: {
    fontSize: 24,
  },
  fs25: {
    fontSize: 25,
  },
  fs16: {
    fontSize: 16,
  },

  fs18: {
    fontSize: 18,
  },
  fs20: {
    fontSize: 20,
  },
  fs30: {
    fontSize: 30,
  },
  fs12: {
    fontSize: 12,
  },

  fs32: {
    fontSize: 32,
  },
  fs35: {
    fontSize: 35,
  },
  textWhite: {
    color: "#fff",
  },

  textWhiteBlur: {
    color: "#C6EEBC",
  },

  textGreen: {
    color: "#43C621",
  },

  textBlueLight: {
    color: "#1355FF",
  },

  pr20Percent: {
    paddingRight: "20%",
  },

  ph3Percent: {
    paddingHorizontal: "3%",
  },

  ph7Percent: {
    paddingHorizontal: "7%",
  },
  ph10Percent: {
    paddingHorizontal: "10%",
  },
  ph0: {
    paddingHorizontal: 5,
  },

  pv5Percent: {
    paddingVertical: "5%",
  },

  pt4: {
    paddingTop: 4,
  },
  pt5: {
    paddingTop: 5,
  },
  pt1: {
    paddingTop: 10,
  },
  pt16: {
    paddingTop: 16,
  },
  pt15: {
    paddingTop: 15,
  },
  padding20: {
    padding: 20,
  },
  pb1: {
    paddingBottom: 10,
  },
  pb2: {
    paddingBottom: 20,
  },
  pl0: {
    paddingLeft: 5,
  },
  pl8: {
    paddingLeft: 8,
  },
  pl1: {
    paddingLeft: 10,
  },
  pl2: {
    paddingLeft: 20,
  },
  alignItemEnd: {
    alignItems: "flex-end",
  },
  alignItemCenter: {
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  justifySpaceBetween: {
    justifyContent: "space-between",
  },
  justifyCenter: {
    justifyContent: "center",
  },

  mb2: {
    marginBottom: 20,
  },
  mb3: {
    marginBottom: 30,
  },
  mb4: {
    marginBottom: 40,
  },
  mb5: {
    marginBottom: 50,
  },
  mb6: {
    marginBottom: 60,
  },
  mt4: {
    marginTop: 40,
  },
  mr1: {
    marginRight: 10,
  },
  mr2: {
    marginRight: 20,
  },
  mr3: {
    marginRight: 30,
  },
  mr15: {
    marginRight: 15,
  },
  justifySpaceAround: {
    justifyContent: "space-around",
  },

  justifyStart: {
    justifyContent: "flex-start",
  },

  height100: {
    height: "100%",
  },
  height30: {
    height: 30,
  },

  lh19: {
    lineHeight: 19,
  },
  h1Bold: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.2,
    lineHeight: 22,
  },
  h2Bold: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.2,
    lineHeight: 19,
  },
  h1: {
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.2,
    lineHeight: 22,
  },
  h2: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.2,
    lineHeight: 19,
  },
  p: {
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0.3,
    lineHeight: 16,
  },
  pBold: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.3,
    lineHeight: 16,
  },
  whiteContainer: {
    backgroundColor: "#fff",
  },
  pv30Percent: {
    paddingVertical: "30%",
  },

  w95Percent: {
    width: "95%",
  },
  pr3Percent: {
    paddingRight: "3%",
  },
});
