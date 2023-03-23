import { useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { st } from "../../config/Constant";
import ButtonLarge from "../button/ButtonLarge";
import ViewBorder from "../component/ViewBorder";
import { useConnection } from "../../config/redux/connection";
import Recipient from "./Recipient";

export default function SelectRecipient() {
    const { onSetVisibleModalHalfScreen } = useConnection();
    const [searchInput, setSearchInput] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const handleCloseModal = () => {
        onSetVisibleModalHalfScreen(false);
    };
    const [listContact, setListContact] = useState([
        {
            name: "Mitchell Aneta",
            phone: "(229) 555-0109",
            selected: true,
            avatar: require("../../assets/new-image/avatar-3.png"),
        },
        {
            name: "Brittni Lando",
            phone: "(302) 555-0107",
            selected: false,
            avatar: require("../../assets/new-image/avatar-2.png"),
        },
        {
            name: "Janetta Rotolo",
            phone: "(229) 555-0109",
            selected: false,
            avatar: require("../../assets/new-image/avatar-1.png"),
        },
        {
            name: "Janetta Rotolo",
            phone: "(229) 555-0109",
            selected: false,
            avatar: require("../../assets/new-image/avatar-1.png"),
        },
        {
            name: "Janetta Rotolo",
            phone: "(229) 555-0109",
            selected: false,
            avatar: require("../../assets/new-image/avatar-1.png"),
        },
    ]);
    const handleSelectRecipient = (index) => {
        const newListContact = [...listContact];
        const recipientIndex = listContact.findIndex(
            (item) => item.selected === true
        );
        if (recipientIndex !== -1) {
            newListContact[recipientIndex].selected = false;
        }
        if (recipientIndex === index) {
            newListContact[index].selected = false;
            setListContact(newListContact);
        } else {
            newListContact[index].selected = !newListContact[index].selected;
        }
        setListContact(newListContact);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={st.h1Bold}>Choose Recipient</Text>
                <Pressable onPress={handleCloseModal}>
                    <Image
                        source={require("../../assets/new-image/close-icon.png")}
                    />
                </Pressable>
            </View>
            <View style={styles.body}>
                <ViewBorder
                    paddingHorizontal={16}
                    paddingVertical={12}
                    styleProps={[
                        st.flexRow,
                        st.alignItemCenter,
                        st.justifySpaceBetween,
                        st.mb2,
                        {
                            borderColor: isFocused ? "#1F212D" : "#E8EAED",
                        },
                    ]}>
                    <View style={[st.flexRow, st.alignItemCenter]}>
                        <Image
                            source={require("../../assets/new-image/contact.png")}
                            style={{ marginRight: 10 }}
                        />
                        <TextInput
                            placeholder="Search phonebook"
                            value={searchInput}
                            onChangeText={(text) => setSearchInput(text)}
                            editable
                            underlineColorAndroid="transparent"
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    </View>
                    {searchInput !== "" && (
                        <Pressable
                            onPress={() => setSearchInput("")}
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "flex-end",
                            }}>
                            <Image
                                source={require("../../assets/new-image/close-icon.png")}
                                style={{ width: 20, height: 20 }}
                            />
                        </Pressable>
                    )}
                </ViewBorder>
                <Text style={[st.h2, st.fw600, st.mb2]}>Phonebook</Text>
                <ScrollView style={{ height: "100%" }}>
                    {listContact.map((item, index) => {
                        return (
                            <Pressable
                                key={index}
                                onPress={() => handleSelectRecipient(index)}>
                                <Recipient
                                    name={item.name}
                                    phone={item.phone}
                                    selected={item.selected}
                                    avatar={item.avatar}
                                />
                            </Pressable>
                        );
                    })}
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <ButtonLarge
                    text="Confirm"
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
        flex: 0.75,
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
    footer: {
        flex: 0.2,
        paddingHorizontal: 24,
        justifyContent: "flex-end",
    },
});
