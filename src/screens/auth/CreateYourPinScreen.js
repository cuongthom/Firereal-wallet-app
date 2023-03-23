import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import { navigate } from "../../config/navigator/RootNavigation";
import { darkMode,st } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";

export default function CreateYourPinScreen({ navigation }) {
    const {connection} = useConnection()
    const backToOldScreen = () => {
        navigation.goBack();
    };
    const handlePressHelpButton = () => {
        console.log("Help button pressed");
    };

    const handleCreatePin = () => {
        navigate("ChooseYourCard");
    };

    const handlePressMaybeLaterButton = () => {
        console.log("Maybe later button pressed");
    };

    return (
        <View style={[connection.DarkMode === false ? styles.container : darkMode.bgDarkContainer]}>
            <View style={styles.header}>
                <View>
                    <Pressable onPress={backToOldScreen}>
                        <Image
                            source={require("../../assets/new-image/vector-left.png")}
                            style={styles.image}
                        />
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={handlePressHelpButton}>
                        <Image
                            source={require("../../assets/new-image/help.png")}
                            style={styles.image}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.content}>
                    <Text style={[connection.DarkMode === false ? null : st.textWhite,styles.title]}>Create your PIN</Text>
                    <Text style={styles.description}>
                        Set 4-digit PIN for Financer Card
                    </Text>
                </View>
                <View style={styles.codeInput}>
                    <OTPTextView
                        handleTextChange={(e) => {}}
                        inputCount={4}
                        textInputStyle={[connection.DarkMode === false ? null : st.textWhite,styles.textInputStyle]}
                        tintColor={connection.DarkMode === false ? "#061237" : "gray"}
                        offTintColor={connection.DarkMode === false ? "#E8EAED" : "white"}
                        inputType="password"
                    />
                </View>
            </View>
            <View style={styles.footer}>
                <ButtonLarge
                    text={"Create PIN"}
                    width={"90%"}
                    paddingVertical={15}
                    fontSize={18}
                    elevation={0}
                    borderRadius={15}
                    onPress={handleCreatePin}
                    backgroundColor={"#43C621"}
                />
                <ButtonLarge
                    text={"Maybe Later"}
                    width={"90%"}
                    paddingVertical={15}
                    fontSize={18}
                    elevation={0}
                    borderRadius={15}
                    onPress={handlePressMaybeLaterButton}
                    backgroundColor={"#fff"}
                    textColor={"#43C621"}></ButtonLarge>
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
        flex: 0.25,
        flexDirection: "row",
        paddingStart: 30,
        paddingTop: 30,
        paddingEnd: 30,
        justifyContent: "space-between",
    },
    body: {
        flex: 0.6,
        paddingStart: 30,
        paddingEnd: 30,
        alignItems: "center",
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
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
    codeInput: {
        paddingTop: 30,
    },
    containerStyle: {
        width: 50,
        height: 50,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E8EAED",
        borderStyle: "solid",
    },
    textInputStyle: {
        borderRadius: 12,
        borderWidth: 4,
        borderColor: "#E8EAED",
        borderStyle: "solid",
    },
    footer: {
        flex: 0.15,
        alignItems: "center",
    },
});
