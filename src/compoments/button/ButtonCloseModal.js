import {Pressable, StyleSheet} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {useConnection} from "../../config/redux/connection";

export default function ButtonCloseModal() {
    const {onSetCurrentModalFull, onSetVisibleModalFullScreen, onSetVisibleModalHalfScreen} = useConnection();

    const onPress = () => {
        onSetCurrentModalFull(0);
        onSetVisibleModalFullScreen(false);
        onSetVisibleModalHalfScreen(false);
    }

    return (
        <Pressable onPress={onPress} style={styles.buttonClose}>
            <MaterialIcons color={"#6C727F"} name="close" size={30}/>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    buttonClose: {
        position: 'absolute',
        top: 20,
        right: 15,
    },
});
