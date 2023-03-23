import {Text, View, Animated, Easing, Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get('screen');

export default function SlideItem({item}) {
    const translateYImage = new Animated.Value(40);

    Animated.timing(translateYImage, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.bounce,
    }).start();

    return (
        <View style={styles.container}>
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

            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
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
        width: '100%',
    },
    content: {
        flex: 0.5,
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
        color: '#061237',
        textAlign: 'center',
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
    },
});
