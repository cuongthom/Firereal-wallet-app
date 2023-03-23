import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Navbar from "../compoments/component/Navbar";
import { st, darkMode } from "../config/Constant";
import { LineChart } from "react-native-chart-kit";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { useConnection } from "../config/redux/connection";

const line = {
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 102],
      strokeWidth: 2,
      strokeVertical: false,
    },
  ],
};

export default function MiningScreen({ navigation }) {
  const handleBack = () => {
    navigation.goBack();
  };
  const times = ["Day", "Week", "Month", "Year"];
  const data = ["Monthy"];
  const [currencyUnit, setCurrencyUnit] = useState(null);
  const [openDropwdown, setOpenDropdown] = useState(false);
  const { connection, onSetVisibleModalHalfScreen } = useConnection();

  const handleChangeCountry = () => {
    onSetVisibleModalHalfScreen(true);
  };

  const netWorkTab = () => {
    return (
      <View
        style={connection.DarkMode === false ? null : darkMode.bgDarkContainer}
      >
        <View style={[st.flexRow, st.alignItemCenter, st.mt2, st.mb2]}>
          <Text
            style={[
              st.fw700,
              st.fs16,
              connection.DarkMode === false ? st.textBlack : st.textWhite,
            ]}
          >
            🏦 Pool info{" "}
          </Text>
          <Image source={require("../assets/new-image/info-circle.png")} />
        </View>
        <View
          style={[
            connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgImageDark,
            st.flexRow,
            st.mt1,
            st.borderRa10,
          ]}
        >
          <View
            style={[
              // connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgImageDark,
              st.justifyCenter,
              st.borderRa10,
              st.alignItemCenter,
              st.flexGrow1,
              st.width50,
            ]}
          >
            <Text
              style={[
                st.fw700,
                st.fs24,
                st.pt1,
                connection.DarkMode === false ? st.textBlack : st.textWhite,
              ]}
            >
              123,149
            </Text>
            <Text style={[st.fw500, st.fs12, st.textGray, st.pb1]}>
              Difficulty
            </Text>
          </View>
          <View
            style={[
              // connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgImageDark,
              st.justifyCenter,
              st.alignItemCenter,
              st.flexGrow1,
              st.borderRa10,
              st.width50,
            ]}
          >
            <Text
              style={[
                st.fw700,
                st.fs24,
                connection.DarkMode === false ? st.textBlack : st.textWhite,
              ]}
            >
              191 GH/s
            </Text>
            <Text style={[st.fw500, st.fs12, st.textGray]}>
              Network Hashrate
            </Text>
          </View>
        </View>
        <View
          style={[
            connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgImageDark,
            st.flexRow,
            st.mt1,
            st.borderRa10,
          ]}
        >
          <View
            style={[
              // connection.DarkMode === false ?  styles.detailInfoPool : darkMode.bgImageDark,
              st.justifyCenter,
              st.alignItemCenter,
              st.flexGrow1,
              
              st.pt1,
              st.pb1,
              st.borderRa10,
              st.width50,
            ]}
          >
            <Text
              style={[
                st.fw700,
                st.fs24,
                connection.DarkMode === false ? st.textBlack : st.textWhite,
              ]}
            >
              123,149
            </Text>
            <Text style={[st.fw500, st.fs12, st.textGray]}>Mobile Actived</Text>
          </View>
          <View
            style={[
              // connection.DarkMode === false ?  styles.detailInfoPool : darkMode.bgImageDark,
              st.justifyCenter,
              st.alignItemCenter,
              st.flexGrow1,
              st.borderRa10,
              st.width50,
            ]}
          >
            <Text
              style={[
                st.fw700,
                st.fs24,
                connection.DarkMode === false ? st.textBlack : st.textWhite,
              ]}
            >
              2,100,000
            </Text>
            <Text style={[st.fw500, st.fs12, st.textGray]}>Total FRL Pool</Text>
          </View>
        </View>
        <View style={[connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgImageDark, st.mt1, st.pt1,st.borderRa10]}>
          <View
            style={[
              st.flexRow,
              st.justifySpaceBetween,
              st.ph3Percent,
              st.alignItemCenter,
            ]}
          >
            <Text style={[st.fw600, st.fs12, st.textGray]}>
              Network Hashrate:{" "}
              <Text
                style={[
                  connection.DarkMode === false ? st.textBlack : st.textWhite,
                ]}
              >
                Mh/s
              </Text>
            </Text>
            <View>
              <SelectDropdown
                data={times}
                defaultValue={times[0]}
                buttonStyle={[connection.DarkMode === false ? styles.buttonStyle : styles.buttonStyleDarkMode]}
                buttonTextStyle={[st.fs12, st.fw600, st.textGray]}
                renderDropdownIcon={() => {
                  return (
                    <Image
                      source={require("../assets/new-image/chevron-down-outline.png")}
                      style={{ top: 0.5 }}
                    />
                  );
                }}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </View>
          </View>
          <View style={[st.mt2]}>
            <LineChart
              data={line}
              width={Dimensions.get("window").width * 0.84}
              height={200}
              chartConfig={{
                backgroundColor: "#F7F9FC",
                backgroundGradientFrom: "#F7F9FC",
                backgroundGradientTo: "#F7F9FC",
                decimalPlaces: 0,
                color: (number) => "#37CF10",
                labelColor: () => `#8E94A4`,
                propsForBackgroundLines: {
                  strokeDasharray: "none",
                  strokeColor: "#F7F9FC",
                },
              }}
              withInnerLines={false}
              fromZero={true}
              bezier
              style={{
                paddingRight: 35,
              }}
            />
          </View>
        </View>
        <Pressable
          style={[styles.poolInfo, st.mt1, st.flexRow]}
          onPress={handleChangeCountry}
        >
          <View style={[st.flexGrow1]}>
            <Image source={require("../assets/new-image/wifi-icon.png")} />
          </View>
          <View
            style={[
              st.flexRow,
              st.alignItemCenter,
              st.justifySpaceBetween,
              st.flexGrow15,
            ]}
          >
            <View style={[st.justifyStart, styles.pl16]}>
              <Text
                style={[
                  st.fw700,
                  connection.DarkMode === false ? st.textBlack : st.textWhite,
                  st.fs14,
                ]}
              >
                Fireal Official Pool (Singapore)
              </Text>
              <Text style={[st.fw400, st.fs12, st.textGray]}>
                pool.fireal.io:9999
              </Text>
            </View>
            <Image
              source={require("../assets/new-image/chevron-forward-outline.png")}
            />
          </View>
        </Pressable>
        <View style={[st.mt4]}>
          <Text
            style={[
              st.fw600,
              st.fs18,
              connection.DarkMode === false ? st.textBlack : st.textWhite,
            ]}
          >
            Profitability Calculator
          </Text>
          <Text style={[st.fw500, st.fs12, st.textGray, st.mt1]}>
            Check or Compare the potential earnings of your mobile phone
            hardware
          </Text>
        </View>
        <View style={[st.mt4, st.flexRow]}>
          <View style={[st.flexGrow1, st.width50]}>
            <Text
              style={[
                st.fw500,
                st.fs12,
                connection.DarkMode === false ? st.textBlack : st.textWhite,
                st.pb1,
                st.width100,
              ]}
            >
              Currency:
            </Text>
            <DropDownPicker
              listMode={"SCROLLVIEW"}
              items={[
                {
                  label: "🇺🇸 USD - $",
                  value: "USD",
                },
              ]}
              value={currencyUnit}
              onChangeItem={(item) => setCurrencyUnit(item.value)}
              defaultValue={"USD"}
              placeholder={
                <Text
                  style={[
                    connection.DarkMode === false ? st.textBlack : st.textWhite,
                  ]}
                >
                  🇺🇸 USD - $
                </Text>
              }
              containerStyle={{ height: 40, width: "100%" }}
              style={[
                connection.DarkMode === false ? null : darkMode.bgImageDark,
                st.width100,
              ]}
              dropDownStyle={{ backgroundColor: "#fafafa" }}
              onChangeValue={(value) => console.log(value)}
              open={openDropwdown}
              setOpen={setOpenDropdown}
              setValue={setCurrencyUnit}
            />
          </View>
          <View style={[st.flexGrow1, st.width40]}>
            <Text
              style={[
                st.fw500,
                st.fs12,
                connection.DarkMode === false ? st.textBlack : st.textWhite,
                st.pb1,
                st.pl1,
              ]}
            >
              Electricity cost:
            </Text>
            <DropDownPicker
              placeholder={
                <View style={[st.flexRow]}>
                  <View style={[st.justifyCenter, st.pr1]}>
                    <Text>⚡️</Text>
                  </View>
                  <View>
                    <Image source={require("../assets/new-image/Line.png")} />
                  </View>
                  <View>
                    <Text
                      style={[
                        connection.DarkMode === false
                          ? st.textBlack
                          : st.textWhite,
                        st.justifyCenter,
                        st.fs24,
                        st.pl8,
                        st.pt4,
                      ]}
                    >
                      10
                    </Text>
                  </View>
                </View>
              }
              listMode={"SCROLLVIEW"}
              items={[" USD - $"]}
              value={currencyUnit}
              onChangeItem={(item) => setCurrencyUnit(item.value)}
              defaultValue={" USD - $"}
              containerStyle={{ height: 40, width: "90%" }}
              style={[
                connection.DarkMode === false ? null : darkMode.bgImageDark,
                st.ml1,
              ]}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              //   dropDownStyle={{ backgroundColor: "#fafafa" }}
              onChangeValue={(value) => console.log(value)}
              setValue={setCurrencyUnit}
            ></DropDownPicker>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Image
            style={{ marginTop: 8, marginBottom: 8, backgroundColor: "black" }}
            source={require("../assets/new-image/Line80.png")}
          />
        </View>
        <View
          style={[
            connection.DarkMode === false
              ? { backgroundColor: "#F7F9FC" }
              : darkMode.bgImageDark,
            st.flexRow,
            st.height30,
            st.borderRa10,
            st.justifyCenter,
          ]}
        >
          <View style={[st.width70]}>
            <Text
              style={[
                connection.DarkMode === false
                  ? {
                      color: "#8E94A4",
                    }
                  : st.textWhite,
                st.textAlignRight,
                st.fs20,
                st.mr85,
              ]}
            >
              FRL
            </Text>
          </View>
          <View>
            <Text
              style={[
                connection.DarkMode === false
                  ? {
                      color: "#8E94A4",
                    }
                  : st.textWhite,
                st.textAlignRight,
                st.fs20,
              ]}
            >
              USDT
            </Text>
          </View>
        </View>
        <View style={[st.mt2, st.mb2]}>
          <View style={[st.flexRow]}>
            <View style={[st.width45]}>
              <Text
                style={[
                  connection.DarkMode === false
                    ? { color: "#1F212D" }
                    : st.textWhite,
                  st.fs20,
                ]}
              >
                Dialy
              </Text>
            </View>
            <View style={[st.width35]}>
              <Text
                style={[
                  connection.DarkMode === false ? null : st.textWhite,
                  st.fs18,
                  st.fw600,
                ]}
              >
                32.5
              </Text>
            </View>
            <View>
              <Text
                style={[
                  connection.DarkMode === false ? null : st.textWhite,
                  st.fs18,
                  st.fw600,
                ]}
              >
                5.7
              </Text>
            </View>
          </View>
          <View style={[st.flexRow]}>
            <View style={[st.width45]}>
              <Text
                style={[
                  connection.DarkMode === false
                    ? { color: "#1F212D" }
                    : st.textWhite,
                  st.fs20,
                ]}
              >
                Dialy
              </Text>
            </View>
            <View style={[st.width35]}>
              <Text
                style={[
                  connection.DarkMode === false ? null : st.textWhite,
                  st.fs18,
                  st.fw600,
                ]}
              >
                32.5
              </Text>
            </View>
            <View>
              <Text
                style={[
                  connection.DarkMode === false ? null : st.textWhite,
                  st.fs18,
                  st.fw600,
                ]}
              >
                5.7
              </Text>
            </View>
          </View>
          <View style={[st.flexRow]}>
            <View style={[st.width45]}>
              <Text
                style={[
                  connection.DarkMode === false
                    ? { color: "#1F212D" }
                    : st.textWhite,
                  st.fs20,
                ]}
              >
                Dialy
              </Text>
            </View>
            <View style={[st.width35]}>
              <Text
                style={[
                  connection.DarkMode === false ? null : st.textWhite,
                  st.fs18,
                  st.fw600,
                ]}
              >
                32.5
              </Text>
            </View>
            <View>
              <Text
                style={[
                  connection.DarkMode === false ? null : st.textWhite,
                  st.fs18,
                  st.fw600,
                ]}
              >
                5.7
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const payoutTab = () => {
    return (
      <View>
        <View style={[st.flexRow, st.mt2]}>
          <View
            style={[st.width60,st.borderRa10,connection.DarkMode === false ? st.bgWhite : darkMode.bgImageDark]}
          >
            <View style={[st.pl2]}>
              <Text
                style={[st.fs14,st.pt16,st.pb16,st.fw500,{
                  color: "#8E94A4",
                }]}
              >
                Your Hashrate{" "}
              </Text>
              <View style={[st.flexRow]}>
                <Text
                  style={[st.pb16,st.fw500,st.fs32,{
                    color: "#43C621",
                  }]}
                >
                  1.51
                </Text>
                <Text
                  style={[st.pb16,st.fw500,st.fs24,{
                    color: "#43C621",
                  }]}
                >
                  MH/s
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[st.width35,st.ml15,st.mr15,st.borderRa10,connection.DarkMode === false ? st.bgWhite : darkMode.bgImageDark]}
          >
            <View style={[st.ml2]}>
              <Text style={[styles.navbarPayout]}>Workers</Text>
              <Text
                style={[st.pb16,st.fw500,st.fs35,{
                  color: "#43C621",
                }]}
              >
                10
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[st.width100,st.borderRa10,st.mt2,connection.DarkMode === false ? st.bgWhite : darkMode.bgImageDark]}
        >
          <View style={[st.ml2]}>
            <View style={[st.pt2, st.pb15]}>
              <Text style={[st.fs20,{ color: "#8E94A4" }]}>
                Total FRL rewards
              </Text>
            </View>
            <View style={[st.flexRow]}>
              <View style={[st.width70]}>
                <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fs30, st.fw500]}>
                  5,678.8 FRL
                </Text>
              </View>
              <View style={[st.width50, st.justifyEnd]}>
                <SelectDropdown
                  data={data}
                  defaultValue={data[0]}
                  buttonStyle={[connection.DarkMode === false ? styles.buttonStyle : styles.buttonStyleDarkMode]}
                  buttonTextStyle={[st.fs12, st.fw600, st.textGray,]}
                  renderDropdownIcon={() => {
                    return (
                      <Image
                        source={require("../assets/new-image/chevron-down-outline.png")}
                        style={{ top: 0.5 }}
                      />
                    );
                  }}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
              </View>
            </View>
          </View>
          <View></View>
          <View
            style={[st.m20,st.flexRow,st.borderRa10,connection.DarkMode === false ? st.bgWhite : darkMode.bgIconDark]}
          >
            <View style={{ paddingTop: 10 }}>
              <Image source={require("../assets/new-image/Icon.png")} />
            </View>
            <View style={{ paddingTop: 20 }}>
              <View style={[st.flexRow]}>
                <View style={[st.width70]}>
                  <Text style={[st.fs16,{ color: "#9BA0AF" }]}>
                    Past reward
                  </Text>
                </View>
                <View>
                  <Text style={[st.fs20,{ color: "#43C621"}]}>Day</Text>
                </View>
              </View>
              <View style={[st.flexRow]}>
                <View style={[st.width60]}>
                  <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fs20,st.fw500]}>
                    42.5 FRL
                  </Text>
                </View>
                <View>
                  <Text style={[st.fs20,{ color: "#9BA0AF" }]}>
                    ~$ 42.4
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[connection.DarkMode === false ? st.bgWhite : darkMode.bgIconDark,st.flexRow,st.borderRa10,st.ml2,st.mr2,st.mb2]}
          >
            <View style={{ paddingTop: 10 }}>
              <Image source={require("../assets/new-image/Icon.png")} />
            </View>
            <View style={{ paddingTop: 20 }}>
              <View style={[st.flexRow]}>
                <View style={[st.width70]}>
                  <Text style={{ color: "#9BA0AF", fontSize: 15 }}>
                    Past reward
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#43C621", fontSize: 20 }}>Day</Text>
                </View>
              </View>
              <View style={[st.flexRow]}>
                <View style={[st.width60]}>
                  <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fs20,st.fw500]}>
                    42.5 FRL
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#9BA0AF", fontSize: 20 }}>
                    ~$ 42.4
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[st.ml2, st.mb2]}>
            <Image source={require("../assets/new-image/Button.png")} />
          </View>
        </View>
      </View>
    );
  };
  const minerListTab = () => {
    return (
      <View>
        <View style={[ connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgImageDark, st.mt2,  st.mb2,st.pv1, st.borderRa10]}>
          <View style={[st.pl2, st.pr2]}>
            <View style={[st.pt1]}>
              <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fs16, st.fw700]}>Statistic</Text>
            </View>
            <View style={[st.flexRow, st.pt2, st.pb2]}>
              <View style={[st.width50, st.flexRow]}>
                <Text
                  style={{ color: "#43C621", fontSize: 30, fontWeight: "500" }}
                >
                  120{" "}
                </Text>
                <Text style={{ color: "#8E94A4", fontSize: 20 }}>MH/s</Text>
              </View>
              <View style={[st.flexRow, st.width50, st.justifyEnd]}>
                <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fs30,st.fw500]}>10</Text>
                <Text
                  style={{ color: "#43C621", fontSize: 30, fontWeight: "500" }}
                >
                  /10
                </Text>
              </View>
            </View>
            <View style={[st.flexRow]}>
              <View style={[st.width50]}>
                <Text style={{ color: "#9EA3AE" }}>Your hashrate</Text>
              </View>
              <View style={[st.flexRow, st.width50, st.justifyEnd]}>
                <Text style={{ color: "#9EA3AE" }}>Total worker</Text>
              </View>
            </View>
            <View style={[st.flexRow, st.pt2, st.pb2]}>
              <View style={[st.width50, st.flexRow]}>
                <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fs20,st.fw500]}>15 min </Text>
              </View>
              <View style={[st.flexRow]}>
                <Image
                  source={require("../assets/new-image/Rectangle4227.png")}
                />
                <Image
                  source={require("../assets/new-image/Rectangle4226.png")}
                />
              </View>
            </View>
            <View style={[st.flexRow]}>
              <View style={[st.width50]}>
                <Text style={{ color: "#9EA3AE" }}>Update in</Text>
              </View>
              <View style={[st.flexRow, st.width50, st.justifyEnd]}>
                <Text style={{ color: "#9EA3AE" }}>Payout coundown:</Text>
                <Text style={[connection.DarkMode === false ? null : st.textWhite]}>12h:30m:12s</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[connection.DarkMode === false ? { backgroundColor: "#F7F9FC" } : darkMode.bgImageDark
            ,
            st.flexRow,
            st.pl2,
            st.pb1,
            st.pt1,
            st.borderRa10,
          ]}
        >
          <Text style={[{ color: "#C1C4CD" }, st.width50]}>Worker name</Text>
          <Text style={[{ color: "#C1C4CD" }, st.width30]}>Hashrate</Text>
          <Text style={{ color: "#C1C4CD" }}>Temp</Text>
        </View>
        <View style={[st.flexRow, st.pl2, st.pb1, st.pt1, st.borderRa10]}>
          <View style={[st.flexRow]}>
            <View style={[st.flexRow]}>
              <Image
                style={{ marginTop: 2, marginRight: 4 }}
                source={require("../assets/new-image/Vector.png")}
              />
              <Text style={[connection.DarkMode === false ? null : st.textWhite,st.width45,st.fw500]}>
                FRL.Rig001
              </Text>
            </View>
            <View style={[st.flexRow, st.pl1, st.width30]}>
              <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fw500]}>152</Text>
              <Text style={{ color: "#C1C4CD" }}>KH/s</Text>
            </View>
            <View style={[st.flexRow, st.pl2]}>
              <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fw500]}>10</Text>
              <Text style={{ color: "#C1C4CD" }}>°C</Text>
            </View>
          </View>
        </View>
        <View style={[st.flexRow, st.pl2, st.pb1, st.pt1, st.borderRa10]}>
          <View style={[st.flexRow]}>
            <View style={[st.flexRow]}>
              <Image
                style={{ marginTop: 2, marginRight: 4 }}
                source={require("../assets/new-image/Vector.png")}
              />
              <Text style={[connection.DarkMode === false ? null : st.textWhite,st.width45,st.fw500]}>
                FRL.Rig001
              </Text>
            </View>
            <View style={[st.flexRow, st.pl1, st.width30]}>
              <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fw500]}>152</Text>
              <Text style={{ color: "#C1C4CD" }}>KH/s</Text>
            </View>
            <View style={[st.flexRow, st.pl2]}>
              <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fw500]}>10</Text>
              <Text style={{ color: "#C1C4CD" }}>°C</Text>
            </View>
          </View>
        </View>
        <View style={[st.flexRow, st.pl2, st.pb1, st.pt1, st.borderRa10]}>
          <View style={[st.flexRow]}>
            <View style={[st.flexRow]}>
              <Image
                style={{ marginTop: 2, marginRight: 4 }}
                source={require("../assets/new-image/Vector.png")}
              />
              <Text style={[connection.DarkMode === false ? null : st.textWhite,st.width45,st.fw500]}>
                FRL.Rig001
              </Text>
            </View>
            <View style={[st.flexRow, st.pl1, st.width30]}>
              <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fw500]}>152</Text>
              <Text style={{ color: "#C1C4CD" }}>KH/s</Text>
            </View>
            <View style={[st.flexRow, st.pl2]}>
              <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fw500]}>10</Text>
              <Text style={{ color: "#C1C4CD" }}>°C</Text>
            </View>
          </View>
        </View>
        <View style={[st.flexRow, st.pl2, st.pb1, st.pt1, st.borderRa10]}>
          <View style={[st.flexRow]}>
            <View style={[st.flexRow]}>
              <Image
                style={{ marginTop: 2, marginRight: 4 }}
                source={require("../assets/new-image/Vector.png")}
              />
              <Text style={[connection.DarkMode === false ? null : st.textWhite,st.width45,st.fw500]}>
                FRL.Rig001
              </Text>
            </View>
            <View style={[st.flexRow, st.pl1, st.width30]}>
              <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fw500]}>152</Text>
              <Text style={{ color: "#C1C4CD" }}>KH/s</Text>
            </View>
            <View style={[st.flexRow, st.pl2]}>
              <Text style={[connection.DarkMode === false ? null : st.textWhite,st.fw500]}>10</Text>
              <Text style={{ color: "#C1C4CD" }}>°C</Text>
            </View>
          </View>
        </View>
        
        
        
      </View>
    );
  };
  return (
    <>
      <View
        style={
          connection.DarkMode === false
            ? styles.container
            : darkMode.bgDarkContainer
        }
      >
        <View style={[styles.navbar]}>
          <ScrollView>
            <Navbar
              style={{ backgroundColor: "red" }}
              titles={["Network", "Payout", "Miner List"]}
              icons={null}
              components={[netWorkTab(), payoutTab(), minerListTab()]}
            />
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navbar: {
    width: "90%",
    marginLeft: "5%",
  },
  navbarPayout: {
    color: "#8E94A4",
    fontSize: 15,
    paddingTop: 16,
    paddingBottom: 16,
    fontWeight: "500",
  },
  detailInfoPool: {
    backgroundColor: "#fff",
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: "#E5E5E5",
  },
  buttonStyle: {
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 80,
    height: 30,
  },
  buttonStyleDarkMode: {
    backgroundColor: "#343849",
    borderRadius: 5,
    width: 80,
    height: 30,
  },
  poolInfo: {
    borderWidth: 1,
    borderColor: "#E8EAED",
    borderRadius: 12,
    padding: 12,
  },
  pl16: {
    paddingLeft: 16,
  },
  buttonBack: {
    position: "absolute",
    top: 29,
    left: "5%",
    zIndex: 1,
  },
});
