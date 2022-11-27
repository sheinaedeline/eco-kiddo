import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ErrorMessage({
  errorMessage = "There was an error! Please try again.",
}) {
  return (
    <>
      <View className="rounded-md bg-red-50 p-4">
        <View className="flex flex-row">
          <View className="flex-shrink-0">
            <Ionicons name="information-circle" color="#f87171" size={18} />
          </View>
          <View className="ml-3">
            <View>
              <Text className="text-sm font-medium text-red-800">
                {errorMessage}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
