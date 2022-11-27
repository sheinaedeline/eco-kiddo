import { View, Text } from "react-native";
import { materialData } from "../../Data/materialData";
import { SmallCard } from "../../components/ui/SmallCard";
import { finalMaterialData } from "../../Data/finalMaterialData";

export function AllMaterialsTab({ navigation }) {
  
  return (
    <View>
      <SmallCard dataInput={finalMaterialData} />
    </View>
  );
}
