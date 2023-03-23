import { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Pressable,
    TextInput,
} from "react-native";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import InputComponent from "../../compoments/input/InputComponent";
import { st,darkMode } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";

export default function InputCodeScreen({ navigation }) {
    const {connection} = useConnection()
    const [codeNumber, setCodeNumber] = useState("");
    const [notes, setNotes] = useState("");
    const [isFocusedCodeNumber, setIsFocusedCodeNumber] = useState(false);
    const [isFocusedNotes, setIsFocusedNotes] = useState(false);
    return (
        <View style={[connection.DarkMode === false ? styles.container : darkMode.bgDarkContainer]}>
            <View style={[st.bgWhite,styles.header]}>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={styles.backIcon}>
                    <Image
                        source={require("../../assets/new-image/vector-left.png")}
                    />
                </Pressable>
                <Text
                    style={[
                        st.fs16,
                        st.fw700,
                        st.lh22,
                        st.ls2,
                        { color: "#061237" },
                    ]}>
                    Input Code
                </Text>
            </View>
            <View style={[st.pt2,styles.body]}>
                <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fw700, st.fs14, st.lh19, st.ls2]}>
                    Code payment
                </Text>
                <InputComponent
                    value={codeNumber}
                    setValue={setCodeNumber}
                    placeholder="Code number"
                    style={styles.numberInput}
                    keyboardType="numeric"
                />
                <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fs14, st.fw700, st.lh19, st.ls2]}>
                    Add notes
                </Text>
                <InputComponent
                    value={notes}
                    setValue={setNotes}
                    placeholder="Add notes"
                    style={styles.noteInput}
                    multiline={true}
                    numberOfLines={5}
                />
            </View>
            <View style={styles.footer}>
                <ButtonLarge onPress={() => {}} text="Confirm" paddingVertical={14} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flex: 0.1,
        paddingTop: 30,
        flexDirection: "row",
        justifyContent: "center",
        position: "relative",
    },
    backIcon: {
        position: "absolute",
        left: 24,
        top: 30,
    },
    body: {
        flex: 0.7,
        paddingHorizontal: 24,
        marginBottom: 30,
    },
    numberInput: {
        marginTop: 8,
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 24,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 1,
    },
    noteInput: {
        marginTop: 8,
        borderRadius: 12,
        fontSize: 16,
        lineHeight: 22,
        textAlignVertical: "top",
        color: "#C1C4CD",
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    footer: {
        flex: 0.2,
        paddingHorizontal: 24,
        marginBottom: 30,
        justifyContent: "flex-end",
    },
});
