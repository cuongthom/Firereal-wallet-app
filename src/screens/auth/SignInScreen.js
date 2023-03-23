import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import ButtonOutLine from "../../compoments/button/ButtonOutLine";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import AssetTab from "../../compoments/component/AssetTab";
import MyHold from "../../compoments/component/MyHold";
import NftTab from "../../compoments/component/NftTab";
import Navbar from "../../compoments/component/Navbar";
import TextInputCp from "../../compoments/component/TextInputCp";
import { navigate } from "../../config/navigator/RootNavigation";
import { darkMode, st } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";
export default function SignInScreen({ navigation }) {
  const { connection } = useConnection();
  const redirectScreen = (screen) => {
    navigate(screen);
  };

  const formSignInWithEmail = () => {
    return (
      <View>
        <TextInputCp
          placeholderText={"Enter your email address"}
          labelText={
            <Text
              style={[
                connection.DarkMode === false ? st.textBlack : st.textWhite,
              ]}
            >
              Email
            </Text>
          }
        />
        <TextInputCp
          placeholderText={"Enter your password"}
          labelText={
            <Text
              style={[
                connection.DarkMode === false ? st.textBlack : st.textWhite,
              ]}
            >
              passWord
            </Text>
          }
          password={true}
          showIcon={true}
          rightLabel={"Forgot password?"}
          styleRightLabel={{ color: "#43C621" }}
          onPressRightLabel={() => redirectScreen("PhoneNumber")}
        />
      </View>
    );
  };

  const formSignInWithPhone = () => {
    return (
      <View>
        <TextInputCp
          placeholderText={"Enter your phone number"}
          labelText={
            <Text
              style={[
                connection.DarkMode === false ? st.textBlack : st.textWhite,
              ]}
            >
              Phone Number
            </Text>
          }
        />
        <TextInputCp
          placeholderText={"Enter your password"}
          labelText={
            <Text
              style={[
                connection.DarkMode === false ? st.textBlack : st.textWhite,
              ]}
            >
              PassWord
            </Text>
          }
          password={true}
          showIcon={true}
          rightLabel={"Forgot password?"}
          styleRightLabel={{ color: "#43C621" }}
          onPressRightLabel={() => redirectScreen("PhoneNumber")}
        />
      </View>
    );
  };

  return (
    <View
      style={[
        connection.DarkMode === false
          ? styles.container
          : darkMode.bgDarkContainer,
      ]}
    >
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image
            source={require("../../assets/new-image/logo-and-text.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <Text
            style={[
              connection.DarkMode === false ? null : st.textWhite,
              styles.title,
            ]}
          >
            Welcome Back!
          </Text>
          <Text style={styles.description}>
            Enter your registered account to sign in
          </Text>
        </View>
      </View>
      <View style={styles.inputForm}>
        <Navbar
          titles={["Email", "Phone Number"]}
          icons={null}
          components={[formSignInWithEmail(), formSignInWithPhone()]}
        />
      </View>
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
        <ButtonOutLine
          title={
            <Text style={[connection.DarkMode === false ? null : st.textWhite]}>
              Sign in with Apple
            </Text>
          }
          source={require("../../assets/new-image/apple-icon.png")}
          paddingVertical={15}
          width={"90%"}
          marginTop={10}
          borderRadius={15}
        />
        <ButtonOutLine
          title={
            <Text style={[connection.DarkMode === false ? null : st.textWhite]}>
              Sign in with Google
            </Text>
          }
          source={require("../../assets/new-image/google-icon.png")}
          paddingVertical={15}
          width={"90%"}
          marginTop={10}
          borderRadius={15}
        />
      </View>
      <View style={styles.footer}>
        <Text
          style={[connection.DarkMode === false ? st.textBlack : st.textWhite]}
        >
          Don’t have any account?
          <Text style={[styles.text]} onPress={() => redirectScreen("SignUp")}>
            {" "}
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
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
