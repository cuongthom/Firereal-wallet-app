import Modal from 'react-native-modal';
import {StyleSheet, View, Keyboard} from "react-native";
import {useEffect, useState} from "react";
import CreateWallet from "../../screens/layout/big-modal/CreateWallet";
import AddExistingWallet from "../../screens/layout/big-modal/AddExistingWallet";
import PinWallet from "../../screens/layout/big-modal/PinWallet";
import Register from "../../screens/layout/big-modal/Register";
import Attention from "../../screens/layout/big-modal/Attention";
import ShowSeedFace from "../../screens/layout/big-modal/ShowSeedFace";
import {useConnection} from "../../config/redux/connection";

export default function ModalFullScreen() {
    const [height, setHeight] = useState(0);
    const {connection, onSetVisibleModalFullScreen, onSetVisibleModalHalfScreen, onSetCurrentModalFull, onSetCurrentModalHalf} = useConnection();
    const {windowHeight, visibleModalFullScreen, currentModalFull} = connection;

    useEffect(() => {
        setHeight(windowHeight);
        const showSubscription = Keyboard.addListener("keyboardDidShow", (data) => {
            setHeight(windowHeight - data.endCoordinates.height);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setHeight(windowHeight);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };

    }, [])


    const closeModal = () => {
        onSetVisibleModalFullScreen(false);
        onSetVisibleModalHalfScreen(false);
        onSetCurrentModalFull(0);
        onSetCurrentModalHalf(0);
    }

    return (
        <Modal
            isVisible={visibleModalFullScreen}
            onBackdropPress={closeModal}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            style={styles.bottomModal}
        >
            <View style={[styles.modalContent, {height: height}]}>
                {
                    currentModalFull === 0 ? (
                        <CreateWallet/>
                    ) : currentModalFull === 1 ? (
                        <AddExistingWallet/>
                    ) : currentModalFull === 2 ? (
                        <PinWallet/>
                    ) : currentModalFull === 3 ? (
                        <Register/>
                    ) : currentModalFull === 4 ? (
                        <Attention/>
                    ) : currentModalFull === 5 ? (
                        <ShowSeedFace/>
                    ) : null
                }
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: '#F8F8FA',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        position: 'relative',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
});
