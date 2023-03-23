import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function ListChooseCard() {
    const [card, setCard] = useState(0);
    const menu = [
        {
            imageSelect: require("../../assets/new-image/passport-card-select.png"),
            image: require("../../assets/new-image/passport-card.png"),
        },
        {
            imageSelect: require("../../assets/new-image/id-card-select.png"),
            image: require("../../assets/new-image/id-card.png"),
        },
        {
            imageSelect: require("../../assets/new-image/driver-card-select.png"),
            image: require("../../assets/new-image/driver-card.png"),
        },
    ];

    return (
        <View style={styles.container}>
            {menu.map((item, index) => (
                <Pressable key={index} onPress={() => setCard(index)}>
                    {card === index ? (
                        <View style={styles.chooseCardItem}>
                            <Image source={item.imageSelect} />
                            <Image
                                source={require("../../assets/new-image/checklist-choose.png")}
                                style={styles.checkIcon}
                            />
                        </View>
                    ) : (
                        <View style={styles.cardItem}>
                            <Image source={item.image} />
                        </View>
                    )}
                </Pressable>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
    },
    cardItem: {
        width: 95,
        height: 95,
        borderRadius: 12,
        borderColor: "#E8EAED",
        borderWidth: 1,
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center",
    },
    chooseCardItem: {
        width: 95,
        height: 95,
        borderRadius: 12,
        borderColor: "#43C621",
        borderWidth: 1,
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#43C621",
        position: "relative",
    },
    checkIcon: {
        position: "absolute",
        top: -10,
        right: -10,
        borderColor: "#fff",
        borderWidth: 1.5,
        borderStyle: "solid",
        borderRadius: 12,
    },
});
