import {StyleSheet, View, Text} from "react-native";
import ScreenHeader from "../../compoments/component/ScreenHeader";
import {st,darkMode} from "../../config/Constant";
import NotificationSettingOption from "../../compoments/component/NotificationSettingOption";
import { useConnection } from "../../config/redux/connection";

export default function SettingNotificationScreen({navigation}) {
    const { connection } = useConnection();
    return (
        <View style={[connection.DarkMode === false
            ? styles.container
            : darkMode.bgImageDark,st.height100]}>
            <View>
                <ScreenHeader title={"Push Notifications"} navigation={navigation} headerRight={null}/>
            </View>
            <View style={[st.alignItemCenter, st.justifyCenter]}>
                <NotificationSettingOption title={"Transactions"} description={"Receive notifications for transactions"}/>
                <NotificationSettingOption title={"Company News"} description={"Receive push notifications for news"}/>
                <NotificationSettingOption title={"Promotion"} description={"Receive push notifications for promotion"}/>
                <NotificationSettingOption title={"Community"} description={"Receive push notifications for community"}/>
            </View>
            <View style={[st.mt2]}>
                <Text style={[st.fs14, st.fw600, st.textGray, st.pl2]}>Social</Text>
                <View style={[st.alignItemCenter, st.justifyCenter]}>
                    <NotificationSettingOption title={"Message"} description={"Get notified from Message Chat"}/>
                    <NotificationSettingOption title={"Email Notification"} description={"Get notified from Email"}/>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
