import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import { darkMode,st } from "../../config/Constant";
import { useConnection } from "../../config/redux/connection";
export default function CountryButton(
    {
        name = "Singapore",
        src = require('../../assets/new-image/flag-singapore.png'),
        onPress = () => {},
    }
) {
    const {connection} = useConnection()
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <View style={styles.blockLeft}>
                <Image source={src} />
                <Text style={[connection.DarkMode === false ? styles.countryName : st.textWhite,st.fs16,
        st.fw600, st.pl1]}>{name}</Text>
            </View>
            <View style={styles.blockRight}>
                <Image source={require('../../assets/new-image/chevron-forward-outline.png')} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 56,
        borderRadius: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E8EAED',
        marginBottom: 5,
        marginTop: 5,
    },
    blockLeft: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: '5%'
    },
    countryName: {
        
        color: '#061237',
        
    },
    blockRight: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: '2%'
    },
});
