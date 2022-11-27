import { View, Text} from "react-native";
import { Button } from "../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";

export function PickUpScreen() {
  const navigation = useNavigation();
  return (
    <>
      <View className="h-full bg-white dark:bg-black">
        <View className="flex-1 items-center justify-center p-3">
          <Text className="text-xl mb-2">Pick Up Screen</Text>
          { <Button
            title="Go to material"
            onPress={() => {
              navigation.navigate("material");
            }}
          /> }
        </View>
      </View>
    </>
  );
}
