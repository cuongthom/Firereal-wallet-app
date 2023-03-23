import {useState} from "react";
import {StyleSheet, Text, View, TextInput, Pressable} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export default function TextInputCp(
    {
        value,
        onChangeText = () => {
        },
        placeholderText = "From",
        labelText = "From",
        password = false,
        showIcon = false,
        textError = null,
        rightLabel = null,
        onPressRightLabel = () => {},
        styleRightLabel = {},
    }
) {

    const [focusInput, setFocusInput] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(password);
    const [icon, setIcon] = useState("visibility");

    const handleFocus = () => {
        setFocusInput(true);
    }

    const handleBlur = () => {
        setFocusInput(false);
    }

    const handleIcon = () => {
        if (icon === "visibility") {
            setIcon("visibility-off");
            setSecureTextEntry(false);
        } else {
            setIcon("visibility");
            setSecureTextEntry(true);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.label}>
                <Text style={styles.labelText}>
                    {labelText}
                </Text>
                {
                    rightLabel && (
                        <Text style={[styles.labelText, styleRightLabel]} onPress={onPressRightLabel}>
                            {rightLabel}
                        </Text>
                    )
                }
            </View>
            <View style={styles.sectionStyle}>
                <TextInput
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={(value) => {
                        onChangeText(value);
                    }}
                    placeholder={placeholderText}
                    style={[styles.input, focusInput ? styles.inputFocus : null]}
                    value={value}
                    secureTextEntry={secureTextEntry}
                />
                {
                    showIcon ? (
                        <Pressable style={styles.iconEye} onPress={handleIcon}>
                            <MaterialIcons color={"#6C727F"} name={icon} size={22}/>
                        </Pressable>
                    ) : null
                }
            </View>
            {
                textError ? (
                    <View style={styles.blockTextError}>
                        <Text style={styles.textError}>
                            Error
                        </Text>
                    </View>
                ) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 28,
    },
    input: {
        width: '100%',
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#D3D5DA',
    },
    inputFocus: {
        borderColor: "#43C621",
        borderWidth: 1,
    },
    labelText: {
        fontWeight: 'bold',
        paddingBottom: 5
    },
    sectionStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 50,
        position: 'relative',
    },
    iconEye: {
        position: 'absolute',
        right: 10,
    },
    textError: {
        paddingTop: 8,
        color: '#F06565',
    },
    blockTextError: {
        alignItems: 'center',
    },
    label: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
