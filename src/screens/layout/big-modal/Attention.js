import {StyleSheet, Text, View} from "react-native";
import HeaderModal from "../../../compoments/component/HeaderModal";
import ButtonLarge from "../../../compoments/button/ButtonLarge";
import {useConnection} from "../../../config/redux/connection";

export default function Attention() {
    const {connection, onSetCurrentModalFull, onSetHistoryOpenModal} = useConnection();
    const {historyOpenModal} = connection;

    const onNext = () => {
        onSetHistoryOpenModal([...historyOpenModal, 4]);
        onSetCurrentModalFull(5);
    }

    return (
        <>
            <HeaderModal border={false}/>
            <View style={styles.container}>
                <View style={styles.blockText}>
                    <View style={styles.alignItems}>
                        <Text style={styles.title}>Attention</Text>
                    </View>
                    <View style={styles.descriptionBlock}>
                        <View style={styles.elementDes}>
                            <View><Text style={[styles.textDes, styles.paddingIcon]}>🔐 </Text></View>
                            <View>
                                <Text style={styles.textDes}>The recovery phrase alone gives you full</Text>
                                <Text style={styles.textDes}>access to your wallets and funds.</Text>
                            </View>
                        </View>
                        <View style={styles.elementDes}>
                            <Text style={styles.textDes}>🤔 Never share it with anyone.</Text>
                        </View>
                        <View style={styles.elementDes}>
                            <View><Text style={[styles.textDes, styles.paddingIcon]}>🤔 </Text></View>
                            <View>
                                <Text style={styles.textDes}>The recovery phrase alone gives you full</Text>
                                <Text style={styles.textDes}>access to your wallets and funds.</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.alignItems, styles.button]}>
                    <ButtonLarge
                        onPress={onNext}
                        text={"Reveal Recovery Phase"}
                        width={"80%"}
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
        marginTop: 20,
    },
    alignItems: {
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36
    },
    descriptionBlock: {
        alignItems: 'flex-start',
        marginTop: 25,
        paddingHorizontal: 50,
    },
    textDes: {
        fontSize: 20,
        fontWeight: "500"
    },
    paddingIcon: {
        paddingTop: 10,
    },
    elementDes: {
        marginTop: 15,
        flexDirection: "row",
    },
    button: {
        flexGrow: 0.25
    },
    blockText: {
        flexGrow: 1,
    }
});
