import { View, Text } from "react-native";
import Profile from "../../components/profile/Profile";
import { Button } from "../../components/ui/Button";

export function ProfileScreen({ navigation }) {
  return (
    <>
      <View className="h-full bg-white dark:bg-black">
        <View className="flex-1 justify-center p-3">
          <Profile />
        </View>
      </View>
    </>
  );
}
