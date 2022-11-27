import { ActivityIndicator, View } from "react-native";

export function Spinner({ indicatorColour, size = "small" }) {
  return (
    <View className="">
      <ActivityIndicator size={size} color={indicatorColour} />
    </View>
  );
}
