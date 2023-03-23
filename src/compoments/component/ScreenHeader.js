import {View, Text, StyleSheet, Image, Pressable, Button} from "react-native";
import {st} from "../../config/Constant";

export default function ScreenHeader(
    {
        title,
        navigation,
        headerRight,
        onPressHeaderRight,
    }
) {
    const handleBack = () => {
        navigation.goBack();
    }

    return (
        <View style={[styles.container]}>
            <View style={[styles.buttonBack]}>
                <Pressable onPress={handleBack}>
                    <Image source={require('../../assets/new-image/vector-left.png')}/>
                </Pressable>
            </View>
            <View style={[styles.title, st.flexGrow5]}>
                <Text style={[st.textBlack, st.fw700, st.fs16, st.textCenter]}>{title}</Text>
            </View>
            {
                headerRight && (
                    <View style={[styles.buttonRight]}>
                        <Pressable onPress={onPressHeaderRight}>
                            <Image source={headerRight}/>
                        </Pressable>
                    </View>
                )
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        height: 70,
        position: 'relative',
    },
    buttonBack: {
        position: 'absolute',
        top: 29,
        left: '5%',
        zIndex: 1,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonRight: {
        position: 'absolute',
        top: 25,
        right: '5%',
    }
});
