import {Animated, Dimensions, Easing, StyleSheet, Text, View} from "react-native";
const {width, height} = Dimensions.get('screen');

export default function SlideItemLocalAuth({item}) {
    const translateYImage = new Animated.Value(40);

    Animated.timing(translateYImage, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.bounce,
    }).start();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <Animated.Image
                source={item.img}
                resizeMode="contain"
                style={[
                    styles.image,
                    {
                        transform: [
                            {
                                translateY: translateYImage,
                            },
                        ],
                    },
                ]}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
    },
    image: {
        flex: 0.5,
        width: '60%',

    },
    content: {
        flex: 0.1,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        lineHeight: 38,
        color: '#061237',
        fontFamily: 'Manrope',
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        marginVertical: 12,
        lineHeight: 19,
        color: '#6A7187',
        textAlign: 'center',
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
    },
});
