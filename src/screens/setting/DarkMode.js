import React, { useState } from "react";
import { Text, Switch, View, Appearance, StyleSheet } from "react-native";
import { st } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";
import { navigate } from "../../config/navigator/RootNavigation"; 
export default function DarkMode({ navigation }) {
  const { connection, onSetDarkMode } = useConnection();
  return (
    <View style={[st.alignItemCenter]}>
      <Text>DarkMode</Text>
      <Switch
        value={connection.DarkMode}
        onValueChange={(value) => {
          onSetDarkMode(value);
        }}
      />
      <Text
        onPress={() => {
          navigate("LoginCuong");
        }}
      >
        TransferBalance
      </Text>
      <Text
        onPress={() => {
          navigate("SignIn");
        }}
      >
        cuuuuuu
      </Text>
    </View>
  );
}
