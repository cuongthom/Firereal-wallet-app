import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

export default function InputComponent({
    value,
    setValue,
    placeholder,
    keyboardType = "default",
    borderWidth = 1,
    borderRadius = 12,
    paddingHorizontal = 16,
    paddingVertical = 12,
    placeholderTextColor = "#C1C4CD",
    styleProps,
}) {
    const [isFocused, setIsFocused] = useState(false);
    const handleClearText = () => {
        setValue("");
    };
    return (
        <View
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={[
                {
                    borderColor: isFocused ? "#1F212D" : "#E8EAED",
                    borderWidth,
                    borderRadius,
                    paddingHorizontal,
                    paddingVertical,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                },
                styleProps,
            ]}>
            <TextInput
                value={value}
                onChangeText={(text) => setValue(text)}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                keyboardType={keyboardType}
            />
            {value !== "" && (
                <TouchableOpacity onPress={handleClearText}>
                    <Image
                        source={require("../../assets/new-image/close-icon.png")}
                        style={{ width: 20, height: 20 }}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}
