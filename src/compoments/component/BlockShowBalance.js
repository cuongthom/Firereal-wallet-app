import {Image, ImageBackground, StyleSheet, Text, View, Pressable} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ButtonAndIcon from "../button/ButtonAndIcon";
import {useState} from "react";

export default function BlockShowBalance() {
    const [color, setColor] = useState('#fff');
    const [visibilityIcon, setVisibilityIcon] = useState('visibility');

    const handledChangeVisibility = () => {
        if (visibilityIcon === 'visibility') {
            setVisibilityIcon('visibility-off');
        } else {
            setVisibilityIcon('visibility');
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/image/backgroundHeaderWork.png')}
                resizeMode="cover"
                style={styles.backgroundImage}
                imageStyle={styles.borderImage}
            >
                <View style={styles.topBlock}>
                    <Image source={require('../../assets/image/sim.png')} style={styles.image}/>
                    <Text style={styles.text}>BALANCE</Text>
                    <Pressable onPress={handledChangeVisibility}>
                        <MaterialIcons color={"#fff"} name={visibilityIcon} size={14}/>
                    </Pressable>
                </View>
                <View style={styles.centerBlock}>
                    <Text style={styles.balance}>{visibilityIcon === 'visibility' ? "100.000,39 $" : "*******"}</Text>
                </View>
                <View style={styles.endBlock}>
                    <View style={styles.actionBlock}>
                        <ButtonAndIcon text={'Send'} textColor={color} iconColor={color} icon={'arrow-up-circle'}/>
                    </View>
                    <View style={styles.actionBlock}>
                        <ButtonAndIcon text={'Receive'} textColor={color} iconColor={color} icon={'arrow-down-circle'}/>
                    </View>
                    <View style={styles.actionBlock}>
                        <ButtonAndIcon text={'Gswap'} textColor={color} iconColor={color}
                                       icon={'arrow-left-right-bold'}/>
                    </View>
                    <View style={styles.actionBlock}>
                        <ButtonAndIcon text={'Logout'} textColor={color} iconColor={color} icon={'logout'}/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        height: 168,
        marginTop: 30,
    },
    backgroundImage: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
    },
    borderImage: {
      borderRadius: 10,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        paddingHorizontal: "1%"
    },
    topBlock: {
        flexDirection: "row",
        flexGrow: 0.2
    },
    centerBlock: {
        flexGrow: 1,
    },
    balance: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 28
    },
    endBlock: {
        flexGrow: 0.2,
        flexDirection: "row",
        alignItems: 'center',
    },
    actionBlock: {
        flexGrow: 1,
    }
});
