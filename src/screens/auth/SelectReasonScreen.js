import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import ListChooseReason from "../../compoments/component/ListChooseReason";
import {navigate} from "../../config/navigator/RootNavigation";
import { darkMode,st } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";
export default function SelectReasonScreen({ navigation }) {
    const {connection} = useConnection()
    const backToOldScreen = () => {
        navigation.goBack();
    };

    const redirectScreen = () => {
        navigate('CreateYourPin');
    }
    return (
        <View style={[connection.DarkMode === false ? styles.container : darkMode.bgDarkContainer]}>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Pressable onPress={backToOldScreen}>
                        <Image
                            source={require("../../assets/new-image/vector-left.png")}
                            style={styles.image}
                        />
                    </Pressable>
                </View>
                <View style={styles.content}>
                    <Text style={[connection.DarkMode === false ? null : st.textWhite,styles.title]}>
                        What will you primarily use Fireal?
                    </Text>
                    <Text style={styles.description}>
                        {
                            "This is required to open Deposit account \nin Singapore"
                        }
                    </Text>
                </View>
            </View>
            <View style={styles.body}>
                <ListChooseReason />
            </View>
            <View style={styles.footer}>
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
        flex: 0.5,
        paddingStart: 24,
        paddingEnd: 24,
        justifyContent: "center",
    },
    footer: {
        flex: 0.25,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: "10%",
    },
});
