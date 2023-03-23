import {Pressable, StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import ButtonAndIcon from "../button/ButtonAndIcon";

export default function Navbar(
    {
        selected = 0,
        titles = ['Home', 'Profile', 'Settings'],
        components = [],
        icons = null,
        marginTop = 20,
    }
)
{
    const [selectedTab, setSelectedTab] = useState(selected);

    const changeTabSelected = (index) => {
        setSelectedTab(index)
    }

    return (
        <View>
            <View style={[styles.container, {marginTop}]}>
                {
                    titles.map((item, index) => (
                        <Pressable
                            style={[styles.tab, index === selectedTab ? styles.selected : null]}
                            key={index}
                            onPress={() => changeTabSelected(index)}
                        >
                            <ButtonAndIcon
                                icon={icons !== null ? icons[index] : null}
                                text={item}
                                iconColor={index === selectedTab ? "black" : "#828282"}
                                textColor={index === selectedTab ? "black" : "#828282"}
                                fontSize={12}
                                onPress={() => changeTabSelected(index)}
                            />
                        </Pressable>
                    ))
                }
            </View>
            {
                components[selectedTab]
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: '#F4F4F6',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    tab: {
        flexGrow: 1,
        borderRadius: 15,
        backgroundColor: '#F4F4F6',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
    },
    selected: {
        backgroundColor: '#fff',
    },
});
