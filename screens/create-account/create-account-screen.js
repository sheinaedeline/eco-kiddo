import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { Button } from "../../components/ui/Button";
import logo from "../../assets/eco-kiddo.png";
import CreateAccountForm from "../../components/create-account/CreateAccountForm";

export function CreateAccountScreen({ navigation }) {
  return (
    <>
      <KeyboardAvoidingView
        className="h-full bg-white dark:bg-black"
        behavior="padding"
      >
        <View className="flex-1 justify-center items-center px-6">
          <View className="">
            <Image className="h-80 w-80" source={logo} />
          </View>
          <CreateAccountForm />
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
