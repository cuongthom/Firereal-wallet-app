import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { st } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";

export default function ListRecipient() {
    const [selectRecipient, setSelectRecipient] = useState(0);
    const { onSetVisibleModalHalfScreen, onSetCurrentModalHalf,connection } =
        useConnection();

    const listRecipient = [
        {
            name: "Mitchell A.",
            avatar: require("../../assets/new-image/avatar-1.png"),
        },
        {
            name: "Brittni L.",
            avatar: require("../../assets/new-image/avatar-2.png"),
        },
        {
            name: "Janetta R.",
            avatar: require("../../assets/new-image/avatar-3.png"),
        },
    ];
    const handleOpenAddRecipient = () => {
        onSetCurrentModalHalf(1);
        onSetVisibleModalHalfScreen(true);
    };

    const handleOpenSelectRecipient = () => {
        onSetCurrentModalHalf(2);
        onSetVisibleModalHalfScreen(true);
    };
    return (
        <View>
            <View
                style={[
                    st.mt2,
                    st.flexRow,
                    st.justifySpaceBetween,
                    { paddingHorizontal: 4 },
                ]}>
                <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw600, st.fs14, st.lh19, st.ls2]}>
                    Recipient
                </Text>
                <Pressable onPress={handleOpenSelectRecipient}>
                    <Text style={[st.h2, { color: "#43C621" }]}>See All</Text>
                </Pressable>
            </View>
            <View style={styles.listRecipient}>
                {/* add recipient */}
                <Pressable style={styles.item} onPress={handleOpenAddRecipient}>
                    <View
                        style={[connection.DarkMode === false ? null : st.bgWhite,{
                            marginBottom: 10,
                            borderWidth: 1,
                            borderStyle: "dashed",
                            width: 50,
                            height: 50,
                            borderRadius: 1000,
                            alignItems: "center",
                            justifyContent: "center",
                            
                        }]}>
                        <Image
                            source={require("../../assets/new-image/add-outline.png")}
                        />
                    </View>
                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.p]}>Add New</Text>
                </Pressable>

                {/* list recipient */}
                {listRecipient.map((item, index) => {
                    return (
                        <Pressable
                            style={styles.item}
                            key={index}
                            onPress={() => setSelectRecipient(index)}>
                            <Image
                                source={item.avatar}
                                style={
                                    index === selectRecipient
                                        ? styles.selectAvatar
                                        : styles.avatar
                                }
                            />
                            <Text
                                style={[connection.DarkMode === false ? st.textBlack : st.textWhite,
                                    index === selectRecipient
                                        ? styles.selectName
                                        : styles.name
                                ]}>
                                {item.name}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listRecipient: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 20,
    },
    item: {
        width: "22%",
        alignItems: "center",
        justifyContent: "space-between",
    },
    avatar: {
        marginBottom: 10,
        width: 50,
        height: 50,
        borderRadius: 1000,
    },
    selectAvatar: {
        marginBottom: 10,
        width: 50,
        height: 50,
        borderRadius: 1000,
        borderWidth: 2,
        borderColor: "#A1E290",
    },
    name: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.3,
        fontWeight: "600",
    },
    selectName: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.3,
        fontWeight: "600",
        color: "#43C621",
    },
});
