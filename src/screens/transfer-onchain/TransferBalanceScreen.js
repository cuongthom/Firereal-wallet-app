import { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonLarge from "../../compoments/button/ButtonLarge";
import ListRecipient from "../../compoments/component/ListRecipient";
import ViewBorder from "../../compoments/component/ViewBorder";
import InputComponent from "../../compoments/input/InputComponent";
import { listCurrencyUnit, st } from "../../config/Constant";
import { darkMode } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";


export default function TransferBalanceScreen({ navigation }) {
  const {connection} = useConnection()

  const [currencyUnit, setCurrencyUnit] = useState(listCurrencyUnit[0]);
  const [openDropwdown, setOpenDropdown] = useState(false);
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");

  const handleChangeAmount = (value) => {
    setAmount(value);
  };
  return (
    <View
      style={[
        connection.DarkMode === false
          ? styles.container
          : darkMode.bgDarkContainer,
        { flex: 1 },
      ]}
    >
      <View style={[st.bgWhite,styles.header]}>
        <Pressable
          style={styles.goBackIcon}
          onPress={() => navigation.goBack()}
        >
          <Image  source={require("../../assets/new-image/vector-left.png")} />
        </Pressable>
        <Text style={[st.h1Bold]}>Transfer</Text>
      </View>
      <View style={[st.mt3,styles.body]}>
        <View style={{ borderRadius: 16, overflow: "hidden" }}>
          <ImageBackground
            source={require("../../assets/new-image/image-background-card.png")}
            style={styles.backgroundCard}
            resizeMode="cover"
          >
            <View
              style={[
                {
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "flex-start",
                },
              ]}
            >
              <Text style={[st.h2Bold, { color: "#fff", marginBottom: 30 }]}>
                $15,897.00
              </Text>
              <Text style={(st.p, { color: "#fff" })}>**** **** **** 9877</Text>
            </View>
            <View
              style={[
                {
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "flex-end",
                },
              ]}
            >
              <Image
                source={require("../../assets/new-image/fireal-card.png")}
                style={st.mb3}
              />
              <Image source={require("../../assets/new-image/visa-text.png")} />
            </View>
          </ImageBackground>
        </View>
        <ListRecipient />

        <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,styles.inputLabel]}>Enter Amount</Text>
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
        <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,styles.inputLabel]}>Add Notes</Text>
        <View style={{ zIndex: -1 }}>
          <InputComponent
            value={notes}
            setValue={setNotes}
            placeholder="Notes"
            paddingHorizontal={16}
            paddingVertical={16}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonLarge
          text="Continue"
          onPress={() => navigation.navigate("TransferConfirm")}
          paddingVertical={14}
        />
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
    position: "relative",
    paddingTop:30,
    alignItems: "center",
  },
  goBackIcon: {
    position: "absolute",
    left: 30,
    top: 30,
  },
  body: {
    flex: 0.8,
    paddingHorizontal: 24,
  },
  backgroundCard: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 16,
    justifyContent: "space-between",
    borderRadius: 30,
    flexDirection: "row",
  },
  amountNumber: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 38,
    
  },
  inputLabel: {
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 19,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 12,
  },
  footer: {
    flex: 0.1,
    paddingHorizontal: 24,
    justifyContent: "flex-end",
    marginBottom: 30,
  },
});
