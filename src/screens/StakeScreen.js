import React from "react";
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
import { st,darkMode } from "../config/Constant";
import { LineChart } from "react-native-chart-kit";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { useConnection } from "../config/redux/connection";
export default function StakeScreen() {
  const {connection} = useConnection()
  const times = ["Day", "Week", "Month", "Year"];
  const data = ["Monthy"];
  const Company = () => {
    return (
      <View >
        <View >
          <View style={[connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgImageDark, st.borderRa10, st.mt2,st.pb2]}>
            <View style={[st.mt2]}>
              <View style={[st.flexRow]}>
                <View>
                  <Image source={require("../assets/new-image/Icon.png")} />
                </View>
                <View style={[st.pt2]}>
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500]}>Fireal digital shares</Text>
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite]}>$25.78</Text>
                </View>
              </View>
              <View style={[st.pl2, st.pr2]}>
                <View>
                  <Image
                    style={[st.width100, st.borderRa10]}
                    source={require("../assets/image/fireal-image-background.png")}
                  />
                </View>
                <View style={[st.flexRow, st.pt2, st.pb2]}>
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.pr1]}>Total deposit</Text>
                  <Text
                    style={[
                      styles.bgBlueText,
                      st.textWhite,
                      st.width70px,
                      st.textCenter,
                      st.borderRa10,
                    ]}
                  >
                    Investing
                  </Text>
                </View>
                <View style={[st.flexRow]}>
                  <View style={[st.flexRow, st.width80]}>
                    <Image
                      style={[st.mt1]}
                      source={require("../assets/new-image/VectorNew1.png")}
                    />

                    <Text
                      style={[
                        styles.textGreen,
                        st.fs24,
                        st.fw500,
                        st.ml1,
                        st.mr1,
                      ]}
                    >
                      2,120,203
                    </Text>

                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.mt1]}>FRL</Text>
                  </View>
                  <View>
                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.mt1, st.fs18, st.fw500]}>1,202</Text>
                  </View>
                </View>
                <View style={[st.flexRow, st.pt1]}>
                  <Text style={[styles.textGray, st.fs10, st.width80]}>
                    = $142,000
                  </Text>
                  <Text style={[styles.textGray, st.fs10]}>= $142,000</Text>
                </View>
                <View style={[st.flexRow, st.pt2, st.pb2]}>
                  <View style={[st.flexRow, st.width70]}>
                    <Image
                      source={require("../assets/new-image/Rectangle4227.png")}
                    />
                    <Image
                      style={[st.width35]}
                      source={require("../assets/new-image/Rectangle4226.png")}
                    />
                  </View>
                  <View style={[st.flexRow, st.width100]}>
                    <Image
                      style={{ marginTop: 5, marginRight: 2 }}
                      source={require("../assets/new-image/Vector.png")}
                    />
                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fs16, st.fw500]}>112,000 FRL</Text>
                  </View>
                </View>
                <View style={[st.flexRow]}>
                  <View style={[st.flexRow, st.width80]}>
                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500, st.pr1]}>12%</Text>
                    <Text style={[styles.textGray]}>Payout coundown</Text>
                  </View>
                  <Text style={[styles.textGray]}>Invested</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgImageDark, st.borderRa10, st.mt2,st.pb2]}>
            <View style={[st.mt2]}>
              <View style={[st.flexRow]}>
                <View>
                  <Image source={require("../assets/new-image/Icon.png")} />
                </View>
                <View style={[st.pt2]}>
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500]}>Fireal digital shares</Text>
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite]}>$25.78</Text>
                </View>
              </View>
              <View style={[st.pl2, st.pr2]}>
                <View>
                  <Image
                    style={[st.width100, st.borderRa10]}
                    source={require("../assets/image/fireal-image-background.png")}
                  />
                </View>
                <View style={[st.flexRow, st.pt2, st.pb2]}>
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.pr1]}>Total deposit</Text>
                  <Text
                    style={[
                      styles.bgBlueText,
                      st.textWhite,
                      st.width70px,
                      st.textCenter,
                      st.borderRa10,
                    ]}
                  >
                    Investing
                  </Text>
                </View>
                <View style={[st.flexRow]}>
                  <View style={[st.flexRow, st.width80]}>
                    <Image
                      style={[st.mt1]}
                      source={require("../assets/new-image/VectorNew1.png")}
                    />

                    <Text
                      style={[
                        styles.textGreen,
                        st.fs24,
                        st.fw500,
                        st.ml1,
                        st.mr1,
                      ]}
                    >
                      2,120,203
                    </Text>

                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.mt1]}>FRL</Text>
                  </View>
                  <View>
                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.mt1, st.fs18, st.fw500]}>1,202</Text>
                  </View>
                </View>
                <View style={[st.flexRow, st.pt1]}>
                  <Text style={[styles.textGray, st.fs10, st.width80]}>
                    = $142,000
                  </Text>
                  <Text style={[styles.textGray, st.fs10]}>= $142,000</Text>
                </View>
                <View style={[st.flexRow, st.pt2, st.pb2]}>
                  <View style={[st.flexRow, st.width70]}>
                    <Image
                      source={require("../assets/new-image/Rectangle4227.png")}
                    />
                    <Image
                      style={[st.width35]}
                      source={require("../assets/new-image/Rectangle4226.png")}
                    />
                  </View>
                  <View style={[st.flexRow, st.width100]}>
                    <Image
                      style={{ marginTop: 5, marginRight: 2 }}
                      source={require("../assets/new-image/Vector.png")}
                    />
                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fs16, st.fw500]}>112,000 FRL</Text>
                  </View>
                </View>
                <View style={[st.flexRow]}>
                  <View style={[st.flexRow, st.width80]}>
                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500, st.pr1]}>12%</Text>
                    <Text style={[styles.textGray]}>Payout coundown</Text>
                  </View>
                  <Text style={[styles.textGray]}>Invested</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgImageDark, st.borderRa10, st.mt2,st.pb2]}>
            <View style={[st.mt2]}>
              <View style={[st.flexRow]}>
                <View>
                  <Image source={require("../assets/new-image/Icon.png")} />
                </View>
                <View style={[st.pt2]}>
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500]}>Fireal digital shares</Text>
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite]}>$25.78</Text>
                </View>
              </View>
              <View style={[st.pl2, st.pr2]}>
                <View>
                  <Image
                    style={[st.width100, st.borderRa10]}
                    source={require("../assets/image/fireal-image-background.png")}
                  />
                </View>
                <View style={[st.flexRow, st.pt2, st.pb2]}>
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.pr1]}>Total deposit</Text>
                  <Text
                    style={[
                      styles.bgBlueText,
                      st.textWhite,
                      st.width70px,
                      st.textCenter,
                      st.borderRa10,
                    ]}
                  >
                    Investing
                  </Text>
                </View>
                <View style={[st.flexRow]}>
                  <View style={[st.flexRow, st.width80]}>
                    <Image
                      style={[st.mt1]}
                      source={require("../assets/new-image/VectorNew1.png")}
                    />

                    <Text
                      style={[
                        styles.textGreen,
                        st.fs24,
                        st.fw500,
                        st.ml1,
                        st.mr1,
                      ]}
                    >
                      2,120,203
                    </Text>

                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.mt1]}>FRL</Text>
                  </View>
                  <View>
                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.mt1, st.fs18, st.fw500]}>1,202</Text>
                  </View>
                </View>
                <View style={[st.flexRow, st.pt1]}>
                  <Text style={[styles.textGray, st.fs10, st.width80]}>
                    = $142,000
                  </Text>
                  <Text style={[styles.textGray, st.fs10]}>= $142,000</Text>
                </View>
                <View style={[st.flexRow, st.pt2, st.pb2]}>
                  <View style={[st.flexRow, st.width70]}>
                    <Image
                      source={require("../assets/new-image/Rectangle4227.png")}
                    />
                    <Image
                      style={[st.width35]}
                      source={require("../assets/new-image/Rectangle4226.png")}
                    />
                  </View>
                  <View style={[st.flexRow, st.width100]}>
                    <Image
                      style={{ marginTop: 5, marginRight: 2 }}
                      source={require("../assets/new-image/Vector.png")}
                    />
                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fs16, st.fw500]}>112,000 FRL</Text>
                  </View>
                </View>
                <View style={[st.flexRow]}>
                  <View style={[st.flexRow, st.width80]}>
                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500, st.pr1]}>12%</Text>
                    <Text style={[styles.textGray]}>Payout coundown</Text>
                  </View>
                  <Text style={[styles.textGray]}>Invested</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgImageDark, st.borderRa10, st.mt2,st.pb2]}>
            <View style={[st.mt2]}>
              <View style={[st.flexRow]}>
                <View>
                  <Image source={require("../assets/new-image/Icon.png")} />
                </View>
                <View style={[st.pt2]}>
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500]}>Fireal digital shares</Text>
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite]}>$25.78</Text>
                </View>
              </View>
              <View style={[st.pl2, st.pr2]}>
                <View>
                  <Image
                    style={[st.width100, st.borderRa10]}
                    source={require("../assets/image/fireal-image-background.png")}
                  />
                </View>
                <View style={[st.flexRow, st.pt2, st.pb2]}>
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.pr1]}>Total deposit</Text>
                  <Text
                    style={[
                      styles.bgBlueText,
                      st.textWhite,
                      st.width70px,
                      st.textCenter,
                      st.borderRa10,
                    ]}
                  >
                    Investing
                  </Text>
                </View>
                <View style={[st.flexRow]}>
                  <View style={[st.flexRow, st.width80]}>
                    <Image
                      style={[st.mt1]}
                      source={require("../assets/new-image/VectorNew1.png")}
                    />

                    <Text
                      style={[
                        styles.textGreen,
                        st.fs24,
                        st.fw500,
                        st.ml1,
                        st.mr1,
                      ]}
                    >
                      2,120,203
                    </Text>

                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.mt1]}>FRL</Text>
                  </View>
                  <View>
                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.mt1, st.fs18, st.fw500]}>1,202</Text>
                  </View>
                </View>
                <View style={[st.flexRow, st.pt1]}>
                  <Text style={[styles.textGray, st.fs10, st.width80]}>
                    = $142,000
                  </Text>
                  <Text style={[styles.textGray, st.fs10]}>= $142,000</Text>
                </View>
                <View style={[st.flexRow, st.pt2, st.pb2]}>
                  <View style={[st.flexRow, st.width70]}>
                    <Image
                      source={require("../assets/new-image/Rectangle4227.png")}
                    />
                    <Image
                      style={[st.width35]}
                      source={require("../assets/new-image/Rectangle4226.png")}
                    />
                  </View>
                  <View style={[st.flexRow, st.width100]}>
                    <Image
                      style={{ marginTop: 5, marginRight: 2 }}
                      source={require("../assets/new-image/Vector.png")}
                    />
                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fs16, st.fw500]}>112,000 FRL</Text>
                  </View>
                </View>
                <View style={[st.flexRow]}>
                  <View style={[st.flexRow, st.width80]}>
                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500, st.pr1]}>12%</Text>
                    <Text style={[styles.textGray]}>Payout coundown</Text>
                  </View>
                  <Text style={[styles.textGray]}>Invested</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const MyShareholder = () => {
    return (
      <View>
        <View
          style={[connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgImageDark, st.borderRa10, st.mt2, st.mb2, st.pb2]}
        >
          <View style={[st.ml2, st.mr2, st.mt2]}>
            <View style={[st.pb2]}>
              <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500,st.fs18]}>Fireal digital shares</Text>
            </View>
            <View style={[st.flexRow]}>
              <Image source={require("../assets/image/icon-fireal.png")} />
              <Text
                style={[styles.textGray,st.fs24,st.pl1,st.pr1,st.pt5]}
              >
                AUSTRALIA{" "}
              </Text>
              <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500,st.fw500,st.fs25,st.pt5]}>
                -180 days
              </Text>
            </View>
            <View style={[st.flexRow, st.pb2]}>
              <View style={[st.width60]}>
                <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500,]}>Reward</Text>
                <View style={[st.flexRow]}>
                  <Image
                    source={require("../assets/new-image/flash-circle.png")}
                  />
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500,st.fs24]}>0.9727 FRL</Text>
                </View>
              </View>
              <View>
                <Image source={require("../assets/new-image/Frame48025.png")} />
              </View>
            </View>
            <View style={[st.pb2]}>
              <Image source={require("../assets/new-image/Frame48150.png")} />
              <Text style={[styles.textGray]}>
                Active time: 0d 0h 0min 12sec
              </Text>
            </View>
            <View style={[st.mb2]}>
              <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500,st.fs16]}>Your Invest</Text>
              <View>
                <View
                  style={[st.flexRow,st.justifySpaceBetween]}
                >
                  <Text style={[styles.textGray]}>Asset locked:</Text>
                  <Text style={[styles.textGray]}>10,5292 (ETH)</Text>
                </View>
                <View
                  style={[st.flexRow,st.justifySpaceBetween]}
                >
                  <Text style={[styles.textGray]}>Lock date:</Text>
                  <Text style={[styles.textGray]}>2022-05-29 00:36:56</Text>
                </View>
                <View
                  style={[st.flexRow,st.justifySpaceBetween]}
                >
                  <Text style={[styles.textGray]}>End date:</Text>
                  <Text style={[styles.textGray]}>2022-06-05 00:36:56</Text>
                </View>
              </View>
            </View>
            <View
              style={[st.pt2,st.borderRa10,st.flexRow, connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgIconDark,]}
            >
              <View>
                <Image source={require("../assets/new-image/Icon.png")} />
              </View>
              <View>
                <View style={[st.flexRow]}>
                  <View style={[st.width70]}>
                    <Text style={[styles.textGray,st.fs15]}>
                      Past reward
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: "#43C621", fontSize: 20 }}>Day</Text>
                  </View>
                </View>
                <View style={[st.flexRow]}>
                  <View style={[st.width60]}>
                    <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500,st.fs20, st.fw500]}>42.5 FRL</Text>
                  </View>
                  <View>
                    <Text style={[st.fs20,styles.textGray]}>~$ 42.4</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 20 }}>
              <Image
                style={{ marginRight: 10 }}
                source={require("../assets/new-image/ButtonUnstake.png")}
              />
              <Image source={require("../assets/new-image/ButtonReward.png")} />
            </View>
          </View>
        </View>
        <View>
          <Text style={[styles.textGray]}>Company info</Text>
        </View>
        <View style={[connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgImageDark, st.mt2, st.borderRa10, st.mb2]}>
          <View style={[st.flexRow, st.pt2, st.pb2, st.pl2]}>
            <View style={[st.flexRow, st.width90]}>
              <Image
                style={[st.mr2, st.mt1]}
                source={require("../assets/new-image/Vectortron.png")}
              />
              <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500,st.fs18,st.fw400]}>
                Company Details
              </Text>
            </View>
            <View style={[st.pt1]}>
              <Image source={require("../assets/new-image/VectorRight.png")} />
            </View>
          </View>
          <View style={[st.flexRow, st.pt2, st.pb2, st.pl2]}>
            <View style={[st.flexRow, st.width90]}>
              <Image
                style={[st.mr2, st.mt1]}
                source={require("../assets/new-image/Vectortron.png")}
              />
              <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500,st.fs18, st.fw400]}>Payment Method</Text>
            </View>
            <View style={[st.pt1]}>
              <Image source={require("../assets/new-image/VectorRight.png")} />
            </View>
          </View>
        </View>
        <View>
          <Text style={[styles.textGray]}>Total Shareholder rewards</Text>
        </View>

        <View
          style={[
            st.width100,
            st.borderRa10,
            st.mt2,
            st.mb2,
            connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgImageDark,
          ]}
        >
          <View style={[st.pl2]}>
            <View style={[st.pt2, st.pb15]}>
              <Text style={[st.fs20, styles.textGray]}>
                Total FRL rewards
              </Text>
            </View>
            <View style={[st.flexRow]}>
              <View style={[st.width70, st.flexRow]}>
                <Image
                  st
                  source={require("../assets/image/icon-frl-gold.png")}
                />
                <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500,st.fs30, st.fw500, st.pl1]}>5,678.8 FRL</Text>
              </View>
              <View style={[st.width50, st.justifyEnd]}>
                <SelectDropdown
                  data={data}
                  defaultValue={data[0]}
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
          </View>
          <View></View>
          <View
            style={[connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgIconDark,,st.m20,st.flexRow,st.borderRa10]}
          >
            <View style={[st.pt1]}>
              <Image source={require("../assets/new-image/Icon.png")} />
            </View>
            <View style={[st.pt2]}>
              <View style={[st.flexRow]}>
                <View style={[st.width70]}>
                  <Text style={[ styles.textGray, st.fs15 ]}>
                    Past reward
                  </Text>
                </View>
                <View>
                  <Text style={[styles.textGreen,st.fs20]}>Day</Text>
                </View>
              </View>
              <View style={[st.flexRow]}>
                <View style={[st.width60]}>
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500,st.fs20, st.fw500]}>42.5 FRL</Text>
                </View>
                <View>
                  <Text style={[st.fs20,styles.textGray]}>~$ 42.4</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[connection.DarkMode === false ? styles.detailInfoPool : darkMode.bgIconDark,st.flexRow,st.borderRa10,st.ml2,st.mr2,st.mb2]}
          >
            <View style={{ paddingTop: 10 }}>
              <Image source={require("../assets/new-image/Icon.png")} />
            </View>
            <View style={{ paddingTop: 20 }}>
              <View style={[st.flexRow]}>
                <View style={[st.width70]}>
                  <Text style={[styles.textGray,st.fs15]}>
                    Past reward
                  </Text>
                </View>
                <View>
                  <Text style={[styles.textGreen,st.fs20]}>Day</Text>
                </View>
              </View>
              <View style={[st.flexRow]}>
                <View style={[st.width60]}>
                  <Text style={[connection.DarkMode === false ? st.textBlack : st.textWhite,st.fw500,st.fs20, st.fw500]}>42.5 FRL</Text>
                </View>
                <View>
                  <Text style={[st.fs20,styles.textGray]}>~$ 42.4</Text>
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
  return (
    <>
      <View style={
          connection.DarkMode === false
            ? styles.container
            : darkMode.bgDarkContainer
        }>
        <View style={[styles.navbar]}>
          <ScrollView>
            <Navbar
              titles={["Company", "MyShareholder"]}
              icons={null}
              components={[Company(), MyShareholder()]}
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
  detailInfoPool: {
    backgroundColor: "#F7F9FC",
    // borderRadius: 8,
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
  bgBlueText: {
    backgroundColor: "#4277FF",
  },
  textGreen: {
    color: "#43C621",
  },
  textGray: {
    color: "#9EA3AE",
  },
  buttonStyleDarkMode: {
    backgroundColor: "#343849",
    borderRadius: 5,
    width: 80,
    height: 30,
  },
});
