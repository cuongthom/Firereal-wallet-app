import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import CountryButton from "../../compoments/button/CountryButton";
import {navigate} from "../../config/navigator/RootNavigation";
import {useConnection} from "../../config/redux/connection";
import { darkMode,st } from "../../config/Constant";
export default function SelectCountryScreen({navigation}) {
    const {connection} = useConnection()
    const {onSetVisibleModalHalfScreen} = useConnection();

    const backToOldScreen = () => {
        navigation.goBack();
    }

    const redirectScreen = () => {
        navigate('SelectReason');
    }

    const handleChangeCountry = () => {
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
                    <Text style={[connection.DarkMode === false ? null : st.textWhite,styles.title]}>{"What’s Your \nCitizenship?"}</Text>
                    <Text style={styles.description}>
                        {"If you’re a citizen of more than one country, \nplease pick one"}
                    </Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.labelInput}>
                    <Text style={[connection.DarkMode === false ? null : st.textWhite,styles.label]}>Citizenship</Text>
                </View>
                <View style={styles.countryButton}>
                    <CountryButton onPress={handleChangeCountry}/>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.contentFooter}>
                    <View style={styles.iconFooter}>
                        <Image source={require('../../assets/new-image/lock-icon.png')}/>
                    </View>
                    <View>
                        <Text style={styles.descriptionFooter}>
                            {"This info is used only for identity verification and is transmitted securely using 128-bit encryption"}
                        </Text>
                    </View>
                </View>
                <ButtonLarge
                    text={"Continue"}
                    width={"90%"}
                    paddingVertical={15}
                    fontSize={18}
                    elevation={0}
                    borderRadius={15}
                    onPress={redirectScreen}
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
        flex: 0.25,
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
        flex: 0.45,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: '10%',
    },
    contentFooter: {
        flexDirection: 'row',
        marginBottom: '3%',
        width: '90%',
    },
    descriptionFooter: {
        fontSize: 12,
        color: '#6A7187',
        paddingLeft: '2%',
    },
    iconFooter: {
        alignItems: 'flex-start'
    },
    countryButton: {
        width: '90%',
    }
});
