import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { st,darkMode } from "../../config/Constant";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import { useConnection } from "../../config/redux/connection";

export default function TopupBalanceConfirmScreen({ navigation }) {
    const {connection} = useConnection()
    const handleConfirm = () => {
        navigation.navigate("TopupBalanceSuccess");
    };
    const handleGoback = () => {
        navigation.goBack();
    };
    return (
        <View style={[connection.DarkMode === false ? styles.container : darkMode.bgDarkContainer]}>
            <View style={styles.header}>
                <Pressable style={styles.gobackIcon} onPress={handleGoback}>
                    <Image style={[st.bgWhite]}
                        source={require("../../assets/new-image/vector-left.png")}
                    />
                </Pressable>
                <Text style={[st.h1Bold]}>Top Up Balance</Text>
            </View>
            <View style={[st.pt2,styles.body]}>
                <View style={styles.content}>
                    <Image
                        source={require("../../assets/new-image/usd-icon.png")}
                        style={{ alignSelf: "center" }}
                    />
                    <Text style={styles.balance}>$590.00</Text>
                    <Text
                        style={[
                            st.p,
                            {
                                color: "#83899B",
                                marginTop: 8,
                                textAlign: "center",
                            },
                        ]}>
                        Top up balance (USD)
                    </Text>
                    <View style={[st.mt2]}>
                        {/* Topup ID */}
                        <View style={[styles.infor, { borderBottomWidth: 1 }]}>
                            <Text style={[st.h2, { color: "#83899B" }]}>
                                Top up ID
                            </Text>
                            <Text
                                style={[
                                    st.fw600,
                                    st.fs14,
                                    st.lh19,
                                    st.ls2,
                                    { color: "#1F212D" },
                                ]}>
                                000985643XXX
                            </Text>
                        </View>
                        {/* Topup amount */}
                        <View style={[styles.infor, { borderBottomWidth: 1 }]}>
                            <Text style={[st.h2, { color: "#83899B" }]}>
                                Top up Amount
                            </Text>
                            <Text
                                style={[
                                    st.fw600,
                                    st.fs14,
                                    st.lh19,
                                    st.ls2,
                                    { color: "#1F212D" },
                                ]}>
                                $590.00
                            </Text>
                        </View>
                        {/* Topup fee */}
                        <View style={[styles.infor, { borderBottomWidth: 1 }]}>
                            <Text style={[st.h2, { color: "#83899B" }]}>
                                Top up Fee
                            </Text>
                            <Text
                                style={[
                                    st.fw600,
                                    st.fs14,
                                    st.lh19,
                                    st.ls2,
                                    { color: "#12A58C" },
                                ]}>
                                Free
                            </Text>
                        </View>
                        {/* Payment method */}
                        <View style={[styles.infor, { borderBottomWidth: 1 }]}>
                            <Text style={[st.h2, { color: "#83899B" }]}>
                                Payment method
                            </Text>
                            <Text
                                style={[
                                    st.fw600,
                                    st.fs14,
                                    st.lh19,
                                    st.ls2,
                                    { color: "#1F212D" },
                                ]}>
                                Visa
                            </Text>
                        </View>
                        {/* Time */}
                        <View style={[styles.infor, { borderBottomWidth: 1 }]}>
                            <Text style={[st.h2, { color: "#83899B" }]}>
                                Time
                            </Text>
                            <Text
                                style={[
                                    st.fw600,
                                    st.fs14,
                                    st.lh19,
                                    st.ls2,
                                    { color: "#1F212D" },
                                ]}>
                                Dec 17, 9:00 AM
                            </Text>
                        </View>
                        {/* Total amount */}
                        <View style={styles.infor}>
                            <Text style={[st.h2, { color: "#83899B" }]}>
                                Total amount
                            </Text>
                            <Text
                                style={[
                                    st.fw600,
                                    st.fs14,
                                    st.lh19,
                                    st.ls2,
                                    { color: "#1F212D" },
                                ]}>
                                $590.00
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <ButtonLarge text="Confirm" onPress={handleConfirm} paddingVertical={14} />
                <Text
                    style={[
                        st.h1Bold,
                        {
                            textAlign: "center",
                            marginTop: 15,
                            color: "#1355FF",
                        },
                    ]}>
                    Cancel Top Up
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    header: {
        flex: 0.1,
        position: "relative",
        paddingHorizontal: 24,
        paddingTop: 30,
        alignItems: "center",
        backgroundColor:"white"
    },
    gobackIcon: {
        position: "absolute",
        left: 24,
        top: 30,
    },
    body: {
        flex: 0.7,
        paddingHorizontal: 24,
        justifyContent: "flex-start",
    },
    content: {
        backgroundColor: "#fff",
        borderRadius: 24,
        paddingTop: 30,
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    balance: {
        fontSize: 20,
        fontWeight: "700",
        lineHeight: 27,
        marginTop: 15,
        textAlign: "center",
    },
    infor: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomColor: "#E8EAED",
        marginBottom: 4,
    },
    footer: {
        flex: 0.2,
        justifyContent: "flex-end",
        paddingHorizontal: 24,
        paddingBottom: 30,
    },
});
