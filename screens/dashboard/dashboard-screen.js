import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Button } from "../../components/ui/Button";
import { HorizontalMenu } from "../../components/ui/HorizontalMenu";
import { VerticalMenu } from "../../components/ui/VerticalMenu";
import { HomeHeader } from "../../components/ui/HomeHeader";
import { materialData } from "../../Data/materialData";
import { locationData } from "../../Data/locationData";
import { finalMaterialData } from "../../Data/finalMaterialData";

export function DashboardScreen({ navigation }) {
  const list = finalMaterialData.slice(0,5);
  return (
    <>
      <HomeHeader />
      <FlatList
        className="h-full bg-white dark:bg-black"
        ListHeaderComponent={
          <>
            <HorizontalMenu
              title="Popular Materials"
              dataInput={list}
              navigation={navigation}
            />
            <VerticalMenu
              title="Nearby Donation Places"
              dataInput={locationData}
            />
          </>
        }
      ></FlatList>
    </>
  );
}
