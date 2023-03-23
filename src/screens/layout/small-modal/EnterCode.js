import {View, Text, StyleSheet, Pressable} from "react-native";
import OTPTextView from "react-native-otp-textinput";
import ButtonLarge from "../../../compoments/button/ButtonLarge";
import {navigate} from "../../../config/navigator/RootNavigation";
import {useConnection} from "../../../config/redux/connection";

export default function EnterCode() {
    const {onSetVisibleModalFullScreen, onSetVisibleModalHalfScreen, onSetCurrentModalFull} = useConnection();

    const redirectScreen = (screen) => {
        navigate('ResetPass');
    }

    const closeModal = () => {
        onSetVisibleModalHalfScreen(false);
        onSetVisibleModalFullScreen(false);
        onSetCurrentModalFull(0);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>6-Digit Code</Text>
                <Text style={styles.description}>Please enter the code we’ve sent to</Text>
                <Text style={styles.phoneText}>+6589089762</Text>
            </View>
            <View style={styles.body}>
                <OTPTextView
                    handleTextChange={e => {}}
                    containerStyle={styles.textInputContainer}
                    textInputStyle={styles.roundedTextInput}
                    inputCount={5}
                />
            </View>
            <View style={styles.buttonBlock}>
                <ButtonLarge
                    text={"Continue"}
                    width={"100%"}
                    paddingVertical={15}
                    fontSize={18}
                    elevation={0}
                    borderRadius={15}
                    onPress={() => {
                        closeModal();
                        redirectScreen("ResetPass")
                    }}
                />
            </View>
            <View style={styles.footer}>
                <Pressable>
                    <Text style={styles.text}>
                        Didn’t receive a code?
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        flexGrow: 1,
        paddingStart: 30,
        paddingTop: 30,
    },
    content: {
        marginTop: '10%'
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        fontFamily: 'Manrope',
        lineHeight: 38,
        alignSelf: 'stretch',
    },
    description: {
        fontSize: 14,
        lineHeight: 19,
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        letterSpacing: 0.2,
        alignSelf: 'stretch',
        paddingTop: 15,
    },
    phoneText: {
        fontWeight: '700',
        fontSize: 14,
        color: '#6A7187',
    },
    body: {
        width: "90%",
        flexGrow: 3,
        alignSelf: 'center',
    },
    textInputContainer: {
        marginBottom: 20,
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 4,
    },
    buttonBlock: {
        flexGrow: 3,
        width: '90%',
        justifyContent: 'flex-end',
        alignSelf: 'center',
    },
    footer: {
        flexGrow: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#43C621',
        fontWeight: '600',
    }
});
