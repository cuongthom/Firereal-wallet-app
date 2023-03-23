import { Camera, CameraType, FlashMode } from "expo-camera";
import { useEffect, useState } from "react";
import {
    Image,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import ButtonTakeImage from "../../compoments/button/ButtonTakeImage";

export default function UploadIdCardScreen({ navigation }) {
    const [camera, setCamera] = useState(null);
    const [flashMode, setFlashMode] = useState(FlashMode.off);
    const [cameraType, setCameraType] = useState(CameraType.back);
    const [captureImage, setCaptureImage] = useState(null);

    const [startCamera, setStartCamera] = useState(false);
    const backToOldScreen = () => {
        navigation.goBack();
    };

    return startCamera ? (
        <Camera
            style={{ width: "100%", height: "100%" }}
            ref={(r) => {
                setCamera(r);
            }}
            type={cameraType}
            flashMode={flashMode}
        >
            <View style={styles.buttonFooter}>
                <ButtonTakeImage
                    camera={camera}
                    setStartCamera={setStartCamera}
                    flashMode={flashMode}
                    setFlashMode={setFlashMode}
                    cameraType={cameraType}
                    setCameraType={setCameraType}
                    setCaptureImage={setCaptureImage}
                    startCamera={startCamera}
                />
            </View>
        </Camera>
    ) : (
        <ImageBackground
            source={require("../../assets/new-image/upload-id-card-background-screen.png")}
            resizeMode="cover"
            style={styles.backgroundImage}
            blurRadius={8}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Pressable onPress={backToOldScreen}>
                            <Image
                                source={require("../../assets/new-image/vector-left-white.png")}
                                style={styles.image}
                            />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.body}>
                    {captureImage ? (
                        <Image
                            source={{ uri: captureImage && captureImage.uri }}
                                style={styles.imageCard}
                                
                        />
                    ) : (
                        <View style={styles.card}>
                            <View style={styles.topCard}>
                                <View>
                                    <Image
                                        source={require("../../assets/new-image/avatar-id-card.png")}
                                        style={styles.avatarCard}
                                    />
                                </View>
                                <View style={styles.toprightCard}>
                                    <View
                                        style={{
                                            width: "60%",
                                            height: 25,
                                            backgroundColor: "#E8EAED",
                                            borderRadius: 4,
                                            marginBottom: 10,
                                        }}></View>
                                    <View
                                        style={{
                                            width: "30%",
                                            height: 20,
                                            backgroundColor: "#E8EAED",
                                            borderRadius: 4,
                                            marginBottom: 10,
                                        }}></View>
                                    <View
                                        style={{
                                            width: "50%",
                                            height: 20,
                                            backgroundColor: "#E8EAED",
                                            borderRadius: 4,
                                        }}></View>
                                </View>
                            </View>
                            <View style={styles.divider}></View>
                            <View style={styles.bottomCard}>
                                <View style={{ width: "100%" }}>
                                    <View
                                        style={{
                                            width: "50%",
                                            height: 25,
                                            backgroundColor: "#E8EAED",
                                            borderRadius: 4,
                                            marginBottom: 10,
                                        }}></View>
                                    <View
                                        style={{
                                            width: "30%",
                                            height: 15,
                                            backgroundColor: "#E8EAED",
                                            borderRadius: 4,
                                            marginBottom: 10,
                                        }}></View>
                                </View>
                                <Image
                                    source={require("../../assets/new-image/singapore.png")}
                                />
                            </View>
                        </View>
                    )}
                    <Text style={styles.title}>Front of Card</Text>
                    <Text style={styles.description}>
                        Position all 4 corners of the front clearly in the frame
                        and remove any cover
                    </Text>
                    <View style={styles.buttonFooter}>
                        <ButtonTakeImage
                            camera={camera}
                            setStartCamera={setStartCamera}
                            flashMode={flashMode}
                            setFlashMode={setFlashMode}
                            cameraType={cameraType}
                            setCameraType={setCameraType}
                            setCaptureImage={setCaptureImage}
                            startCamera={startCamera}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(6, 18, 55, 0.6)",
    },
    backgroundImage: {
        flex: 1,
    },
    header: {
        flex: 0.2,
        paddingStart: 30,
        paddingTop: 30,
    },
    body: {
        flex: 0.8,
        alignItems: "center",
        paddingStart: 30,
        paddingEnd: 30,
    },
    card: {
        width: "100%",
        height: "40%",
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    imageCard: {
        width: "100%",
        height: "40%",
        borderRadius: 12,
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    topCard: {
        flex: 0.6,
        flexDirection: "row",
        alignItems: "center",
    },
    avatarCard: {
        width: 100,
        height: 100,
    },
    toprightCard: {
        marginStart: 20,
        width: "100%",
    },
    bottomCard: {
        flex: 0.4,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 15,
    },
    divider: {
        width: "100%",
        borderColor: "#E8EAED",
        borderWidth: 1,
        marginVertical: 10,
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 32,
        fontFamily: "Manrope",
        marginTop: 40,
        textAlign: "center",
    },
    description: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 19,
        fontFamily: "Manrope",
        marginTop: 10,
        textAlign: "center",
        letterSpacing: 0.2,
        paddingHorizontal: 20,
    },
    buttonFooter: {
        width: "100%",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
});
