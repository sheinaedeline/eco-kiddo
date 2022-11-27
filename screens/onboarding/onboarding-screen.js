import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Onboarding } from "../../components/onboarding/Onboarding";
import { useNavigation } from "@react-navigation/native";
import onboardingBuy from "../../assets/Onboarding-Buy.png";
import onboardingDonate from "../../assets/Onboarding-Donate.png";
import onboardingMaterials from "../../assets/Onboarding-Materials.png";
import onboardingMap from "../../assets/Onboarding-Map.png";
import { Ionicons } from "@expo/vector-icons";
import clsx from "clsx";

export function OnboardingScreen() {
  const [screen, setScreen] = useState(1);
  const navigation = useNavigation();

  return (
    <>
      <Text>{screen}</Text>
      <View className="h-full bg-white">
        <View className="px-6 mt-24">
          <View
            // className="w-full flex flex-row items-end"
            className={clsx(
              screen === 1 ? "justify-end" : "justify-between",
              "w-full flex flex-row"
            )}
          >
            {screen !== 1 && (
              <Pressable onPress={() => setScreen(screen - 1)}>
                <Ionicons name="arrow-back-outline" color="black" size={24} />
              </Pressable>
            )}
            <Text
              onPress={() => navigation.navigate("dashboard")}
              className="text-primaryBlu"
            >
              Skip All
            </Text>
          </View>
          <View className="flex items-center">
            <View className="mt-40">
              {screen === 1 && (
                <Onboarding
                  title="Discover Places to Donate"
                  description="Use out interactive map to 
            find clothes donation places near you."
                  image={onboardingBuy}
                  onPress={() => setScreen(2)}
                  screen={screen}
                  setScreen={setScreen}
                />
              )}
              {screen === 2 && (
                <Onboarding
                  title="Learn about Sustainable Materials"
                  description="Use out interactive map to 
              find clothes donation places near you. "
                  image={onboardingMaterials}
                  onPress={() => setScreen(3)}
                  screen={screen}
                  setScreen={setScreen}
                />
              )}
              {screen === 3 && (
                <Onboarding
                  title="Buy Clothes sustainably"
                  description="Use out interactive map to 
              find clothes donation places near you. "
                  image={onboardingMap}
                  onPress={() => setScreen(4)}
                  screen={screen}
                  setScreen={setScreen}
                />
              )}
              {screen === 4 && (
                <Onboarding
                  title="Clothing Donation Pick up Services"
                  description="Use out interactive map to 
              find clothes donation places near you."
                  image={onboardingDonate}
                  onPress={() => navigation.navigate("dashboard")}
                  screen={screen}
                  setScreen={setScreen}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
