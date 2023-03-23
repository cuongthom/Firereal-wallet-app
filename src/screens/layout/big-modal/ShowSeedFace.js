import HeaderModal from "../../../compoments/component/HeaderModal";
import {Pressable, StyleSheet, Text, View} from "react-native";
import ButtonLarge from "../../../compoments/button/ButtonLarge";
import ListSeedFace from "../../../compoments/component/ListSeedFace";
import {useEffect, useState} from "react";
import * as Clipboard from 'expo-clipboard';
import ToastAndroid from "react-native/Libraries/Components/ToastAndroid/ToastAndroid";
import {seedFace} from "../../../config/Constant";
import {useConnection} from "../../../config/redux/connection";

export default function ShowSeedFace() {
    const [leftSeedFace, setLeftSeedFace] = useState([]);
    const [rightSeedFace, setRightSeedFace] = useState([]);
    const {connection, onSetCurrentModalFull, onSetHistoryOpenModal} = useConnection();

    const {historyOpenModal} = connection

    useEffect(() => {
        setLeftSeedFace(seedFace.slice(0, 6));
        setRightSeedFace(seedFace.slice(6, 12));
    }, [seedFace])

    const onNext = () => {
        onSetCurrentModalFull(1);
        onSetHistoryOpenModal([...historyOpenModal, 5]);
    }

    const onCopySeedFace = async () => {
        const seedFaceString = seedFace.toString().replace(/,/g, " ");
        await Clipboard.setStringAsync(seedFaceString);
        ToastAndroid.show('Seed face copied to clipboard', ToastAndroid.SHORT);
    }

    return (
        <>
            <HeaderModal border={false}/>
            <View style={styles.container}>
                <View style={styles.blockTitle}>
                    <Text style={styles.title}>👀 For Your Eyes Only</Text>
                    <View style={styles.blockDes}>
                        <Text style={styles.des}>Never share the recovery phrase. Anyone with</Text>
                        <Text style={styles.des}>these words will have full access to your wallet.</Text>
                    </View>
                </View>
                <View style={styles.blockShowSeedFace}>
                    <Text style={styles.textCopy}>Click Below to Copy↓</Text>
                    <Pressable style={styles.viewDisplaySeedFace} onPress={onCopySeedFace}>
                        <View style={styles.columnSeed}>
                            <View>
                                <ListSeedFace data={leftSeedFace} indexStart={1}/>
                            </View>
                        </View>
                        <View style={styles.columnSeed}>
                            <View>
                                <ListSeedFace data={rightSeedFace} indexStart={6}/>
                            </View>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.button}>
                    <ButtonLarge
                        onPress={onNext}
                        text={"Reveal Recovery Phase"}
                        width={"85%"}
                        paddingVertical={15}
                        fontSize={14}
                        elevation={0}
                    />
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36
    },
    blockDes: {
        marginTop: '2%',
        alignItems: 'center',
    },
    des: {
      color: '#828282'
    },
    textCopy: {
        fontSize: 14,
        fontWeight: "600",
        paddingVertical: 10,
    },
    blockTitle: {
        alignItems: 'center',
        flexGrow: 0.5,
        justifyContent: 'center',
    },
    button: {
        flexGrow: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    blockShowSeedFace: {
        flexGrow: 2,
        alignItems: 'center',
    },
    viewDisplaySeedFace: {
        width: '85%',
        height: '50%',
        backgroundColor:'#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#828282',
        flexDirection: 'row',
    },
    columnSeed: {
        flexBasis: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
