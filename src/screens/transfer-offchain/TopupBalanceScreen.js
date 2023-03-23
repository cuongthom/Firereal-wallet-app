import { useCallback, useState } from "react";
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import ViewBorder from "../../compoments/component/ViewBorder";
import { listCurrencyUnit, st,darkMode } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";
 
export default function TopupBalanceScreen({ navigation }) {
    const [currencyUnit, setCurrencyUnit] = useState(listCurrencyUnit[0]);
    const [openDropwdown, setOpenDropdown] = useState(false);
    const [currencySymbol, setCurrencySymbol] = useState("$");
    const [amount, setAmount] = useState(0);
    const handleChangeAmount = (value) => {
        setAmount(value);
    }
    const {connection} = useConnection()
    return (
        <View style={[connection.DarkMode === false ? styles.container : darkMode.bgDarkContainer,{flex:1}]}>
            <View style={[st.bgWhite,styles.header]}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../../assets/new-image/vector-left.png")}
                    />
                </Pressable>
                <Text style={st.h1Bold}>Top Up Balance</Text>
                <Image
                    source={require("../../assets/new-image/help-circle-outline.png")}
                />
            </View>
            <View style={[st.pt2,styles.body]}>
            <ViewBorder paddingVertical={0} paddingHorizontal={0}>
          <View style={[connection.DarkMode === false
            ? null
            : darkMode.bgImageDark,st.pt2,st.pb2,st.padding20, st.borderRa10]}>
            <Text style={[st.pBold, { color: "#83899B", marginBottom: 8 }]}>
              Amount
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={[connection.DarkMode === false ? null : st.textWhite,styles.amountNumber]}>{currencySymbol}</Text>
                <TextInput
                  value={amount}
                  onChangeText={handleChangeAmount}
                  keyboardType="numeric"
                  defaultValue={"590.00"}
                  style={[connection.DarkMode === false ? null : st.textWhite,styles.amountNumber]}
                />
              </View>
              <View
                style={{
                  width: "25%",
                }}
              >
                <DropDownPicker
                  style={[connection.DarkMode === false ? st.bgWhite : darkMode.bgIconDark]}
                  items={listCurrencyUnit}
                  value={currencyUnit}
                  placeholder={<Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite]}>USD</Text>}
                  setValue={setCurrencyUnit}
                  setOpen={setOpenDropdown}
                  open={openDropwdown}
                  defaultValue={listCurrencyUnit[0]}
                  onChangeValue={(value) => {
                    const symbol = listCurrencyUnit.find(
                      (item) => item.value === value
                    ).symbol;
                    setCurrencySymbol(symbol);
                    setCurrencyUnit(value);
                  }}
                  dropDownContainerStyle={{
                    backgroundColor: "#F7F9FC",
                  }}
                  ArrowDownIconComponent={() => {
                    return (
                      <Image
                        source={require("../../assets/new-image/chevron-forward-outline.png")}
                      />
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </ViewBorder>
                <View style={[connection.DarkMode === false ? null : darkMode.bgImageDark,styles.selectCardBox]}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.backgroundOutlineCardIcon}>
                            <Image
                                source={require("../../assets/new-image/card.png")}
                            />
                        </View>
                        <View
                            style={{
                                marginStart: 16,
                                flexDirection: "column",
                                justifyContent: "space-around",
                            }}>
                            <Text style={[connection.DarkMode === false ? null : st.textWhite,st.h2Bold]}>Visa</Text>
                            <Text style={[connection.DarkMode === false ? null : st.textWhite,st.pBold]}>**** **** **** 9877</Text>
                        </View>
                    </View>
                    <Text style={[st.h2Bold, { color: "#1355FF" }]}>
                        Change
                    </Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 16,
                    }}>
                    <TouchableOpacity
                        style={styles.defaultAmount}
                        onPress={() => handleChangeAmount("50")}>
                        <Text style={[connection.DarkMode === false ? null : st.textWhite,st.pBold]}>{currencySymbol}50</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.defaultAmount}
                        onPress={() => handleChangeAmount("100")}>
                        <Text style={[connection.DarkMode === false ? null : st.textWhite,st.pBold]}>{currencySymbol}100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.defaultAmount}
                        onPress={() => handleChangeAmount("150")}>
                        <Text style={[connection.DarkMode === false ? null : st.textWhite,st.pBold]}>{currencySymbol}150</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.defaultAmount}
                        onPress={() => handleChangeAmount("200")}>
                        <Text style={[connection.DarkMode === false ? null : st.textWhite,st.pBold]}>{currencySymbol}200</Text>
                    </TouchableOpacity>
                </View>
                <ButtonLarge text="Continue" paddingVertical={14} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    header: {
        flex: 0.1,
        paddingTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        alignItems: "flex-start",
    },
    body: {
        flex: 0.7,
        paddingHorizontal: 24,
    },
    amountNumber: {
        fontSize: 28,
        fontWeight: "700",
        lineHeight: 38,
    },
    selectCardBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E8EAED",
        marginTop: 30,
        zIndex: -1,
    },
    backgroundOutlineCardIcon: {
        padding: 12,
        backgroundColor: "#fff",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 0.2,
        paddingHorizontal: 24,
        justifyContent: "flex-end",
        marginBottom: 30,
    },
    defaultAmount: {
        width: "22%",
        paddingVertical: 12,
        borderRadius: 8,
        borderColor: "#E8EAED",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
