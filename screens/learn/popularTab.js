import { View, Text } from "react-native";
import { materialData } from "../../Data/materialData";
import { SmallCard } from "../../components/ui/SmallCard";
import { finalMaterialData } from "../../Data/finalMaterialData";

export function PopularTab({ navigation }) {
  const list = finalMaterialData.slice(0,5);
  return (
    <View>
      <SmallCard dataInput={list} />
    </View>
  );
}
