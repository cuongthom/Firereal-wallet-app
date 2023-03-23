import { ScrollView, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import SelectCountry from "../../screens/layout/small-modal/SelectCountry";
import { useConnection } from "../../config/redux/connection";
import AddNewRecipient from "../component/AddNewRecipient";
import SelectRecipient from "../component/SelectRecipient";

export default function ModalSmall() {
    const {
        connection,
        onSetVisibleModalHalfScreen,
        onSetVisibleModalFullScreen,
        onSetCurrentModalFull,
        onSetCurrentModalHalf,
    } = useConnection();
    const { windowHeight, visibleModalHalfScreen, currentModalHalf } =
        connection;

    const closeModal = () => {
        onSetVisibleModalHalfScreen(false);
        onSetVisibleModalFullScreen(false);
        onSetCurrentModalFull(0);
        onSetCurrentModalHalf(0);
    };

    return (
        <Modal
            isVisible={visibleModalHalfScreen}
            onBackdropPress={closeModal}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            style={styles.bottomModal}>
            <View style={[styles.modalContent, { height: windowHeight / 1.5 }]}>
                {currentModalHalf === 0 ? (
                    <SelectCountry />
                ) : currentModalHalf === 1 ? (
                    <AddNewRecipient />
                ) : currentModalHalf === 2 ? (
                    <SelectRecipient />
                ) : null}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    modalContent: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    blockChains: {
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)",
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },
    customViewBlock: {
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },
});
