import { Camera, CameraType, FlashMode } from "expo-camera";
import { useState } from "react";
import {
    Image,
    ImageBackground,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import ButtonTakeImage from "../../compoments/button/ButtonTakeImage";
import ScanQRCodeComponent from "../../compoments/component/ScanQRCodeComponent";
import { darkMode, st } from "../../config/Constant";
import { navigate } from "../../config/navigator/RootNavigation";
import { useConnection } from "../../config/redux/connection";

export default function ScanQRCodeScreen({ navigation }) {
    const {connection} = useConnection()
    const [searchInput, setSearchInput] = useState("");
    const [camera, setCamera] = useState(null);
    const [isFocused, setIsFocused] = useState(false);
    const [flashMode, setFlashMode] = useState(FlashMode.off);
    const [cameraType, setCameraType] = useState(CameraType.back);
    const [startCamera, setStartCamera] = useState(false);
    const [QRCodeImage, setQRCodeImage] = useState(null);
    const handleAddPhotoFromGalery = () => {};
    const handleTurntoggleFlash = () => {
        if (flashMode === "on") {
            setFlashMode("off");
        } else {
            setFlashMode("on");
        }
    };
    const handleStartCamera = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status === "granted") {
            setStartCamera(true);
        } else {
            alert("Permission to access camera is required!");
        }
    };
    const handleBarCodeScanned = ({ type, data }) => {
        console.log("data", data);
        console.log("type", type);
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/new-image/scan-qr-code-background-screen.png")}
                style={styles.backgroundImage}
                blurRadius={4}>
                <View style={styles.overlay}>
                    <View style={styles.header}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Image
                                source={require("../../assets/new-image/vector-left-white.png")}
                            />
                        </Pressable>
                        <View style={styles.headerRight}>
                            <Pressable onPress={handleAddPhotoFromGalery}>
                                <Image
                                    source={require("../../assets/new-image/upload-photo-galery.png")}
                                />
                            </Pressable>
                            <Pressable
                                style={{ marginLeft: 20 }}
                                onPress={handleTurntoggleFlash}>
                                {flashMode === "on" ? (
                                    <Image
                                        source={require("../../assets/new-image/bolt-off.png")}
                                    />
                                ) : (
                                    <Image
                                        source={require("../../assets/new-image/bolt-on.png")}
                                        style={{ width: 24, height: 24 }}
                                    />
                                )}
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.body}>
                        {startCamera ? (
                            <Camera
                                style={{
                                    height: 207,
                                    width: 207,
                                }}
                                ref={(r) => {
                                    setCamera(r);
                                }}
                                type={cameraType}
                                flashMode={flashMode}
                                barCodeScannerSettings={{
                                    barCodeTypes: [
                                        BarCodeScanner.Constants.BarCodeType.qr,
                                    ],
                                }}
                                onBarCodeScanned={handleBarCodeScanned}>
                                <View>
                                    <ButtonTakeImage
                                        camera={camera}
                                        setStartCamera={setStartCamera}
                                        flashMode={flashMode}
                                        setFlashMode={setFlashMode}
                                        cameraType={cameraType}
                                        setCameraType={setCameraType}
                                        setCaptureImage={setQRCodeImage}
                                        startCamera={startCamera}
                                    />
                                </View>
                            </Camera>
                        ) : (
                            <Pressable onPress={handleStartCamera}>
                                <Image
                                    source={require("../../assets/new-image/scan.png")}
                                />
                            </Pressable>
                        )}
                    </View>
                    <View style={[connection.DarkMode === false ? styles.footer : styles.footerDarkMode]}>
                        <View style={styles.topModal}>
                            <Text
                                style={[
                                    st.fw700,
                                    st.fs16,
                                    st.lh22,
                                    st.ls2,
                                    { color: "#061237" },
                                ]}>
                                Payment
                            </Text>
                            <Text
                                style={[
                                    st.fw700,
                                    st.fs14,
                                    st.lh19,
                                    st.ls2,
                                    st.textBlueLight,
                                ]}>
                                Input Code
                            </Text>
                        </View>
                        <View style={styles.selectBox}>
                            <View style={styles.selectedButton}>
                                <Text
                                    style={[
                                        st.fw700,
                                        st.fs12,
                                        st.lh16,
                                        st.ls3,
                                        { color: "#1F212D" },
                                    ]}>
                                    Scan QR
                                </Text>
                            </View>
                            <Pressable
                                onPress={() => navigate("MyQRCode")}
                                style={styles.unselectedButton}>
                                <Text
                                    style={[
                                        st.fw400,
                                        st.fs12,
                                        st.lh16,
                                        st.ls3,
                                        { color: "#83899B" },
                                    ]}>
                                    My QR code
                                </Text>
                            </Pressable>
                        </View>
                        <View
                            style={[
                                styles.searchBox,
                                {
                                    borderColor: isFocused
                                        ? "#1F212D"
                                        : "#E8EAED",
                                },
                            ]}>
                            <Image
                                source={require("../../assets/new-image/contact.png")}
                                style={{ marginRight: 10 }}
                            />
                            <TextInput
                                placeholder="Search phonebook"
                                value={searchInput}
                                onChangeText={(text) => setSearchInput(text)}
                                editable
                                underlineColorAndroid="transparent"
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                            />
                            {searchInput !== "" && (
                                <Pressable
                                    onPress={() => setSearchInput("")}
                                    style={{
                                        flex: 1,
                                        justifyContent: "center",
                                        alignItems: "flex-end",
                                    }}>
                                    <Image
                                        source={require("../../assets/new-image/close-icon.png")}
                                        style={{ width: 20, height: 20 }}
                                    />
                                </Pressable>
                            )}
                        </View>
                        <ScrollView style={{ height: "20%" }}>
                            <ScanQRCodeComponent />
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#43C621",
        fontFamily: "Manrope",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(6, 18, 55, 0.5)",
    },
    header: {
        flex: 0.15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
    },
    headerRight: {
        flexDirection: "row",
    },
    body: {
        flex: 0.85,
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        justifyContent: "flex-end",
        backgroundColor: "#fff",
        marginHorizontal: 16,
        borderRadius: 32,
        paddingTop: 30,
        paddingBottom: 16,
        marginBottom: 30,
    },
    footerDarkMode: {
        justifyContent: "flex-end",
        backgroundColor: "#061237",
        marginHorizontal: 16,
        borderRadius: 32,
        paddingTop: 30,
        paddingBottom: 16,
        marginBottom: 30,
    },
    topModal: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
    },
    selectBox: {
        marginTop: 20,
        marginHorizontal: 24,
        backgroundColor: "#F7F9FC",
        borderRadius: 12,
        padding: 4,
        flexDirection: "row",
    },
    selectedButton: {
        flex: 0.5,
        backgroundColor: "#fff",
        borderRadius: 8,
        boxShadow: "1px 2px 12px rgba(17, 24, 39, 0.03)",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
    },
    unselectedButton: {
        flex: 0.5,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        backgroundColor: "transparent",
    },
    searchBox: {
        marginHorizontal: 24,
        borderWidth: 1,
        marginTop: 16,
        borderRadius: 12,
        paddingStart: 16,
        paddingEnd: 10,
        paddingVertical: 12,
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: 0.2,
        flexDirection: "row",
        alignItems: "center",
    },
});
