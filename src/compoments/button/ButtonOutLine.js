import {Image, Pressable, StyleSheet, Text} from "react-native";

export default function ButtonOutLine(
    {
        title = "",
        onPress = () => {},
        source = null,
        paddingVertical = 15,
        paddingHorizontal = 80,
        borderColor = "#D6DDEB",
        borderRadius = 10,
        width = "auto",
        height = "auto",
        marginTop = 0,
    }
) {
    return (
        <Pressable onPress={onPress} style={[
            styles.container,
            {
                paddingVertical,
                paddingHorizontal,
                borderColor,
                borderRadius,
                width,
                height,
                marginTop
            }
        ]}>
            {
                source ? (
                    <Image source={source} style={styles.image}/>
                ) : (
                    <></>
                )
            }
            <Text style={[styles.text ,title === "Create wallet" ? {fontSize: 14} : {fontSize: 16}]}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
    },
    text: {
        color: '#242A32',
        fontWeight: '600',
    },
    image: {
        marginEnd: 10,
    }
});
