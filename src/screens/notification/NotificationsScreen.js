import {StyleSheet, View, Text} from "react-native";
import ScreenHeader from "../../compoments/component/ScreenHeader";
import Notification from "../../compoments/component/Notification";
import {st,darkMode} from "../../config/Constant";
import {navigate} from "../../config/navigator/RootNavigation";
import { useConnection } from "../../config/redux/connection";

export default function NotificationsScreen({navigation}) {
    const goToSettingNotification = () => {
        navigate('SettingNotification');
    }
    const {connection} = useConnection()
    return (
        <View style={[connection.DarkMode === false
            ? styles.container
            : darkMode.bgImageDark,st.height100]}>
            <View>
                <ScreenHeader title={"Notifications"} navigation={navigation} headerRight={require('../../assets/new-image/setting-icon.png')} onPressHeaderRight={goToSettingNotification}/>
            </View>
            <View style={[st.alignItemCenter, st.justifyCenter,st.mt2]}>
                <Notification title={"New Financer merchant alert! Tap, find your fav & transfer now"}  createEd={"Dec 23, 10:32 AM"} icon={require('../../assets/new-image/icon-notification-fireal.png')}/>
                <Notification title={"Thanks for using the financer! Help us become better by filling out..."} createEd={"Dec 23, 10:32 AM"} icon={require('../../assets/new-image/icon-notification-fireal-black.png')} readed={true}/>
                <Notification title={"New Financer merchant alert! Tap, find your fav & transfer now"} createEd={"Dec 23, 10:32 AM"} icon={require('../../assets/new-image/icon-notification-send.png')}/>
                <Notification title={"New Financer merchant alert! Tap, find your fav & transfer now"} createEd={"Dec 23, 10:32 AM"} icon={require('../../assets/new-image/icon-notification-fireal-purple.png')}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
