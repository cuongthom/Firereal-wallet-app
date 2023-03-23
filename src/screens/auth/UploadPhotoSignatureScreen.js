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

export default function UploadPhotoSignatureScreen({ navigation }) {
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
            flashMode={flashMode}>
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
                            <View>
                                <Image
                                    style={styles.signature}
                                    source={require("../../assets/new-image/signature.png")}
                                />
                            </View>
                        </View>
                    )}
                    <Text style={styles.description}>
                        Make sure your signature clearly shows your card
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
        backgroundColor: "rgba(16, 57, 6, 0.6)",
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
    },
    imageCard: {
        width: "100%",
        height: "40%",
        borderRadius: 12,
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    signature: {
        width: "100%",
        height: "100%",
    },
    description: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 19,
        fontFamily: "Manrope",
        marginTop: 30,
        textAlign: "center",
        letterSpacing: 0.2,
        paddingHorizontal: 20,
        textAlign: "center",
    },
    buttonFooter: {
        width: "100%",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
});
