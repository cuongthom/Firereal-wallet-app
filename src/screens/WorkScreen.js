import {StyleSheet, Text, View, ScrollView} from "react-native";
import ButtonAndIcon from "../compoments/button/ButtonAndIcon";
import ToastAndroid from "react-native/Libraries/Components/ToastAndroid/ToastAndroid";
import BlockShowBalance from "../compoments/component/BlockShowBalance";
import Navbar from "../compoments/component/Navbar";
import AssetTab from "../compoments/component/AssetTab";
import MyHold from "../compoments/component/MyHold";
import NftTab from "../compoments/component/NftTab";
import ShareHolding from "../compoments/component/ShareHolding";



export default function WorkScreen({navigation}) {
    const onCopyAddress = () => {
        ToastAndroid.show("Copied to clipboard", ToastAndroid.SHORT);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.content}>
                    <ButtonAndIcon
                        fontSize={20}
                        paddingStart={0}
                        text={"👋🏻 Hello! 0X8a...3848"}
                        iconStart={false}
                        icon={"checkbox-multiple-blank-outline"}
                        marginLeft={10}
                        iconMrTop={1}
                        iconColor={"#43C621"}
                        onPress={onCopyAddress}
                    />
                    <BlockShowBalance/>
                    <Navbar
                        titles={["Asset", "My Hold", "NFT"]}
                        icons={["bitcoin", "camera-marker-outline","book-account-outline"]}
                        components={[<AssetTab/>, <MyHold/>, <NftTab/>]}
                    />
                    <Text style={styles.text}>
                        CỔ TỨC DOANH NGHIỆP 🚀
                    </Text>
                    <Navbar
                        titles={["Share Holding", "My Hold"]}
                        icons={["bitcoin", "camera-marker-outline"]}
                        components={[<ShareHolding/>, <MyHold/>]}
                        marginTop={30}
                    />
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: "100%",
    },
    content: {
      margin: 25,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 25,
    },
});
