import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import HeaderModal from "../../../compoments/component/HeaderModal";
import OTPTextInput from "react-native-otp-textinput";
import ToastAndroid from "react-native/Libraries/Components/ToastAndroid/ToastAndroid";

export default function PinWallet() {
    const onPress = () => {
        ToastAndroid.show("OTP is correct", ToastAndroid.SHORT);
    }

    return (
        <>
            <HeaderModal text={"PIN"}/>
            <View style={styles.container}>
                <View style={styles.textHeader}>
                    <Text style={styles.title}>Fireal Wallet PIN</Text>
                    <Text style={styles.description}>Enter PIN to continue</Text>
                </View>
                <View style={styles.blockOptInput}>
                    <OTPTextInput
                        inputCount={6}
                        textInputStyle={styles.roundedTextInput}
                    />
                </View>
                <View style={styles.imageBlock}>
                    <Pressable onPress={onPress}>
                        <Image source={require("../../../assets/image/fingerprint-scan.png")}/>
                    </Pressable>
                </View>
                <View style={styles.textBlockStyle}>
                    <Text>We don't store any of your information, so if you</Text>
                    <Text>forget your PIN, we can't help you get it back.</Text>
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
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36
    },
    description: {
        color: '#828282',
        fontSize: 14,
        marginTop: 5,
    },
    roundedTextInput: {
        borderRadius: 5,
        borderWidth: 1,
    },
    textHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    blockOptInput: {
        flexGrow: 2,
    },
    imageBlock: {
        flexGrow: 2,
    },
    textBlockStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 3.5,
    }
});
