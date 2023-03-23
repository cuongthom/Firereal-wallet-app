import {Image, StyleSheet, Text, View} from "react-native";
import ButtonAndIcon from "../button/ButtonAndIcon";
import {TokenInfo} from "../../config/Constant";

export default function AssetTab(
    {
        tokenList = TokenInfo,
    }
) {
    return (
        <View style={styles.container}>
            {
                tokenList.map((token, index) => (
                    <View style={styles.tokenInfoBlock} key={index}>
                        <View style={styles.blockImage}>
                            <Image source={token.image} style={styles.image}/>
                        </View>
                        <View style={styles.blockDes}>
                            <View style={styles.name}>
                                <Text>
                                    <Text style={styles.tokenName}>
                                        {token.name}
                                    </Text>
                                    {`  `}
                                    <Text style={styles.tokenType}>
                                        ({token.type})
                                    </Text>
                                </Text>
                            </View>
                            <View style={styles.tokenStatus}>
                                <View style={styles.blockPrice}>
                                    <Text style={styles.tokenPrice}>{token.price} $</Text>
                                </View>
                                <View style={styles.blockProfit}>
                                    <ButtonAndIcon
                                        icon={token.profit >= 0 ? "arrow-top-right-thin" : "arrow-bottom-right-thin"}
                                        fontSize={16}
                                        iconSize={16}
                                        textColor={token.profit >= 0 ? "#41BF71" : "#F30A34"}
                                        iconColor={token.profit >= 0 ? "#41BF71" : "#F30A34"}
                                        text={`+${token.profit}%`}
                                        paddingStart={0}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.amountBlock}>
                            <Text>
                                <Text style={styles.amount}>
                                    {token.amount}
                                </Text>
                                {`  `}
                                <Text style={styles.symbol}>
                                    {token.symbol}
                                </Text>
                            </Text>
                            <Text style={styles.usdtAmount}>
                                = {token.usdtAmount} $
                            </Text>
                        </View>
                    </View>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#E5E6EB",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    tokenInfoBlock: {
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: 1,
        borderColor: "#E5E6EB",
    },
    blockImage: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 40,
        height: 40,
    },
    blockDes: {
        flexGrow: 3,
        justifyContent: "center",
        flexDirection: 'column',
    },
    tokenName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    tokenType: {
        color: '#828282',
        fontWeight: '300',
        fontSize: 16,
    },
    tokenStatus: {
        flexDirection: 'row',
    },
    tokenPrice: {
        fontWeight: '600',
        color: '#43C621',
        fontSize: 16,
    },
    blockPrice: {
        flexGrow: 0.5,
    },
    blockProfit: {
        flexGrow: 6,
    },
    amountBlock: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: 'column',
        paddingRight: 20,
    },
    amount: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    symbol: {
        fontWeight: 'bold',
        color: '#828282',
        fontSize: 16,
    },
    usdtAmount: {
        color: '#828282',
    },
});
