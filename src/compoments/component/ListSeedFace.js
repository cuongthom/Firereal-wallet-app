import {StyleSheet, Text, View} from "react-native";

export default function ListSeedFace({data = [], indexStart = 0}) {
    return (
        <>
            {
                data.map((item, index) => (
                    <View style={styles.container} key={index}>
                        <View style={styles.indexView}>
                            <Text style={styles.text}>{index + indexStart}.</Text>
                        </View>
                        <View style={styles.keyView}>
                            <Text style={[styles.key, styles.text]}>{item}</Text>
                        </View>
                    </View>
                ))
            }
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

    },
    text: {
        lineHeight: 35,
        fontSize: 18,
    },
    key: {
        fontWeight: '600'
    },
    indexView: {

    },
    keyView: {

    }
});
