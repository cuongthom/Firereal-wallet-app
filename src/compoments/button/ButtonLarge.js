import {Pressable, Text} from "react-native";

export default function ButtonLarge(
    {
        onPress = () => {},
        text,
        textColor = "#ffffff",
        backgroundColor = "#43C621",
        marginStart = 0,
        paddingVertical = 10,
        paddingHorizontal = 0,
        fontSize = 16,
        elevation = 3,
        borderRadius = 10,
        lineHeight = 21,
        width = "auto",
    }
) {
    return (
        <Pressable
            style={{
                paddingVertical,
                paddingHorizontal,
                borderRadius,
                elevation,
                backgroundColor,
                marginStart,
                width,
                alignItems: "center",
                justifyContent: "center",
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    fontSize,
                    lineHeight,
                    fontWeight: 'bold',
                    letterSpacing: 0.25,
                    color: textColor,
                }}>
                {text}
            </Text>
        </Pressable>
    );
}
