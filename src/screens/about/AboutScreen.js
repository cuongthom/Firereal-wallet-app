import {Text, View, SafeAreaView, StyleSheet, Image, Pressable} from "react-native";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import Slider from "../../compoments/slider/Slider";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {navigate} from "../../config/navigator/RootNavigation";
import { darkMode,st } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";
export default function AboutScreen({navigation}) {
const {connection} = useConnection()
    const moveToBlockChainStack = () => {
        navigate('Welcome')
    }

    return (
        <View style={[connection.DarkMode === false ? styles.container : darkMode.bgDarkContainer]}>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Image style={[st.bgWhite]} source={require('../../assets/new-image/logo-and-text.png')} style={styles.image}/>
                    {/* logo white */}
                </View>
                <View style={styles.nextButton}>
                    <Pressable style={styles.buttonSkip} onPress={moveToBlockChainStack}>
                        <Text style={styles.text}>Skip</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.body}>
                <SafeAreaView style={styles.slider}>
                    <Slider/>
                </SafeAreaView>
            </View>
            <View style={styles.buttonFooter}>
                <ButtonLarge
                    text={"Get Started"}
                    width={"80%"}
                    paddingVertical={15}
                    fontSize={20}
                    elevation={0}
                    onPress={moveToBlockChainStack}
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
        flex: 0.1,
        flexDirection: "row",
        alignItems: 'center',
    },
    body: {
        flex: 0.8,
    },
    buttonFooter: {
        flex: 0.1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    nextButton: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    buttonSkip: {
        marginEnd: 30,
        borderWidth: 1,
        borderColor: '#43C621',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    text: {
        color: '#43C621',
        fontWeight: '700',
    },
    image: {
        marginStart: 30
    }
});
