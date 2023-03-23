import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from "../../screens/about/AboutScreen";
import BlockChainTabs from "./BlockChainTabs";
import WelcomeScreen from "../../screens/welcome/WelcomeScreen";
import SignInScreen from "../../screens/auth/SignInScreen";
import SignUpScreen from "../../screens/auth/SignUpScreen";
import ResetPasswordScreen from "../../screens/auth/ResetPasswordScreen";
import PhoneNumberScreen from "../../screens/auth/PhoneNumberScreen";
import EnableLocalAuthenScreen from "../../screens/auth/EnableLocalAuthenScreen";
import SelectCountryScreen from "../../screens/auth/SelectCountryScreen";
import SelectReasonScreen from '../../screens/auth/SelectReasonScreen';
import CreateYourPinScreen from '../../screens/auth/CreateYourPinScreen';
import ChooseYourCardScreen from '../../screens/auth/ChooseYourCardScreen';
import UploadIdCardScreen from '../../screens/auth/UploadIdCardScreen';
import UploadPhotoSignatureScreen from '../../screens/auth/UploadPhotoSignatureScreen';
import VerifySuccessScreen from '../../screens/auth/VerifySuccessScreen';
import ScanQRCodeScreen from '../../screens/transfer-offchain/ScanQRCodeScreen';
import NotificationsScreen from "../../screens/notification/NotificationsScreen";
import SettingNotificationScreen from "../../screens/notification/./SettingNotificationScreen";
import MyQRCodeScreen from '../../screens/transfer-offchain/MyQRCodeScreen';
import InputCodeScreen from '../../screens/transfer-offchain/InputCodeScreen';
import TopupBalanceScreen from '../../screens/transfer-offchain/TopupBalanceScreen';
import TopupBalanceConfirmScreen from '../../screens/transfer-offchain/TopupBalanceConfirmScreen';
import TopupBalanceSuccessScreen from '../../screens/transfer-offchain/TopupBalanceSuccessScreen';
import TransferBalanceScreen from '../../screens/transfer-onchain/TransferBalanceScreen';
import HomeScreen from '../../screens/HomeScreen';
import MiningScreen from '../../screens/MiningScreen';
import WalletScreen from '../../screens/WalletScreen';
import WorkScreen from '../../screens/WorkScreen';
import DarkMode from '../../screens/setting/DarkMode';
import LoginCuong from '../../screens/welcome/LoginCuong';
const Stack = createNativeStackNavigator();

export default function AppNavigation({navigation}) {
    const NavigationOption = {
        headerShown: false,
    }

    return (
        <Stack.Navigator screenOptions={NavigationOption}>
            <Stack.Screen name="BlockChain" component={BlockChainTabs} />
            <Stack.Screen name="TransferBalance" component={TransferBalanceScreen} />
            <Stack.Screen name="TopupBalance" component={TopupBalanceScreen} />
            <Stack.Screen name="TopupBalanceSuccess" component={TopupBalanceSuccessScreen} />
            <Stack.Screen name="TopupBalanceConfirm" component={TopupBalanceConfirmScreen} />
            <Stack.Screen name="InputCode" component={InputCodeScreen} />
            <Stack.Screen name="ScanQRCode" component={ScanQRCodeScreen} />
            <Stack.Screen name="MyQRCode" component={MyQRCodeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} />
            <Stack.Screen name="ResetPass" component={ResetPasswordScreen} />
            <Stack.Screen name="LocalAuthEnable" component={EnableLocalAuthenScreen} />
            <Stack.Screen name="SelectCountry" component={SelectCountryScreen} />
            <Stack.Screen name="SelectReason" component={SelectReasonScreen} />
            <Stack.Screen name="CreateYourPin" component={CreateYourPinScreen} />
            <Stack.Screen name="ChooseYourCard" component={ChooseYourCardScreen} />
            <Stack.Screen name="UploadIdCard" component={UploadIdCardScreen} />
            <Stack.Screen name="UploadPhotoSignature" component={UploadPhotoSignatureScreen} />
            <Stack.Screen name="VerifySuccess" component={VerifySuccessScreen} />
            <Stack.Screen name="Notification" component={NotificationsScreen}/>
            <Stack.Screen name="SettingNotification" component={SettingNotificationScreen}/>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Mining" component={MiningScreen} />
            <Stack.Screen name="wallet" component={WalletScreen} />
            <Stack.Screen name="Work" component={WorkScreen} />
            <Stack.Screen name="DarkMode" component={DarkMode} />
            <Stack.Screen name="LoginCuong" component={LoginCuong} />
        </Stack.Navigator>
    );
}
