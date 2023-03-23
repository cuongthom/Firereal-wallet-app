import {View, Text, Pressable, Image, StyleSheet} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import {useRef, useState} from "react";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import {useConnection} from "../../config/redux/connection";
import { darkMode,st } from "../../config/Constant";
export default function PhoneNumberScreen({navigation}) {
    const {connection} = useConnection()
    const [phoneNumber, setPhoneNumber] = useState("");
    const {onSetVisibleModalHalfScreen} = useConnection();

    const backToOldScreen = () => {
        navigation.goBack();
    }

    const handleSubmitPhoneNumber = () => {
        onSetVisibleModalHalfScreen(true);
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
                    <Text style={[connection.DarkMode === false ? null : st.textWhite,styles.title]}>{"What’s Your Mobile \nPhone Number?"}</Text>
                    <Text style={styles.description}>
                        {"Enter your mobile phone number so we can \ntext you an authentication code"}
                    </Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.labelInput}>
                    <Text style={styles.label}>Phone Number</Text>
                </View>
                <PhoneInput
                    defaultValue={phoneNumber}
                    defaultCode="DM"
                    layout="first"
                    onChangeText={(text) => {
                        setPhoneNumber(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setPhoneNumber(text);
                    }}
                    containerStyle={{
                        borderRadius: 20,
                        width: '90%'
                    }}
                    withDarkTheme
                    withShadow
                    autoFocus
                />
            </View>
            <View style={styles.footer}>
                <ButtonLarge
                    text={"Continue"}
                    width={"90%"}
                    paddingVertical={15}
                    fontSize={18}
                    elevation={0}
                    borderRadius={15}
                    onPress={handleSubmitPhoneNumber}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 0.3,
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
    },
    labelInput: {
        alignSelf: 'flex-start',
        marginLeft: '7%',
    },
    label: {
        fontWeight: '700',
        color: '#6A7187',
        marginBottom: '1%'
    },
    footer: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: '10%',
    }
});
