import {View, Text, StyleSheet, Image, ScrollView, Pressable} from "react-native";
import {useState} from "react";
import {countryList} from "../../../config/Constant";
import ButtonLarge from "../../../compoments/button/ButtonLarge";
import {useConnection} from "../../../config/redux/connection";

export default function SelectCountry() {
    const {onSetVisibleModalHalfScreen, onSetVisibleModalFullScreen, onSetCurrentModalFull} = useConnection();
    const [selectedCountry, setSelectedCountry] = useState(null);

    const closeModal = () => {
        onSetVisibleModalHalfScreen(false);
        onSetVisibleModalFullScreen(false);
        onSetCurrentModalFull(0);
    }

    const handleSelectCountry = (country) => {
        setSelectedCountry(country)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Select Country</Text>
                </View>
                <View>
                   <Pressable onPress={closeModal}>
                       <Image source={require('../../../assets/new-image/close-icon.png')} style={styles.iconClose}/>
                   </Pressable>
                </View>
            </View>
            <View style={styles.body}>
                <ScrollView>
                    {
                        countryList.map((item, index) =>(
                            <Pressable style={styles.button} onPress={() => handleSelectCountry(item.name)} key={index}>
                                <View style={styles.blockLeft}>
                                    <Image source={item.image} />
                                    <Text style={styles.countryName}>{item.name}</Text>
                                </View>
                                <View style={styles.blockRight}>
                                    {
                                        item.name === selectedCountry ? (
                                            <Image source={require('../../../assets/new-image/radios-checked.png')} />
                                        ) : (
                                            <Image source={require('../../../assets/new-image/radios.png')} />
                                        )
                                    }
                                </View>
                            </Pressable>
                        ))
                    }
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <ButtonLarge
                    text={"Save"}
                    width={"90%"}
                    paddingVertical={15}
                    fontSize={18}
                    elevation={0}
                    borderRadius={15}
                    textColor={"#fff"}
                    backgroundColor={"#1F212D"}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "100%",
    },
    header: {
        flexGrow: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 70,
        borderBottomWidth: 1,
        borderColor: '#E8EAED',
    },
    title: {
        fontWeight: '700',
        fontSize: 16,
        paddingLeft: '5%',
    },
    iconClose: {
      paddingRight: '10%',
    },
    body: {
        flexGrow: 5,
        width: '90%',
        height: 300,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    footer: {
        flexGrow: 2,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 100
    },
    button: {
        width: '100%',
        height: 56,
        borderRadius: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E8EAED',
        marginBottom: 5,
        marginTop: 5,
    },
    blockLeft: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: '5%'
    },
    countryName: {
        paddingLeft: '2%',
        color: '#061237',
        fontSize: 16,
        fontWeight: '400'
    },
    blockRight: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: '2%'
    },
});
