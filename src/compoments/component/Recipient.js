import { Image, StyleSheet, Text, View } from "react-native";
import { st } from "../../config/Constant";
import ViewBorder from "./ViewBorder";

export default function Recipient({ avatar, name, phone, selected }) {
    return (
        <ViewBorder
            paddingHorizontal={16}
            paddingVertical={16}
            styleProps={[
                st.flexRow,
                st.alignItemCenter,
                st.justifySpaceBetween,
                st.mb2,
                {
                    borderColor: selected ? "#43C621" : "#E8EAED",
                },
            ]}>
            <View style={[st.flexRow, st.alignItemCenter]}>
                <Image source={avatar} style={styles.image} />
                <View style={st.justifySpaceAround}>
                    <Text style={st.pBold}>{name}</Text>
                    <Text style={st.p}>{phone}</Text>
                </View>
            </View>
            {selected ? (
                <View style={styles.selectIcon}>
                    <View style={styles.tickIcon}></View>
                </View>
            ) : (
                <View style={styles.icon}></View>
            )}
        </ViewBorder>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        borderRadius: 1000,
        borderColor: "#E8EAED",
        borderWidth: 1,
    },
    selectIcon: {
        width: 20,
        height: 20,
        borderRadius: 1000,
        borderColor: "#43C621",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
    },
    tickIcon: {
        width: "100%",
        height: "100%",
        backgroundColor: "#43C621",
        borderRadius: 1000,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 1000,
        marginRight: 16,
    },
});
