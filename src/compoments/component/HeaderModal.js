import {Pressable, StyleSheet, Text, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonCloseModal from "../button/ButtonCloseModal";
import {useConnection} from "../../config/redux/connection";

export default function HeaderModal({text, backIcon = true, border = true}) {
    const {connection, onSetCurrentModalFull, onSetHistoryOpenModal, onSetVisibleModalHalfScreen, onSetVisibleModalFullScreen} = useConnection();
    const {historyOpenModal} = connection;

    const onPress = () => {
        if (!historyOpenModal.length) {
            closeModal();
        } else {
            const newHistoryOpenModal = historyOpenModal.filter((element, index) => index < historyOpenModal.length - 1);
            onSetCurrentModalFull(newHistoryOpenModal[newHistoryOpenModal.length - 1]);
            onSetHistoryOpenModal(newHistoryOpenModal);
        }
    }

    const closeModal = () => {
        onSetCurrentModalFull(0);
        onSetVisibleModalHalfScreen(false);
        onSetVisibleModalFullScreen(false);
    }

    return (
        <View style={[border ? styles.border : null]}>
            {
                backIcon ? (
                    <Pressable onPress={onPress} style={styles.back}>
                        <MaterialCommunityIcons color={"#6C727F"} name="chevron-left" size={30}/>
                    </Pressable>
                ) : (
                    <></>
                )
            }
            <View style={{alignItems: 'center', alignContent: 'center'}}>
                <Text style={styles.text}>{text}</Text>
            </View>
            <ButtonCloseModal/>
        </View>
    )
}

const styles = StyleSheet.create({
    back: {
        position: 'absolute',
        top: 20,
        left: 15,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 20
    },
    buttonClose: {
        position: 'absolute',
        top: 20,
        right: 15,
    },
    border: {
        borderBottomWidth: 1,
        borderColor: '#E5E6EB',
        paddingBottom: 20
    }
});
