import { View, Text, Image } from "react-native";
import { Button } from "../../components/ui/Button";

import logo from "../../assets/eco-kiddo.png";
import { Spinner } from "../../components/ui/Spinner";

export function StartScreen({ navigation }) {
  return (
    <>
      {/* <Spinner /> */}
      <View className="h-full bg-white dark:bg-black">
        <View className="flex-1 items-center justify-center px-6">
          <View className="">
            <Image className="h-96 w-96" source={logo} />
          </View>
          <View className="mb-2">
            <Button
              title="Sign in"
              onPress={() => {
                navigation.navigate("login");
              }}
            />
          </View>
          <View>
            <Button
              type="ghost"
              title="Create an Account"
              onPress={() => {
                navigation.navigate("create-account");
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}
