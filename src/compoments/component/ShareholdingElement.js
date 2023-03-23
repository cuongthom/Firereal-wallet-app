import { View, Image, StyleSheet, Text } from "react-native";
import { st, darkMode } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";
export default function ShareholdingElement({
  imageSource,
  name = "",
  price = "",
  percentApy = "",
  priceChange = "",
}) {
  const { connection } = useConnection();
  return (
    <View
      style={[
        connection.DarkMode === false ? styles.container : darkMode.bgImageDark,
        st.flexRow,
        st.justifySpaceBetween,
        st.alignItemCenter,
        st.pv5Percent,
        st.ph5Percent,
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
        <View style={[styles.logo]}>
          <Image source={imageSource} />
        </View>
        <View style={[st.pl2]}>
          <Text
            style={[
              connection.DarkMode === false ? st.textBlack : st.textWhite,
              st.fw700,
              st.fs14,
            ]}
          >
            {name}
          </Text>
          <View style={[st.flexRow, st.alignItemEnd]}>
            <Text
              style={[
                connection.DarkMode === false ? st.textBlack : st.textWhite,
                st.fs14,
                st.fw400,
              ]}
            >
              {price}
            </Text>
            <Text style={[st.fs12, st.fw500, st.textBlue, st.pl0]}>
              <Image source={require("../../assets/new-image/icon-up.png")} />
              {` ${priceChange}`}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={[st.textGray, st.fw500, st.fs10, st.textRight]}>
          % APY
        </Text>
        <View style={[st.flexRow, st.alignItemCenter]}>
          <Image source={require("../../assets/new-image/flash-circle.png")} />
          <Text
            style={[
              connection.DarkMode === false ? st.textBlack : st.textWhite,
              st.fw700,
              st.fs13,
            ]}
          >
            {percentApy}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    borderRadius: 15,
    marginTop: 10,
  },
  logo: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
