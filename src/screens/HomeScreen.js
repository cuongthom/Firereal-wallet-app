import {Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {st, darkMode} from "../config/Constant";
import ShareholdingElement from "../compoments/component/ShareholdingElement";
import NavigationBox from "../compoments/component/NavigationBox";
import { useConnection } from "../config/redux/connection";
export default function HomeScreen({navigation}) {
    const { connection } = useConnection();

    return (
        <View style={[connection.DarkMode === false ? styles.container : darkMode.bgDarkContainer, st.pt1]}>
            <ScrollView>
                <View style={styles.newsBlock}>
                    <View>
                        <Image source={require('../assets/new-image/image-new-1.png')}/>
                    </View>
                    <View>
                        <Image source={require('../assets/new-image/image-new-2.png')}/>
                    </View>
                    <View>
                        <Image source={require('../assets/new-image/image-new-3.png')}/>
                    </View>
                    <View>
                        <Image source={require('../assets/new-image/image-new-4.png')}/>
                    </View>
                </View>
                <View style={styles.backgroundNetWorkAndWallet}>
                    <ImageBackground
                        source={require('../assets/new-image/background-wallet-block.png')}
                        resizeMode="cover"
                        style={styles.backgroundImage}
                        imageStyle={styles.borderImage}
                    >
                        <View style={[styles.headerWallet, st.pt1]}>
                            <Image source={require('../assets/new-image/icon-fireal.png')} style={styles.image}/>
                            <Text style={[st.textWhite, st.fw700, st.pr20Percent]}>$FRL</Text>
                            <Text style={[st.textWhiteBlur, st.fw500, st.pr1]}>Balance</Text>
                        </View>
                        <View style={[st.pv3Percent, st.ph7Percent]}>
                            <Text style={[st.textWhite, st.fw700, st.fs24]}>555,897.1</Text>
                            <Text style={[st.fw500, st.textWhiteBlur, st.fs12]}>~$12,000.1 USDT</Text>
                        </View>
                        <View style={[st.pv3Percent, st.ph7Percent, st.pb1]}>
                            <Text style={[st.textWhite, st.fw600, st.fs14]}>$123,388,288</Text>
                            <Text style={[st.fw500, st.textWhiteBlur, st.fs12]}>Shareholder Pool</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../assets/new-image/background-network.png')}
                        resizeMode="cover"
                        style={[styles.backgroundImage]}
                        imageStyle={styles.borderImage}
                    >
                        <View style={styles.headerMine}>
                            <Image source={require('../assets/new-image/fireal-gold-icon.png')}/>
                            <Text style={[st.textGray, st.fw700, st.ph0]}>PHONE</Text>
                            <Text style={[st.textGray, st.fw400]}>Mine</Text>
                        </View>
                        <View style={[st.pv3Percent, st.ph7Percent]}>
                            <View style={[st.flexRow, st.alignItemEnd]}>
                                <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite, st.fw700, st.fs24]}>120</Text>
                                <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite, st.fw600, st.fs16, st.pl0]}>MH/s</Text>
                            </View>
                            <Text style={[st.textGray, st.fw500, st.fs12]}>Speed</Text>
                        </View>
                        <View style={[st.pv3Percent, st.ph7Percent, st.pb1]}>
                            <View style={[st.flexRow]}>
                                <View style={[st.flexGrow1]}>
                                    <Text style={[st.textGray, st.fw500, st.fs10]}>Network Share</Text>
                                    <View style={st.flexRow}>
                                        <Image source={require('../assets/new-image/net-work-hashrate-icon.png')}/>
                                        <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite, st.fw700, st.fs13]}>0.003%</Text>
                                    </View>
                                </View>
                                <View style={[st.flexGrow1, st.alignItemCenter]}>
                                    <View style={st.flexRow}>
                                        <Image source={require('../assets/new-image/icon-work.png')}/>
                                        <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite, st.fw700, st.fs13]}>200</Text>
                                    </View>
                                    <Text style={[st.textGray, st.fw500, st.fs10]}>Workers</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.optionsBlock}>
                    <NavigationBox/>
                </View>
                <View style={[st.ph5Percent, st.mt3]}>
                    <View style={[st.justifySpaceBetween, st.flexRow, st.alignItemCenter]}>
                        <View style={[st.flexRow, st.alignItemCenter]}>
                            <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite, st.fw700, st.fs16]}>🏦 Share Holding </Text>
                            <Image source={require('../assets/new-image/info-circle.png')}/>
                        </View>
                        <Text style={[st.textGreen, st.fw500, st.fs12]}>See All</Text>
                    </View>
                    <View>
                        <ShareholdingElement imageSource={require('../assets/new-image/fireal-icon-shareHolding.png')} name={"Fireal Capital"} price={"$25.78"} percentApy={"16%"} priceChange={"6,06%"}/>
                        <ShareholdingElement imageSource={require('../assets/new-image/netflix-icon-shareholding.png')} name={"Netflix"} price={"$25.78"} percentApy={"22%"} priceChange={"6,06%"}/>
                        <ShareholdingElement imageSource={require('../assets/new-image/facebook-icon-shareholding.png')} name={"Facebook"} price={"$25.78"} percentApy={"16%"} priceChange={"6,06%"}/>
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
    newsBlock: {
        width: '95%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    backgroundNetWorkAndWallet: {
        width: '95%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    backgroundImage: {
        flex: 1,
        flexDirection: 'column',
        width: '95%',
    },
    borderImage: {
        borderRadius: 10,
    },
    headerWallet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '5%',
        paddingHorizontal: '7%',
    },
    headerMine: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '5%',
        paddingHorizontal: '7%',
    },
    image: {
        width: 30,
        height: 30
    },
    optionsBlock: {
        width: '95%',
        alignSelf: 'center',
    },
});
