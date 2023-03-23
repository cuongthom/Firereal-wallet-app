import ButtonCloseModal from "../../../compoments/button/ButtonCloseModal";
import {StyleSheet, Text, View} from "react-native";
import TextInputCp from "../../../compoments/component/TextInputCp";
import {useState} from "react";
import CheckBoxComponent from "../../../compoments/component/CheckBoxComponent";
import ButtonLarge from "../../../compoments/button/ButtonLarge";
import ToastAndroid from "react-native/Libraries/Components/ToastAndroid/ToastAndroid";
import {useConnection} from "../../../config/redux/connection";

export default function Register() {
    const [isChecked, setChecked] = useState(false);
    const [validate, setValidate] = useState(true);
    const {connection, onSetCurrentModalFull, onSetHistoryOpenModal} = useConnection();

    const {historyOpenModal} = connection


    const handleChecked = () => {
        setChecked(!isChecked);
    }

    const onRegister = () => {
        if (validate) {
            ToastAndroid.show("Register success", ToastAndroid.SHORT);
            onNext();
        }
    }

    const onNext = () => {
        onSetCurrentModalFull(4);
        onSetHistoryOpenModal([...historyOpenModal, 3]);
    }

    return (
        <>
            <ButtonCloseModal/>
            <View style={styles.container}>
                <View style={[styles.alignItems, styles.headerBlock]}>
                    <Text style={styles.title}>🔐 Create Wallet</Text>
                    <Text style={styles.description}>Welcom with us.</Text>
                </View>
                <View style={styles.blockInput}>
                    <View style={styles.alignItems}>
                        <TextInputCp placeholderText={"hi@example.com"} labelText={"Email"}/>
                        <TextInputCp placeholderText={"0x1223...d456"} labelText={"Affiliate Wallet"}/>
                        <TextInputCp placeholderText={"Password"} labelText={"Password"} password={true} showIcon={true}/>
                        <TextInputCp placeholderText={"Confirm Password"} labelText={"Confirm Password"} password={true} showIcon={true} />
                    </View>
                    <CheckBoxComponent
                        text={"Authentication with Face ID"}
                        isChecked={isChecked}
                        onValueChange={handleChecked}
                    />
                </View>
                <View style={[styles.blockButton, styles.alignItems]}>
                    {
                        validate ? (
                            <ButtonLarge
                                onPress={onRegister}
                                text={"Continue"}
                                width={"80%"}
                                paddingVertical={15}
                                fontSize={14}
                                elevation={0}
                            />
                        ) : (
                            <ButtonLarge
                                text={"Continue"}
                                width={"80%"}
                                paddingVertical={15}
                                fontSize={14}
                                backgroundColor={"#F4F4F6"}
                                textColor={"#9EA3AE"}
                                elevation={0}
                            />
                        )
                    }
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    alignItems: {
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36
    },
    description: {
        color: '#828282',
        fontSize: 14,
        marginTop: 5,
        paddingBottom: 10
    },
    headerBlock: {
        justifyContent: 'flex-end',
        flexGrow: 2,
    },
    blockInput: {
        justifyContent: 'center',
        flexGrow: 1,

    },
    blockButton: {
        justifyContent: 'flex-start',
        width: '100%',
        flexGrow: 6,
    },
});
