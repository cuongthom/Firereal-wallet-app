import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Pressable, StyleSheet, Text} from "react-native";

export default function ButtonAndIcon(
    {
        onPress = () => {
        },
        iconColor = "black",
        fontSize = 17,
        paddingStart = 5,
        iconStart = true,
        text = "Paste",
        icon = null,
        iconMrTop = 0,
        marginLeft = 0,
        textColor = "black",
        iconSize = 17,
    }
) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            {
                iconStart && icon ? (
                    <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} style={{marginTop: iconMrTop}}/>
                ) : (
                    <></>
                )
            }
            <Text
                style={{
                    color: textColor,
                    fontWeight: 'bold',
                    fontSize,
                    paddingStart
                }}
            >
                {text}
            </Text>
            {
                !iconStart && icon ? (
                    <MaterialCommunityIcons style={{marginTop: iconMrTop, marginLeft}} name={icon} size={iconSize} color={iconColor}/>
                ) : (
                    <></>
                )
            }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
    },
});
