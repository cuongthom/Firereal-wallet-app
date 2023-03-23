import { useState } from "react";
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { st } from "../../config/Constant";
import InputComponent from "../input/InputComponent";
import ButtonLarge from "../button/ButtonLarge";
import { useConnection } from "../../config/redux/connection";

export default function AddNewRecipient() {
    const { onSetVisibleModalHalfScreen } = useConnection();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isFocusedPhoneInput, setIsFocusedPhoneInput] = useState(false);
    const [save, setSave] = useState(false);
    const handleSave = () => {
        setSave(!save);
    };

    const handleCloseModal = () => {
        onSetVisibleModalHalfScreen(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={st.h1Bold}>New Recepient</Text>
                <Pressable onPress={handleCloseModal}>
                    <Image
                        source={require("../../assets/new-image/close-icon.png")}
                    />
                </Pressable>
            </View>
            <View style={styles.body}>
                <Text style={styles.textTitle}>Full Name</Text>
                <InputComponent
                    placeholder={"John Doe"}
                    placeholderTextColor={"#C1C4CD"}
                    paddingHorizontal={16}
                    paddingVertical={14}
                    value={name}
                    setValue={setName}
                    styleProps={st.mb3}
                />
                <Text style={styles.textTitle}>Phone Number</Text>
                <View style={[styles.phoneInputBox]}>
                    <View style={[styles.areaCode]}>
                        <Image
                            source={require("../../assets/new-image/singapore.png")}
                            style={{ width: 24, height: 24 }}
                        />
                        <Text style={st.h1}>+65</Text>
                    </View>
                    <View
                        style={[
                            styles.phoneInput,
                            {
                                borderColor: isFocusedPhoneInput
                                    ? "#1F212D"
                                    : "#E8EAED",
                            },
                        ]}
                        onFocus={() => setIsFocusedPhoneInput(true)}
                        onBlur={() => setIsFocusedPhoneInput(false)}>
                        <TextInput
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                            placeholder={"0000 0000 00"}
                            placeholderTextColor={"#C1C4CD"}
                            keyboardType={"numeric"}
                            inputMode={"numeric"}
                        />
                        {phone !== "" && (
                            <TouchableOpacity onPress={() => setPhone("")}>
                                <Image
                                    source={require("../../assets/new-image/close-icon.png")}
                                    style={{ width: 20, height: 20 }}
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                <View style={[st.flexRow, st.justifySpaceBetween]}>
                    <Text style={st.h2Bold}>Save to transfer list</Text>
                    <Pressable onPress={handleSave}>
                        <Image
                            source={
                                save
                                    ? require("../../assets/new-image/enabled-toggle-light-button.png")
                                    : require("../../assets/new-image/disabled-toggle-light-button.png")
                            }
                        />
                    </Pressable>
                </View>
            </View>
            <View style={styles.footer}>
                <ButtonLarge
                    text="Add Recipient"
                    backgroundColor="#1F212D"
                    textColor="#FFFFFF"
                    lineHeight={22}
                    paddingVertical={14}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
    },
    header: {
        flex: 0.1,
        flexDirection: "row",
        paddingHorizontal: 24,
        paddingBottom: 15,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#E8EAED",
    },
    body: {
        flex: 0.7,
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    textTitle: {
        fontSize: 14,
        lineHeight: 19,
        fontWeight: "700",
        letterSpacing: 0.2,
        marginBottom: 8,
    },
    phoneInputBox: {
        flexDirection: "row",
        borderRadius: 12,
        marginBottom: 30,
    },
    areaCode: {
        flex: 0.2,
        paddingHorizontal: 16,
        paddingVertical: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderStartWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#E8EAED",
        borderTopStartRadius: 12,
        borderBottomStartRadius: 12,
    },
    phoneInput: {
        flex: 0.8,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "400",
        letterSpacing: 0.2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    footer: {
        flex: 0.2,
        paddingHorizontal: 24,
        justifyContent: "flex-end",
    },
});
