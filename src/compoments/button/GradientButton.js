import { LinearGradient } from 'expo-linear-gradient';
import {StyleSheet, Text} from "react-native";

export default function GradientButton(
    {
        gradientColors = [
            "rgba(41, 201, 0, 0.15) -4.71%",
            "rgba(41, 201, 0, 0.15) -4.71%",
        ],
        text
    }
) {
    return (
        <LinearGradient
            colors={gradientColors}
            style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    text: {
        color: '#43C621',
        fontSize: 25,
    },
    button: {
        alignItems: 'center',
        padding: 10,
        borderColor: '#43C621',
        borderWidth: 1,
        borderRadius: 10,
    }
});
