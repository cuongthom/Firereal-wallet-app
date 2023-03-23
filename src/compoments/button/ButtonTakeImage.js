import { Camera, FlashMode, CameraType } from "expo-camera";
import {
    Image,
    Pressable,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";

export default function ButtonTakeImage({
    camera,
    setFlashMode,
    setCameraType,
    setStartCamera,
    flashMode,
    cameraType,
    setCaptureImage,
    startCamera,
}) {
    const handleTurnOnFlashlight = () => {
        if (flashMode === "off") {
            setFlashMode("on");
        } else {
            setFlashMode("off");
        }
    };
    const handleChangeCameraType = () => {
        if (cameraType === "back") {
            setCameraType("front");
        } else {
            setCameraType("back");
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
    const handleTakePicture = async () => {
        if (!camera) return;
        const photo = await camera.takePictureAsync();
        setStartCamera(false);
        setCaptureImage(photo);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.functionButton}
                onPress={handleTurnOnFlashlight}>
                {flashMode === "off" ? (
                    <Image
                        source={require("../../assets/new-image/bolt-on.png")}
                        style={styles.image}
                    />
                ) : (
                    <Image
                        source={require("../../assets/new-image/bolt-off.png")}
                        style={styles.image}
                    />
                )}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={!startCamera ? handleStartCamera : handleTakePicture}>
                <View style={styles.takeImageButton}>
                    <View style={styles.takeImageButtonBorder}></View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.functionButton}
                onPress={handleChangeCameraType}>
                <Image
                    source={require("../../assets/new-image/camera-reverse.png")}
                    style={styles.image}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-end",
        marginBottom: 50,
        justifyContent: "space-around",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "transparent",
    },
    functionButton: {
        width: 50,
        height: 50,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 1000,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 17,
        height: 17,
    },
    takeImageButton: {
        width: 65,
        height: 65,
        backgroundColor: "#fff",
        borderRadius: 1000,
        position: "relative",
    },
    takeImageButtonBorder: {
        position: "absolute",
        width: 75,
        height: 75,
        left: -5,
        top: -5,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "rgba(255, 255, 255, 0.2)",
    },
});
