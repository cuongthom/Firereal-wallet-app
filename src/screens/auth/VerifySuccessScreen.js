import { Image, StyleSheet, Text, View } from "react-native";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import { darkMode,st } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";
export default function VerifySuccessScreen() {
    const {connection} = useConnection()
    return (
        <View style={[connection.DarkMode === false ? styles.container : darkMode.bgDarkContainer]}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={[connection.DarkMode === false ? null : st.textWhite,styles.title]}>Welcome benny ✨</Text>
                    <Text style={styles.description}>
                        You’re officially a Fireal and can use all of our
                        features.
                    </Text>
                </View>
            </View>
            <View style={styles.body}>
                <Image
                    source={require("../../assets/new-image/fireal-verify-success.png")}
                />
            </View>
            <View style={styles.footer}>
                <ButtonLarge
                    text={"Explore Fireal"}
                    width={"90%"}
                    paddingVertical={15}
                    fontSize={18}
                    elevation={0}
                    borderRadius={15}
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
        flex: 0.3,
        justifyContent: "center",
        paddingHorizontal: 24,
    },
    headerContent: {
        justifyContent: "flex-end",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#A1E290",
        paddingHorizontal: 32,
        paddingVertical: 10,
    },
    title: {
        fontFamily: "Manrope",
        fontSize: 28,
        fontWeight: "700",
        lineHeight: 38,
        textAlign: "center",
        marginBottom: 8,
    },
    description: {
        fontFamily: "Manrope",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 19,
        textAlign: "center",
        letterSpacing: 0.2,
        color: "#6A7187",
    },
    body: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 0.3,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 40,
    }
});
