import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import LoginForm from "../../components/login/LoginForm";
import { Button } from "../../components/ui/Button";
import logo from "../../assets/eco-kiddo.png";

export function LoginScreen({ navigation }) {
  return (
    <>
      <KeyboardAvoidingView className="h-full bg-white" behavior="padding">
        <View className="flex-1 justify-center items-center px-6">
          <View className="">
            <Image className="h-96 w-96" source={logo} />
          </View>
          {/* </View> */}
          {/* <View className=""> */}
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
