import {StyleSheet, Text, View, ImageBackground, Image} from "react-native";
import StepIndicator from "./StepIndicator";
import ButtonLarge from "../button/ButtonLarge";
import GradientButton from "../button/GradientButton";


export default function ShareHolding() {
    const customStyles = {
        labelSize: 0
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/image/fireal-image-background.png')} resizeMode="cover" style={styles.backgroundImage} imageStyle={styles.borderImage}/>
            <Text style={styles.text}>Cổ tức doanh nghiệp Fireal</Text>
            <View style={styles.blockToken}>
                <View style={styles.imageBlock}>
                    <Image source={require('../../assets/image/icon-frl-gold.png')}/>
                </View>
                <View style={styles.nameBlock}>
                    <Text style={styles.textName}>AUSTRALIA</Text>
                </View>
                <View style={styles.symbolBlock}>
                    <Text style={styles.textSymbol}>$FRL</Text>
                </View>
            </View>
            <View style={styles.blockStep}>
                <View style={styles.step}>
                    <StepIndicator/>
                </View>
                <View style={styles.apy}>
                    <GradientButton text={"50.5%"}/>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    backgroundImage: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
        height: 160,
    },
    borderImage: {
      borderRadius: 10,
    },
    text: {
        fontWeight: '700',
        fontSize: 25,
        paddingVertical: 20,
    },
    blockToken: {
        flexDirection: 'row',
    },
    imageBlock: {
        justifyContent: 'center',
        flexGrow: 1,
    },
    nameBlock: {
        justifyContent: 'center',
        flexGrow: 12,
    },
    symbolBlock: {
        justifyContent: 'center',
        flexGrow: 2,
    },
    textName: {
        fontWeight: '700',
        fontSize: 20,
    },
    textSymbol: {
        fontWeight: '700',
        fontSize: 20,
        color: '#b6b6b7',
    },
    blockStep: {
        flexDirection: 'row',
        marginTop: 10
    },
    step: {
        flexGrow: 15
    },
    apy: {
        flexGrow: 1,
    }
});
