import {StyleSheet, Text, View} from "react-native";
import Checkbox from "expo-checkbox";

export default function CheckBoxComponent(
    {
        isChecked = false,
        onValueChange = () => {

        },
        text = "",
        paddingHorizontal = 0,
    }
) {

    return (
        <View style={[styles.container, {paddingHorizontal}]}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={onValueChange} />
            <Text style={styles.paragraph}>{text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: '5%',
        alignItems: 'stretch',
    },
    paragraph: {
        fontSize: 15,
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    checkbox: {
        width: 15,
        height: 15
    }
});
