import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { darkMode,st } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";
export default function ListChooseReason() {
    const {connection} = useConnection()
    const [reason, setReason] = useState(0);
    const handleChooseReason = (index) => {
        setReason(index);
    };
    const menu = [
        {
            title: "Everyday Spending",
        },
        {
            title: "Short-terms Saving",
        },
        {
            title: "Long-terms Saving",
        },
        {
            title: "Transfer Security Funds",
        },
    ];
    return (
        <View style={styles.listItems}>
            {menu.map((item, index) => (
                <Pressable
                    key={index}
                    onPress={() => handleChooseReason(index)}>
                    {reason === index ? (
                        <View style={styles.itemChoose}>
                            <Text style={[connection.DarkMode === false ? { color: "#43C621" } : st.textWhite,]}>
                                {item.title}
                            </Text>
                            <Image
                                source={require("../../assets/new-image/checklist-choose.png")}
                                style={styles.image}
                            />
                        </View>
                    ) : (
                        <View style={styles.item}>
                            <Text style={[connection.DarkMode === false ? null : st.textWhite,]}>{item.title}</Text>
                            <Image
                                source={require("../../assets/new-image/checklist.png")}
                                style={styles.image}
                            />
                        </View>
                    )}
                </Pressable>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    listItems: {
        gap: 16,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.2,
        alignSelf: "stretch",
        borderWidth: 1,
        borderColor: "#E8EAED",
        borderStyle: "solid",
        borderRadius: 14,
        marginBottom: 16,
    },
    itemChoose: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.2,
        alignSelf: "stretch",
        borderWidth: 1,
        borderColor: "#43C621",
        borderStyle: "solid",
        borderRadius: 14,
        marginBottom: 16,
    },
});
