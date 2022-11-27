import clsx from "clsx";
import { Text, Pressable, View } from "react-native";
import { Spinner } from "./Spinner";

export function Button({
  title,
  onPress,
  type = "primary",
  disabled,
  indicatorColour = "white",
  loading = false,
}) {
  return (
    <>
      <Pressable
        disabled={disabled}
        onPress={onPress}
        className={clsx(
          type === "ghost" ? "bg-white" : "bg-primaryBlu",
          "px-4 py-3 rounded-lg w-full min-w-full items-center border-2 border-primaryBlu"
        )}
      >
        {loading && (
          <View className="flex flex-row items-center">
            <Spinner indicatorColour={indicatorColour} />
            <Text
              className={clsx(
                type === "ghost" ? "text-primaryBlu" : "text-white",
                "font-semibold text-base ml-3"
              )}
            >
              Loading...
            </Text>
          </View>
        )}
        {!loading && (
          <Text
            className={clsx(
              type === "ghost" ? "text-primaryBlu" : "text-white",
              "font-semibold text-base ml-3"
            )}
          >
            {title}
          </Text>
        )}
      </Pressable>
    </>
  );
}
