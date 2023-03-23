import {StyleSheet, View, TextInput} from "react-native";
import {useEffect, useState} from "react";
import ButtonLarge from "../../../compoments/button/ButtonLarge";
import ButtonAndIcon from "../../../compoments/button/ButtonAndIcon";
import * as Clipboard from 'expo-clipboard';
import HeaderModal from "../../../compoments/component/HeaderModal";
import {useConnection} from "../../../config/redux/connection";



export default function AddExistingWallet() {
    const [seedFace, setSeedFace] = useState("");
    const {onSetCurrentModalFull, onSetHistoryOpenModal, connection} = useConnection();
    const {historyOpenModal} = connection;

    const onPaste = async () => {
        setSeedFace(await Clipboard.getStringAsync());
    }

    const onImport = () => {
        onSetCurrentModalFull(2);

        const history =  [...historyOpenModal, 1];
        onSetHistoryOpenModal(history);
    }

    return (
        <>
            <HeaderModal text={"Add Existing Wallet"}/>
            <View style={styles.container}>
                <View style={styles.blockInput}>
                    <TextInput
                        multiline
                        numberOfLines={17}
                        onChangeText={(userName) => setSeedFace(userName)}
                        placeholder={'Recovery Phrase, Private Key, Address'}
                        style={styles.input}
                        value={seedFace}
                    />
                    <ButtonAndIcon iconColor={"#828282"} textColor={"#828282"} icon={"checkbox-multiple-blank"} onPress={onPaste}/>
                </View>
                <View style={styles.blockRestore}>
                    <ButtonAndIcon fontSize={20} paddingStart={0} text={"Restore with Fireal Wallet"} iconStart={false} icon={"chevron-right"} iconMrTop={4}/>
                </View>
                <View style={styles.blockButton}>
                    {
                        seedFace.length > 0 ? (
                            <ButtonLarge
                                onPress={onImport}
                                text={"Import"}
                                width={"80%"}
                                paddingVertical={15}
                                fontSize={20}
                                elevation={0}
                            />
                        ) : (
                            <ButtonLarge
                                text={"Import"}
                                width={"80%"}
                                paddingVertical={15}
                                fontSize={20}
                                backgroundColor={"#F4F4F6"}
                                textColor={"#9EA3AE"}
                                elevation={0}
                            />
                        )
                    }
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%',
    },
    blockInput: {
        flexGrow: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blockRestore: {
        flexGrow: 1,
        alignItems: 'center',
    },
    blockButton: {
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#E5E6EB',
        width: '100%',
        flexGrow: 3,
        paddingVertical: 20,
    },
    input: {
        width: "85%",
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
});
