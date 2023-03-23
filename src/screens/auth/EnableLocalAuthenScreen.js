import {View, Text, StyleSheet, Image, Pressable, SafeAreaView} from "react-native";
import LocalAuthSlider from "../../compoments/slider/LocalAuthSlider";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import {navigate} from "../../config/navigator/RootNavigation";
import { darkMode,st } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";
export default function EnableLocalAuthenScreen({navigation}) {
    const {connection} = useConnection()
    const redirectScreen = () => {
        navigate("SelectCountry")
    }

    return (
        <View style={[connection.DarkMode === false ? styles.container : darkMode.bgDarkContainer]}>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Pressable onPress={redirectScreen}>
                        <Image source={require('../../assets/new-image/close-outline.png')} style={styles.image}/>
                    </Pressable>
                </View>
            </View>
            <View style={styles.body}>
                <SafeAreaView style={styles.slider}>
                    <LocalAuthSlider/>
                </SafeAreaView>
            </View>
            <View style={styles.buttonFooter}>
                <View style={styles.button}>
                    <ButtonLarge
                        text={"Enable"}
                        width={"90%"}
                        paddingVertical={15}
                        fontSize={20}
                        elevation={0}
                        onPress={redirectScreen}
                    />
                </View>
                <View style={[styles.button, styles.mt1]}>
                    <ButtonLarge
                        text={"Maybe Later"}
                        width={"90%"}
                        paddingVertical={15}
                        fontSize={20}
                        elevation={0}
                        backgroundColor={"#fff"}
                        textColor={"#43C621"}
                        onPress={redirectScreen}
                    />
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
        flex: 0.1,
        flexDirection: "row",
        alignItems: 'center',
    },
    body: {
        flex: 0.7,
    },
    buttonFooter: {
        flex: 0.2,
    },
    logo: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    text: {
        color: '#43C621',
        fontWeight: '700',
    },
    image: {
        marginStart: 30
    },
    mt1: {
        marginTop: 10
    },
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
