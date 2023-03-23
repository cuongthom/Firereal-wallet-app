import { Image, View, Text, StyleSheet } from "react-native";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import { st,darkMode } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";

export default function TopupBalanceSuccessScreen({navigation}) {
    const {connection} = useConnection()
    return (
        <View style={[connection.DarkMode === false ? st.whiteContainer : darkMode.bgDarkContainer,st.flex1]}>
            <View style={styles.header}>
                <Image 
                    source={require("../../assets/new-image/close-outline.png")}
                />
            </View>
            <View style={styles.body}>
                <Text style={[connection.DarkMode === false ? null : st.textWhite,styles.title]}>Top up Success</Text>
                <Text style={[connection.DarkMode === false ? null : st.textWhite,st.mt1, st.h2, st.ml3, st.mr3]}>
                    Top up are reviewed which may result in delays or funds
                    being frozen.
                </Text>
                <Image
                    source={require("../../assets/new-image/topup-success.png")}
                    style={styles.image}
                />
            </View>
            <View style={styles.footer}>
                <ButtonLarge
                    text="Done"
                    paddingVertical={14}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 0.1,
        paddingStart: 30,
        paddingTop: 30,
    },
    body: {
        flex: 0.8,
        alignItems: "center",
        position: "relative",
    },
    footer: {
        flex: 0.1,
        paddingHorizontal: 24,
        // marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        lineHeight: 38,
    },
    image: {
        position: "absolute",
        top: "50%",
        transform: [{ translateY: -100 }],
    },
});
