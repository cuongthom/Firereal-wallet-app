import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import ButtonOutLine from "../../compoments/button/ButtonOutLine";
import { navigate } from "../../config/navigator/RootNavigation";
import { useConnection } from "../../config/redux/connection";
import { darkMode, st } from "../../config/Constant";
export default function WelcomeScreen({ navigation }) {
  const { connection } = useConnection();
  const redirectScreen = (screen) => {
    navigate(screen);
  };

  return (
    <View
      style={[
        connection.DarkMode === false
          ? styles.container
          : darkMode.bgDarkContainer,
      ]}
    >
      <View style={styles.banner}>
        <Image
          source={require("../../assets/new-image/banner-welcome-screen.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text
          style={[
            connection.DarkMode === false ? styles.title : styles.titleDarkMode,
            
          ]}
        >
          Welcome to Fireal
        </Text>
        <Text style={styles.description}>
          {
            "Enjoy with unlimited transactions with zero\n monthly fees and no minimum balance"
          }
        </Text>
      </View>
      <View style={styles.optionSign}>
        <ButtonOutLine
        
          title={<Text style={[connection.DarkMode === false ? null : st.textWhite]}>Create wallet</Text>}
          source={require("../../assets/new-image/create-wallet-icon.png")}
          width={"90%"}
          borderRadius={15}
        />
        <ButtonOutLine
          title={<Text style={[connection.DarkMode === false ? null : st.textWhite]}>Sign in with Apple</Text>}
          source={require("../../assets/new-image/apple-icon.png")}
          width={"90%"}
          marginTop={10}
          borderRadius={15}
        />
        <ButtonOutLine
          title={<Text style={[connection.DarkMode === false ? null : st.textWhite]}>Sign in with Google</Text>}
          source={require("../../assets/new-image/google-icon.png")}
          width={"90%"}
          marginTop={10}
          borderRadius={15}
        />
      </View>
      <View style={styles.footer}>
        <Pressable
          style={styles.buttonSkip}
          onPress={() => redirectScreen("SignIn")}
        >
          <Text style={styles.text}>Skip</Text>
        </Pressable>
        <Text style={[connection.DarkMode === false ? null : st.textWhite]}>
          Don’t have any account?
          <Text style={styles.text} onPress={() => redirectScreen("SignUp")}>
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
  banner: {
    flex: 0.5,
  },
  image: {
    width: "100%",
  },
  content: {
    flex: 0.1,
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 33,
    color: "#061237",
    fontFamily: "Manrope",
    alignSelf: "stretch",
  },
  titleDarkMode: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 33,
    color: "white",
    fontFamily: "Manrope",
    alignSelf: "stretch",
  },
  description: {
    textAlign: "center",
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 19,
    letterSpacing: 0.25,
  },
  optionSign: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.3,
  },
  buttonSkip: {
    borderWidth: 1,
    borderColor: "#43C621",
    borderRadius: 6,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  text: {
    color: "#43C621",
    fontWeight: "700",
  },
  footer: {
    flex: 0.1,
    alignItems: "center",
  },
});
