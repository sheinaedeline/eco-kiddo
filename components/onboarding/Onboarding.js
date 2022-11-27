import clsx from "clsx";
import { useState } from "react";
import { View, Image, Text, Pressable } from "react-native";
import { Button } from "../ui/Button";

export function Onboarding({
  title,
  description,
  onPress,
  screen,
  image,
  setScreen,
}) {
  return (
    <>
      <View className="flex flex-row h-2/5 items-center justify-center">
        <View className="flex items-center h-96 w-44">
          <Image className="" source={image} />
        </View>
      </View>
      <View className="flex justify-center items-center">
        <View className="mb-4 mt-12">
          <Text className="text-2xl font-bold text-center">{title}</Text>
        </View>
        <View className="mb-8 w-2/3 text-center">
          <Text className="text-gray-500 text-center">{description}</Text>
        </View>
        <View className="w-2/3 mb-8">
          <Button title="Next" onPress={onPress} />
        </View>
        <View className="w-2/3 flex flex-row items-center justify-center space-x-2">
          <Pressable
            onPress={() => setScreen(1)}
            className={clsx(
              screen === 1 ? "bg-black" : "bg-white",
              "h-2 w-2 border border-black rounded-full"
            )}
          ></Pressable>
          <Pressable
            onPress={() => setScreen(2)}
            className={clsx(
              screen === 2 ? "bg-black" : "bg-white",
              "h-2 w-2 border border-black rounded-full"
            )}
          ></Pressable>
          <Pressable
            onPress={() => setScreen(3)}
            className={clsx(
              screen === 3 ? "bg-black" : "bg-white",
              "h-2 w-2 border border-black rounded-full"
            )}
          ></Pressable>
          <Pressable
            onPress={() => setScreen(4)}
            className={clsx(
              screen === 4 ? "bg-black" : "bg-white",
              "h-2 w-2 border border-black rounded-full"
            )}
          ></Pressable>
        </View>
      </View>
    </>
  );
}
