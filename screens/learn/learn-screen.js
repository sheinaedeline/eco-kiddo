import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { AllMaterialsTab } from "./AllMaterialsTab";
import { PopularTab } from "./PopularTab";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SearchBar } from "../../components/ui/SearchBar";
import { SustainableTab } from "./SustainableTab";
import { finalMaterialData } from "../../Data/finalMaterialData";

const Tab = createMaterialTopTabNavigator();

// export function LearnScreen({ navigation }) {
//   const [searchText, setSearchText] = useState("");
// }

// export function LearnScreen({ navigation }) {
// const [searchText, setSearchText] = useState("");

// // // Handle search material text
// const handleSearch = () => {
//   console.log("search material", searchText);
//   // Search material in the materialData
//   let found = false;
//   for (let i = 0; i < finalMaterialData.length; i++) {
//     const match = searchText.toUpperCase().match(finalMaterialData[i].name);
//     if (match !== null) {
//       found = true;
//     }
//   }

//   // Navigate to material-screen to show the details of material if exist
//   if (found === true) {
//     navigation.navigate("material", { material: searchText.toUpperCase() });
//   }
// };

export function LearnScreen({ navigation }) {
  return (
    <>
      <View className="bg-white p-2">
        {/* <SearchBar
          placeholder="Search Materials"
          textState={searchText}
          setTextState={setSearchText}
          handleSearch={handleSearch}
        /> */}
      </View>
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: "white", height: 100 }}
        screenOptions={{
          tabBarLabelStyle: { textTransform: "none", fontWeight: "bold" },
          tabBarIndicatorStyle: { height: 5 },
        }}
      >
        <Tab.Screen name="All Materials" component={AllMaterialsTab} />
        <Tab.Screen name="Popular" component={PopularTab} />
        <Tab.Screen name="Sustainable" component={SustainableTab} />
      </Tab.Navigator>
    </>
  );
}
