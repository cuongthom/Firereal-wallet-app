import { Image, StyleSheet, Text, View } from "react-native";

export default function ScanQRCodeComponent() {
    return (
        <View style={styles.container}>
            <View style={styles.listContact}>
                <View style={styles.contact}>
                    <Image
                        source={require("../../assets/new-image/avatar-1.png")}
                        style={styles.avatar}
                    />
                    <View style={styles.contactDetail}>
                        <Text style={styles.nameContact}>Janetta Rotolo</Text>
                        <Text style={styles.phoneContact}>(229) 555-0109</Text>
                    </View>
                </View>
                <View style={styles.contact}>
                    <Image
                        source={require("../../assets/new-image/avatar-1.png")}
                        style={styles.avatar}
                    />
                    <View style={styles.contactDetail}>
                        <Text style={styles.nameContact}>Janetta Rotolo</Text>
                        <Text style={styles.phoneContact}>(229) 555-0109</Text>
                    </View>
                </View>
                <View style={styles.contact}>
                    <Image
                        source={require("../../assets/new-image/avatar-1.png")}
                        style={styles.avatar}
                    />
                    <View style={styles.contactDetail}>
                        <Text style={styles.nameContact}>Janetta Rotolo</Text>
                        <Text style={styles.phoneContact}>(229) 555-0109</Text>
                    </View>
                </View>
                <View style={styles.contact}>
                    <Image
                        source={require("../../assets/new-image/avatar-1.png")}
                        style={styles.avatar}
                    />
                    <View style={styles.contactDetail}>
                        <Text style={styles.nameContact}>Janetta Rotolo</Text>
                        <Text style={styles.phoneContact}>(229) 555-0109</Text>
                    </View>
                </View>
                <View style={styles.contact}>
                    <Image
                        source={require("../../assets/new-image/avatar-1.png")}
                        style={styles.avatar}
                    />
                    <View style={styles.contactDetail}>
                        <Text style={styles.nameContact}>Janetta Rotolo</Text>
                        <Text style={styles.phoneContact}>(229) 555-0109</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContact: {
        marginTop: 20,
        marginHorizontal: 24,
        flexDirection: "column",
    },
    contact: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 1000,
        borderWidth: 1,
        borderColor: "#000",
    },
    contactDetail: {
        marginLeft: 10,
        flexDirection: "column",
        alignItems: "center",
    },
    nameContact: {
        color: "#061237",
        marginBottom: 2,
        fontWeight: "700",
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.3,
    },
    phoneContact: {
        color: "#6A7187",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.3,
    },
});
