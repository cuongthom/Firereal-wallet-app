import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {st} from "../../config/Constant";

export default function     NavigationBox() {
    return (
        <View style={styles.optionsBlock}>
            <View style={[st.flexGrow1, st.alignItemCenter]}>
                <Pressable >
                    <Image  source={require('../../assets/new-image/icon-send.png')}/>
                </Pressable>
                <Text style={[st.textCenter, st.textGray, st.fw600, st.fs12, st.pt1]}>Send</Text>
            </View>
            <View style={[st.flexGrow1, st.alignItemCenter]}>
                <Pressable>
                    <Image source={require('../../assets/new-image/icon-receive.png')}/>
                </Pressable>
                <Text style={[st.textCenter, st.textGray, st.fw600, st.fs12, st.pt1]}>Receive</Text>
            </View>
            <View style={[st.flexGrow1, st.alignItemCenter]}>
                <Pressable>
                    <Image source={require('../../assets/new-image/icon-widthdraw.png')}/>
                </Pressable>
                <Text style={[st.textCenter, st.textGray, st.fw600, st.fs12, st.pt1]}>Withdraw</Text>
            </View>
            <View style={[st.flexGrow1, st.alignItemCenter]}>
                <Pressable>
                    <Image source={require('../../assets/new-image/icon-more.png')}/>
                </Pressable>
                <Text style={[st.textCenter, st.textGray, st.fw600, st.fs12, st.pt1]}>More</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    optionsBlock: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});
