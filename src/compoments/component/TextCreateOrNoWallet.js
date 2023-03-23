import {StyleSheet, Text} from "react-native";

export default function TextCreateOrNoWallet({textBold, textSmall}) {
    return (
        <>
            <Text style={styles.textBold}>{textBold}</Text>
            <Text style={styles.textSmall}>{textSmall}</Text>
        </>
    );

}
const styles = StyleSheet.create({
    textBold: {
        fontWeight: 'bold',
        paddingHorizontal: 5,
        fontSize: 25,
    },
    textSmall: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        fontSize: 17,
        marginBottom: 10,
        color: '#828282'
    },
});
