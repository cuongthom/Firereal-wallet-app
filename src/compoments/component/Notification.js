import {StyleSheet, View, Text, Image} from "react-native";
import {st,darkMode} from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";

export default function Notification(
    {
        readed = false,
        title = "Notification title",
        createEd = "2020-01-01 00:00:00",
        icon = require('../../assets/new-image/setting-icon.png'),
    }
) {
    const {connection} = useConnection()
    return (
        <View style={[connection.DarkMode === false
            ? styles.container
            : darkMode.bgImageDark, st.flexRow, st.pv3Percent, st.ph3Percent, st.justifySpaceBetween, readed ? styles.backgroundWhite : styles.backgroundGray]}>
            <View style={[styles.left]}>
                <Text style={[st.fs14, st.fw600, st.textBlack]}>{title}</Text>
                <Text style={[st.fs12, st.fw400, st.pt1]}>{createEd}</Text>
            </View>
            <View style={[styles.right, st.justifyCenter, st.alignItemCenter]}>
                <Image source={icon}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F9FC',
        width: '95%',
    },
    backgroundGray: {
        backgroundColor: '#F7F9FC',
    },
    backgroundWhite: {
        backgroundColor: '#fff',
    },
    left: {
        width: '80%',
    },
    right: {
        width: '20%',
    }
});
