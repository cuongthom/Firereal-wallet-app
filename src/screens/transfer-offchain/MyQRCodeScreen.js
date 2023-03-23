import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { st } from "../../config/Constant";
import { navigate } from "../../config/navigator/RootNavigation";
export default function MyQRCodeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../../assets/new-image/vector-left.png")}
                    />
                </Pressable>
            </View>
            <View style={styles.body}>
                <View style={styles.topModal}>
                    <Text
                        style={[
                            st.fw700,
                            st.fs16,
                            st.lh22,
                            st.ls2,
                            { color: "#061237" },
                        ]}>
                        Payment
                    </Text>
                    <Text
                        style={[
                            st.fw700,
                            st.fs14,
                            st.lh19,
                            st.ls2,
                            st.textBlueLight,
                        ]}>
                        Input Code
                    </Text>
                </View>
                <View style={styles.selectBox}>
                    <Pressable
                        onPress={() => navigate("ScanQRCode")}
                        style={styles.unselectedButton}>
                        <View>
                            <Text
                                style={[
                                    st.fw400,
                                    st.fs12,
                                    st.lh16,
                                    st.ls3,
                                    { color: "#83899B" },
                                ]}>
                                Scan QR
                            </Text>
                        </View>
                    </Pressable>
                    <View style={styles.selectedButton}>
                        <Text
                            style={[
                                st.fw700,
                                st.fs12,
                                st.lh16,
                                st.ls3,
                                { color: "#1F212D" },
                            ]}>
                            My QR code
                        </Text>
                    </View>
                </View>
                <View style={styles.description}>
                    <Text
                        style={[
                            st.fw400,
                            st.fs14,
                            st.lh19,
                            st.ls2,
                            { color: "#6A7187" },
                        ]}>
                        Show this code to the cashier to complete the payment.{" "}
                        <Text style={[st.fw700, st.textBlueLight]}>
                            Click how to use it
                        </Text>
                    </Text>
                </View>
                <View style={styles.qrCode}>
                    <Image
                        source={require("../../assets/new-image/qr-code.png")}
                    />
                </View>
                <View style={styles.footer}>
                    <Image
                        source={require("../../assets/new-image/warning-icon.png")}
                    />
                    <Text
                        style={[
                            {
                                color: "#111827",
                                textAlign: "center",
                                marginTop: 10,
                            },
                            st.fw400,
                            st.fs12,
                            st.lh16,
                            st.ls3,
                        ]}>
                        This is a single-use code for your use only. Get a new
                        code each time you pay with smartpay
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F9FC",
    },
    header: {
        flex: 0.1,
        paddingStart: 30,
        paddingTop: 30,
    },
    body: {
        flex: 0.9,
        backgroundColor: "#fff",
        paddingHorizontal: 24,
        paddingVertical: 25,
        borderRadius: 32,
        marginHorizontal: 16,
        marginBottom: 30,
    },
    topModal: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    selectBox: {
        marginTop: 20,
        backgroundColor: "#F7F9FC",
        borderRadius: 12,
        padding: 4,
        flexDirection: "row",
    },
    selectedButton: {
        flex: 0.5,
        backgroundColor: "#fff",
        borderRadius: 8,
        boxShadow: "1px 2px 12px rgba(17, 24, 39, 0.03)",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
    },
    unselectedButton: {
        flex: 0.5,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        backgroundColor: "transparent",
    },
    description: {
        marginTop: 28,
    },
    qrCode: {
        marginTop: 30,
        alignItems: "center",
    },
    footer: {
        justifyContent: "flex-end",
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 3,
    },
});
