import {Image, StyleSheet, View} from "react-native";
import ButtonLarge from "../../../compoments/button/ButtonLarge";
import TextCreateOrNoWallet from "../../../compoments/component/TextCreateOrNoWallet";
import ButtonCloseModal from "../../../compoments/button/ButtonCloseModal";
import {useConnection} from "../../../config/redux/connection";
import {setCurrentModalFull} from "../../../config/redux/connection/reducer";

export default function CreateWallet() {
    const {connection, onSetCurrentModalFull, onSetHistoryOpenModal} = useConnection();
    const {historyOpenModal} = connection;

    const onPressAddExistingWallet = () => {
        onSetCurrentModalFull(1);
        onSetHistoryOpenModal([...historyOpenModal, 0]);
    }

    const onPressCreateWallet = () => {
        onSetCurrentModalFull(3);
        onSetHistoryOpenModal([...historyOpenModal, 0])
    }

    return (
        <>
            <ButtonCloseModal/>
            <View style={styles.container}>
                <View style={styles.blockText}>
                    <Image source={require("../../../assets/image/icon-wallet.png")}/>
                    <TextCreateOrNoWallet textBold={"Add Wallet"} textSmall={"Start your Web3 journey from here."}/>
                </View>
                <View style={styles.blockButton}>
                    <View style={styles.alignItems}>
                        <ButtonLarge
                            onPress={onPressCreateWallet}
                            text={"Create Wallet"}
                            width={"80%"}
                            paddingVertical={15}
                            fontSize={20}
                        />
                    </View>
                    <View style={[styles.paddingButton, styles.alignItems]}>
                        <ButtonLarge
                            onPress={onPressAddExistingWallet}
                            text={"Add Existing Wallet"}
                            width={"80%"}
                            paddingVertical={15}
                            fontSize={20}
                            backgroundColor={"#ffffff"}
                            textColor={"#000000"}
                        />
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    blockButton: {
        flexGrow: 0.1,
        width: '100%',
    },
    blockText: {
        flexGrow: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paddingButton: {
        paddingTop: 15,
    },
    alignItems: {
        alignItems: 'center',
    }
});
