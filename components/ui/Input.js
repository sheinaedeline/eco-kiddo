import { TextInput, Text } from "react-native";

import clsx from "clsx";

export function Input({
  placeholder = "",
  keyboardType = "default",
  secureTextEntry = false,
  onChangeText,
  autoCapitalize,
}) {
  return (
    <>
      <TextInput
        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-400 shadow-sm focus:border-primaryBlu focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:ring-red-500 dark:border-gray-600 dark:bg-black dark:text-white dark:placeholder-gray-600 dark:focus:border-purple-600 dark:focus:ring-purple-400/20 sm:py-3 sm:text-sm"
        placeholder={placeholder}
        placeholderTextColor="#64748b"
        keyboardType="default"
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
      />
    </>
  );
}
