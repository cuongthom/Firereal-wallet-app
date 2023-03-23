import { Image, StyleSheet, Text, View } from "react-native";
import { st, darkMode } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";

export default function TokenInfo({
  backgroundColor = "#43C621",
  tokenName = "Fireal",
  tokenSymbol = "FRL",
  price = 0.045,
  profit = 6.06,
  type = "BEP-20",
  amount = "0.00",
  usdtAmount = "0.00",
  image = require("../../assets/image/logoTokenFrl.png"),
}) {
  const { connection } = useConnection();
  return (
    <View
      style={[
        connection.DarkMode === false ? styles.container : darkMode.bgImageDark,
        st.flexRow,
        st.justifySpaceBetween,
        st.alignItemCenter,
        st.ph5Percent,
        st.pv3Percent,
        st.borderRa10,
        st.mt1,
      ]}
    >
      <View
        style={[
          st.alignItemStart,
          st.flexRow,
          st.justifyCenter,
          st.alignItemCenter,
        ]}
      >
        <View style={[styles.logo, { backgroundColor }]}>
          <Image source={image} />
        </View>
        <View style={[st.pl2]}>
          <View style={[st.flexRow]}>
            <Text
              style={[
                connection.DarkMode === false ? st.textBlack : st.textWhite,
                st.fw700,
                st.fs14,
              ]}
            >
              {tokenName}
            </Text>
            <Text style={[st.textGray, st.fs14, st.fw400]}>{` ${type}`}</Text>
          </View>
          <View style={[st.flexRow, st.alignItemEnd]}>
            <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fs14, st.fw400]}>${price}</Text>
            <Text style={[st.fs12, st.fw500, st.textBlue, st.pl0]}>
              <Image source={require("../../assets/new-image/icon-up.png")} />
              {profit}%
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View style={[st.flexRow, st.alignItemEnd]}>
          <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite, st.fw700, st.fs16]}>{amount}</Text>
          <Text
            style={[st.textGray, st.fw600, st.fs16]}
          >{` ${tokenSymbol}`}</Text>
        </View>
        <View style={[st.flexRow, st.justifyEnd]}>
          <Text style={[st.fw500, st.fs12, st.textGray]}>= ${usdtAmount}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F9FC",
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
