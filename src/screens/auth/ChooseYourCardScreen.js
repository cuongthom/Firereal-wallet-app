import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import ListChooseCard from "../../compoments/component/ListChooseCard";
import {navigate} from "../../config/navigator/RootNavigation";
import { darkMode,st } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";
export default function ChooseYourCardScreen({ navigation }) {
    const {connection} = useConnection()
    const backToOldScreen = () => {
        navigation.goBack();
    };

    const redirectScreen = () => {
        navigate("UploadIdCard")
    };
    return (
        <View style={[connection.DarkMode === false ? styles.container : darkMode.bgDarkContainer]}>
            <View style={styles.header}>
                <Pressable onPress={backToOldScreen}>
                    <Image
                        source={require("../../assets/new-image/vector-left.png")}
                        style={styles.image}
                    />
                </Pressable>
                <View style={styles.content}>
                    <Text style={[connection.DarkMode === false ? null : st.textWhite,styles.title]}>
                        {"What type Singapore ID will you be using?"}
                    </Text>
                    <Text style={styles.description}>
                        {
                            "We need this to confirm your reside and verify who you are. Data processed securely"
                        }
                    </Text>
                </View>
            </View>
            <View style={styles.body}>
                <ListChooseCard />
            </View>
            <View style={styles.footer}>
                <View style={styles.contentFooter}>
                    <View>
                        <Text style={styles.descriptionFooter}>
                            By using this service, you agree to Financer
                            <Text style={styles.textBold}>
                                Terms of Service
                            </Text>{" "}
                            and{" "}
                            <Text style={styles.textBold}>Privacy Policy</Text>
                        </Text>
                    </View>
                </View>
                <ButtonLarge
                    text={"Continue"}
                    width={"90%"}
                    paddingVertical={15}
                    fontSize={18}
                    elevation={0}
                    borderRadius={15}
                    onPress={redirectScreen}
                />
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
        paddingStart: 30,
        paddingTop: 30,
        paddingEnd: 30,
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
    body: {
        flex: 0.4,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingStart: 30,
        paddingEnd: 30,
    },
    footer: {
        flex: 0.35,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: "10%",
    },
    contentFooter: {
        flexDirection: "row",
        marginBottom: "3%",
        width: "90%",
    },
    descriptionFooter: {
        fontSize: 12,
        color: "#6A7187",
        paddingLeft: "2%",
        lineHeight: 16,
        letterSpacing: 0.3,
        fontFamily: "Manrope",
        fontWeight: "400",
    },
    countryButton: {
        width: "90%",
    },
    textBold: {
        fontWeight: "700",
        letterSpacing: 0.3,
        lineHeight: 16,
        fontFamily: "Manrope",
        color: "#061237",
    },
});
