import {ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import ScreenHeader from "../compoments/component/ScreenHeader";
import {st,darkMode} from "../config/Constant";
import ToggleButton from "../compoments/button/ToggleButton";
import NavigationBox from "../compoments/component/NavigationBox";
import TokenInfo from "../compoments/component/TokenInfo";
import { useConnection } from "../config/redux/connection";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";

export default function WalletScreen({navigation}) {
    const {connection} = useConnection()
    return (
        <View style={[connection.DarkMode === false
            ? styles.container
            : darkMode.bgDarkContainer]}>
            <ScrollView>
                <View style={[styles.balanceInfo, st.mt2]}>
                    <ImageBackground source={require('../assets/new-image/image-background-wallet.png')} style={styles.image}>
                        <View style={[st.pl2, st.justifySpaceBetween, st.height100]}>
                            <View>
                                <ToggleButton titles={["USDT", "FRL"]} borderRadius={50}/>
                            </View>
                            <View style={[st.pb2]}>
                                <View>
                                    <Text style={[st.fs32, st.fw700, st.textGreen]}>$15,897.0</Text>
                                </View>
                                <View style={[st.flexRow]}>
                                    <Text style={[st.textWhite, st.fw700, st.fs12]}>+2.50% </Text>
                                    <Text style={[st.textGray, st.fw400, st.fs12]}>from last month</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.optionsBlock}>
                        <NavigationBox/>
                    </View>
                    <View style={[st.mt3]}>
                        <TokenInfo/>
                        <TokenInfo tokenSymbol={'BTC'} tokenName={'BTC'} image={require('../assets/new-image/BtcTokenIcon.png')} backgroundColor={"#F9A846"}/>
                        <TokenInfo tokenSymbol={'ETH'} tokenName={'ETH'} image={require('../assets/new-image/EthTokenIcon.png')} backgroundColor={"#6C727F"}/>
                        <TokenInfo tokenSymbol={'BNB'} tokenName={'BNB'} image={require('../assets/new-image/BnbTokenIcon.png')} backgroundColor={"#F0B90B"}/>
                        <TokenInfo tokenSymbol={'BNB'} tokenName={'BNB'} image={require('../assets/new-image/BnbTokenIcon.png')} backgroundColor={"#F0B90B"}/>
                        <TokenInfo tokenSymbol={'BNB'} tokenName={'BNB'} image={require('../assets/new-image/BnbTokenIcon.png')} backgroundColor={"#F0B90B"}/>
                        <TokenInfo tokenSymbol={'BNB'} tokenName={'BNB'} image={require('../assets/new-image/BnbTokenIcon.png')} backgroundColor={"#F0B90B"}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    balanceInfo: {
        flex: 1,
        width: '95%',
        alignSelf: 'center',
    },
    image: {
      height: 200,
    },
    optionsBlock: {
        width: '100%',
        alignSelf: 'center',
    },
});
