import {StyleSheet, Text, View} from "react-native";
import ButtonLarge from "../button/ButtonLarge";

export default function LabelInputSwap({text, balance}) {
    return (
        <View style={styles.container}>
            <View style={styles.bockTitle}>
                <Text style={styles.textLabel}>{text}:</Text>
            </View>
            <View style={styles.buttonMax}>
                <ButtonLarge
                    text={"Max"}
                    fontSize={14}
                    lineHeight={19.6}
                    marginStart={20}
                    paddingVertical={5}
                    width={"50%"}
                />
            </View>
            <View style={styles.blockBalance}>
                <Text style={styles.textBalance}>Balance: {balance}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        zIndex: 1
    },
    textLabel: {
        fontWeight: 'bold',
        fontSize: 14,
        paddingTop: 5
    },
    textBalance: {
        fontSize: 13,
        color: '#6C727F',
    },
    buttonMax: {
        flexBasis: "30%",
        alignItems: "flex-start",
    },
    bockTitle: {
        flexBasis: "15%",
    },
    blockBalance: {
        flexBasis: "55%",
        alignItems: 'flex-end',
    },
});
