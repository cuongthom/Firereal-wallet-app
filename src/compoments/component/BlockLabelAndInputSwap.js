import LabelInputSwap from "./LabelInputSwap";
import {StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";
import DropDownPicker from "react-native-dropdown-picker";
import {useSelector} from "react-redux";
import {windowWidthSelector} from "../../config/redux/Selector";

export default function BlockLabelAndInputSwap(
    {
        value,
        onChangeText = () => {
        },
        text = "From",
        balance = 0,
        valueDropDown = "",
        itemsDropDown = [],
        onChangeValueDropDown = () => {

        },
        onChangeItemDropDown = () => {

        }
    }
) {

    const [focusInput, setFocusInput] = useState(false);
    const [open, setOpen] = useState(false);
    const screenWidth = useSelector(windowWidthSelector)

    const handleFocus = () => {
        setFocusInput(true);
    }

    const handleBlur = () => {
        setFocusInput(false);
    }

    return (
        <View>
            <LabelInputSwap text={text} balance={balance}/>
            <View style={ [styles.container, focusInput ? styles.inputFocus : null]}>
                <View style={styles.dropdownBlock}>
                    <DropDownPicker
                        open={open}
                        value={valueDropDown}
                        items={itemsDropDown}
                        setOpen={setOpen}
                        setValue={onChangeValueDropDown}
                        setItems={onChangeItemDropDown}
                        style={styles.dropdown}
                        dropDownContainerStyle={[styles.dropdownContainer, {width: (screenWidth * 0.9) - 24}]}
                    />
                </View>
                <TextInput
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={(value) => {
                        onChangeText(value);
                    }}
                    placeholder={'Select a token'}
                    style={[styles.input]}
                    value={value}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: '#ffffff',
        marginVertical: 10,
        borderRadius: 10,
        zIndex: 2
    },
    input: {
        flexBasis: "70%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 10,
    },
    inputFocus: {
        borderColor: "#43C621",
        borderWidth: 1,
    },
    dropdownBlock: {
        borderWidth: 0,
        flexBasis: "30%",
    },
    dropdown: {
        borderWidth: 0,
        borderRightWidth: 1,
        borderColor: '#D3D5DA',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    image: {
        width: 30,
        height: 30,
    },
    dropdownContainer: {
        borderWidth: 0,
        borderRadius: 0,
    }
});
