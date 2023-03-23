import {Pressable, StyleSheet, Text, View} from "react-native";
import {useState} from "react";

export default function StepIndicator(
    {
        totalSteps = 5,
    }
) {
    const [step, setStep] = useState(0);
    const onChangeStep = (step) => {
        setStep(step);
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {
                    Array.from({length: totalSteps}, (_, index) => (
                        <View style={styles.blockDot} key={index}>
                            <Pressable style={step === index ? styles.currentDot : styles.dot} onPress={() => onChangeStep(index)}/>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 20
    },
    content: {
        flexDirection: 'row',
        height: 15,
        backgroundColor: '#F4F4F6',
        borderRadius: 10,
        width: '90%'
    },
    blockDot: {
        flexGrow: 1,
        alignItems: 'center'
    },
    dot: {
        backgroundColor: '#D3D5DA',
        width: 15,
        height: 15,
        borderRadius: 50,
    },
    currentDot: {
        backgroundColor: '#43C621',
        width: 15,
        height: 15,
        borderRadius: 50,
    }
});
