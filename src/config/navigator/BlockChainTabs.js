import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MiningScreen from "../../screens/MiningScreen";
import WorkScreen from "../../screens/WorkScreen";
import WalletScreen from "../../screens/WalletScreen";
import StakeScreen from "../../screens/StakeScreen";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { st } from "../Constant";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigate } from "./RootNavigation";

const Tab = createBottomTabNavigator();

export default function BlockChainTabs({ navigation }) {

  const images = [
    {
      image: require("../../assets/new-image/wallet-icon.png"),
      imageFocus: require("../../assets/new-image/wallet-icon.png"),
    },
    {
      image: require("../../assets/new-image/home.png"),
      imageFocus: require("../../assets/new-image/home-selected.png"),
    },
    {
      image: require("../../assets/new-image/miner-icon.png"),
      imageFocus: require("../../assets/new-image/miner-icon-selected.png"),
    },
  ];

  const optionsHomePage = (image, imageFocus) => {
    return {
      headerTitle: () => (
        <View
          style={[
            st.flexRow,
            st.justifySpaceBetween,
            st.alignItemCenter,
            st.width100,
            
          ]}
        >
          <View style={[st.flexRow, st.flexGrow1]}>
            <Image 
              source={require("../../assets/new-image/fireal-icon-shareHolding.png")}
            />
            <View style={[st.flexRow, st.alignItemCenter, st.pl1]}>
              <Text style={[st.fw700, st.fs14, st.textBlack]}>Hi, Guest</Text>
              <Text style={[st.fw500, st.fs14, st.textGreen, st.pl0]}>
                Login
              </Text>
            </View>
          </View>
          <View
            style={[
              st.flexGrow1,
              st.flexRow,
              st.justifyEnd,
              st.alignItemCenter,
            ]}
          >
            <View style={[styles.tokenInfo, st.flexRow, st.alignItemCenter]}>
              <Image
                source={require("../../assets/new-image/coingecko-icon.png")}
                style={st.mr0}
              />
              <Image
                source={require("../../assets/new-image/coinmarketcap-icon.png")}
              />
              <Text style={[st.textGreen, st.fw700, st.fs12, st.pl0]}>FRL</Text>
              <Text style={[st.textBlack, st.fw700, st.fs12]}>: 0.1251</Text>
            </View>
            <Pressable
              onPress={() => {
                navigate("Notification");
              }}
            >
              <Image
                source={require("../../assets/new-image/notification-icon.png")}
                style={[st.mr0, st.ml0]}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                navigate("DarkMode");
              }}
            >
              <Image
                source={require("../../assets/new-image/icon-three-dot.png")}
              />
            </Pressable>
          </View>
        </View>
      ),
      tabBarIcon: ({ focused, color, size }) => {
        return focused ? (
          <Image source={imageFocus} style={{ width: 24, height: 24 }} />
        ) : (
          <Image source={image} style={{ width: 24, height: 24 }} />
        );
      },
      tabBarStyle: {
        height: 60,
      },
    };
  };

  const options = (image, imageFocus) => {
    return {
      tabBarIcon: ({ focused, color, size }) => {
        return focused ? (
          <Image source={imageFocus} style={{ width: 24, height: 24 }} />
        ) : (
          <Image source={image} style={{ width: 24, height: 24 }} />
        );
      },
      tabBarStyle: {
        height: 60,
      },
      headerTitleStyle: {
        fontWeight: "700",
        fontSize: 16,
      },
    };
  };

  const screenOptions = {
    tabBarActiveTintColor: "#43C621",
    headerTitleAlign: "center",
  };

  return (
    <>
      
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={optionsHomePage(images[1].image, images[1].imageFocus)}
        />
        <Tab.Screen
          name="Phone Mining"
          component={MiningScreen}
          options={options(images[2].image, images[2].imageFocus)}
        />
        <Tab.Screen
          name="Stake"
          component={StakeScreen}
          options={options(images[2].image, images[2].imageFocus)}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletScreen}
          options={options(images[0].image, images[0].imageFocus)}
        />
        {/* <Tab.Screen name="Stake" component={WorkScreen} options={optionsHomePage(images[2].image, images[2].imageFocus)}/> */}
      </Tab.Navigator>
    </>
  );
}
const styles = StyleSheet.create({
  tokenInfo: {
    backgroundColor: "#dbffd1",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#43C621",
    paddingVertical: 3,
    paddingHorizontal: 10,
  },

});
