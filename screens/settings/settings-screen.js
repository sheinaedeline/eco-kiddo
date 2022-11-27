import { View, Text } from "react-native";
import { Button } from "../../components/ui/Button";

export function SettingsScreen({ navigation }) {
  return (
    <>
      <View className="h-full bg-white dark:bg-black">
        <View className="flex-1 items-center justify-center p-3">
          <Text className="text-xl mb-2">Settings Screen</Text>
          {/* <View className="mb-2">
            <Button
              title="Login"
              onPress={() => {
                navigation.navigate("login");
              }}
            />
          </View> */}
        </View>
      </View>
    </>
  );
}
