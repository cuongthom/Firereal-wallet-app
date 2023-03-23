import {Pressable, StyleSheet, View} from "react-native";
import ButtonAndIcon from "./ButtonAndIcon";
import {useState} from "react";

export default function ToggleButton(
    {
        selected = 0,
        titles = ['Home', 'Profile', 'Settings'],
        marginTop = 20,
    }
) {
    const [selectedTab, setSelectedTab] = useState(selected);

    const changeTabSelected = (index) => {
        setSelectedTab(index)
    }

    return (
        <View style={[styles.container, {marginTop}]}>
            {
                titles.map((item, index) => (
                    <Pressable
                        style={[styles.tab, index === selectedTab ? styles.selected : null]}
                        key={index}
                        onPress={() => changeTabSelected(index)}
                    >
                        <ButtonAndIcon
                            text={item}
                            fontSize={8}
                            iconColor={index === selectedTab ? "#43C621" : "#83899B"}
                            textColor={index === selectedTab ? "#43C621" : "#83899B"}
                            onPress={() => changeTabSelected(index)}
                        />
                    </Pressable>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: '#1E2848',
        borderRadius: 50,
        height: 27,
        width: 80,
    },
    tab: {
        flexGrow: 1,
        borderRadius: 50,
        backgroundColor: '#1E2848',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#1E2848',
    },
});
