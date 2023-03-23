import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import Navbar from "../../compoments/component/Navbar";
import TextInputCp from "../../compoments/component/TextInputCp";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import {navigate} from "../../config/navigator/RootNavigation";
import { darkMode,st } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";
export default function SignUpScreen({navigation}) {
    const {connection} = useConnection()
    const redirectScreen = (screen) => {
        navigate(screen)
    }

    const backToOldScreen = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Pressable onPress={backToOldScreen}>
                        <Image source={require('../../assets/new-image/vector-left.png')} style={styles.image}/>
                    </Pressable>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Create an Account</Text>
                    <Text style={styles.description}>
                        {"Create a commitment-free profile to explore \nfinancial products and rewards"}
                    </Text>
                </View>
            </View>
            <View style={styles.inputForm}>
                <TextInputCp placeholderText={"John Doe"} labelText={"Full Name"}/>
                <TextInputCp placeholderText={"johndoe@mail.com"} labelText={"Email"}/>
                <TextInputCp
                    placeholderText={"Min. 8 characters"}
                    labelText={"Password"}
                    password={true}
                    showIcon={true}
                />
                <View style={styles.passwordVerify}>
                    <Text style={styles.labelText}>
                        Strong Password
                    </Text>
                    <Text>
                        <Image source={require('../../assets/new-image/success-icon.png')} style={styles.image}/>
                    </Text>
                </View>
                <View style={styles.content}>
                    <Text>
                        {"By starting my application, I agree to Financer’s\n"}
                        <Text style={styles.fw_700}>Terms of Service </Text>and
                        <Text style={styles.fw_700}> Privacy Policy</Text>
                    </Text>
                </View>
                <View style={styles.content}>
                    <ButtonLarge
                        text={"Sign in"}
                        width={"100%"}
                        paddingVertical={15}
                        fontSize={18}
                        elevation={0}
                        borderRadius={15}
                    />
                </View>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text>
                        Don’t have any account?
                        <Text style={styles.text} onPress={() => redirectScreen("SignIn")}> Sign Up</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 0.2,
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
        color: '#6A7187'
    },
    inputForm: {
        flex: 0.7,
        width: '90%',
        marginLeft: '5%'
    },
    passwordVerify: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    labelText: {
        fontSize: 14,
        lineHeight: 19,
        color: '#43C621',
        fontWeight: '700',
    },
    fw_700: {
        fontWeight: '700',
    },
    footer: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#43C621',
        fontWeight: '700',
    },
});
