import { View } from "react-native";

export default function ViewBorder({
    children,
    paddingHorizontal = 16,
    paddingVertical = 12,
    borderWidth = 1,
    borderRadius = 12,
    backgroundColor = "#fff",
    marginVertical = 0,
    marginHorizontal = 0,
    styleProps,
    ...props
}) {
    return (
        <View
            style={[
                {
                    paddingHorizontal,
                    paddingVertical,
                    borderRadius,
                    borderWidth,
                    backgroundColor,
                    marginVertical,
                    marginHorizontal,
                },
                styleProps,
            ]}
            {...props}>
            {children}
        </View>
    );
}
