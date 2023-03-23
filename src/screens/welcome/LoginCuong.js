import React from "react";
import Navbar from "../../compoments/component/Navbar";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import { Image, Pressable, StyleSheet, Text, View, Button } from "react-native";
import ButtonOutLine from "../../compoments/button/ButtonOutLine";
import { st } from "../../config/Constant";
import { TextInput } from "react-native-paper";

export default function LoginCuong() {
  return (
    <View style={[styles.container]}>

        <View style={styles.header}>
          <View style={styles.logo}>
            <Image source={require("../../assets/image/icon-fireal.png")} />
          </View>
          <View style={styles.content}>
            <Text style={[styles.title]}>register</Text>
          </View>
        </View>
        <View style={{ marginBottom: 20, padding: 20, marginTop: 60 }}>
          <TextInput
            style={{ backgroundColor: "white", borderWidth: 4, borderColor: 0 }}
            placeholder="taikhoan"
          />
          <TextInput
            style={{ backgroundColor: "white" }}
            placeholder="matkhau"
          />
        </View>
        {/* <View style={styles.inputForm}>
      <Navbar
        titles={["Email", "Phone Number"]}
        icons={null}
        components={[formSignInWithEmail(), formSignInWithPhone()]}
      />
    </View> */}
        <View style={styles.optionSign}>
          <ButtonLarge
            text={"Sign in"}
            width={"90%"}
            paddingVertical={15}
            fontSize={18}
            elevation={0}
            borderRadius={15}
            onPress={() => redirectScreen("LocalAuthEnable")}
          />
        </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    paddingTop:80,

  },
  header: {
    alignItems: "center",
    flex: 0.2,
    paddingStart: 30,
    paddingTop: 30,
  },
  optionSign: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.3,
  },
  text: {
    color: "#43C621",
    fontWeight: "700",
  },
  logo: {
    backgroundColor: "white",
    justifyContent: "center",
  },
  content: {
    marginTop: "10%",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "Manrope",
    lineHeight: 38,
    alignSelf: "stretch",
  },
  description: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: "Manrope",
    fontStyle: "normal",
    letterSpacing: 0.2,
    alignSelf: "stretch",
    paddingTop: 15,
    color: "#6A7187",
  },
  inputForm: {
    flex: 0.4,
    width: "90%",
    marginLeft: "5%",
  },
  footer: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
});
