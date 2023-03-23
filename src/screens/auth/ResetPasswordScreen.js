import {View, Text, Pressable, Image, StyleSheet} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import TextInputCp from "../../compoments/component/TextInputCp";
import { darkMode,st } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";
export default function ResetPasswordScreen({navigation}) {
    const {connection} = useConnection()
    const backToOldScreen = () => {
        navigation.goBack();
    }

    return (
        <View style={[connection.DarkMode === false ? styles.container : darkMode.bgDarkContainer]}>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Pressable onPress={backToOldScreen}>
                        <Image source={require('../../assets/new-image/vector-left.png')} style={styles.image}/>
                    </Pressable>
                </View>
                <View style={styles.content}>
                    <Text style={[connection.DarkMode === false ? null : st.textWhite,styles.title]}>{"Reset Password"}</Text>
                    <Text style={styles.description}>
                        {"We will send you link to reset \nyour password"}
                    </Text>
                </View>
            </View>
            <View style={styles.body}>
                <TextInputCp
                    placeholderText={"Min. 8 characters"}
                    labelText={"Password"}
                    password={true}
                    showIcon={true}
                />
            </View>
            <View style={styles.footer}>
                <ButtonLarge
                    text={"Send"}
                    width={"90%"}
                    paddingVertical={15}
                    fontSize={18}
                    elevation={0}
                    borderRadius={15}
                />
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
    body: {
        flex: 0.3,
        alignItems: 'center',
        width: '90%',
        marginLeft: '5%'
    },
    footer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: '10%',
    }
});
