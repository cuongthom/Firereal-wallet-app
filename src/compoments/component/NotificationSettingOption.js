import {st, darkMode} from "../../config/Constant";
import {StyleSheet, Switch, Text, View} from "react-native";
import {useState} from "react";
import { useConnection } from "../../config/redux/connection";

export default function NotificationSettingOption(
    {
        title = "Notification title",
        description = "Notification description",
    }
) {
    const {connection} = useConnection()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={[connection.DarkMode === false
            ? styles.settingOption
            : darkMode.bgIconDark, st.pv3Percent, st.ph3Percent, st.justifySpaceBetween, st.flexRow, st.alignItemCenter, st.mt1,st.borderRa10, st.width90]}>
            <View>
                <Text style={[connection.DarkMode === false
            ? st.textBlack
            : st.textWhite,st.fw700, st.fs14, ]}>{title}</Text>
                <Text style={[st.fw400, st.fs12, st.textGray]}>{description}</Text>
            </View>
            <View>
                <Switch
                    trackColor={{false: '#E8EAED', true: '#43C621'}}
                    thumbColor={isEnabled ? '#fff' : '#fff'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    settingOption: {
        
        backgroundColor: '#F7F9FC',
       
    }
});
