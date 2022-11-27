import { useEffect, useState } from "react";
import { View, Text,  Image, ScrollView, Linking} from "react-native";
import { Button } from "../../components/ui/Button";
import cottonImage from "../../assets/cottonImage.jpg";
import { finalMaterialData } from "../../Data/finalMaterialData";


export function MaterialScreen({ route }) {
  const [data, setData] = useState("");
  const { material } = route.params;

  useEffect(() => {
    (async () => {
      for (let i = 0; i < finalMaterialData.length; i++) {
        if (finalMaterialData[i].name === material.toUpperCase()) {
          setData(finalMaterialData[i]);
        }
      }
    })();
  }, []);

  return (
    <>
      <ScrollView className="h-full bg-white dark:bg-black">
        { data && 
          <>
            <View className="items-center mt-4">
              <Image source={data.image} style={{ height: 200, width: 200, borderRadius: 200, }} />
            </View>
            <View className="flex flex-row justify-between mx-2 p-6 items-center">
                <Text className="text-xl font-bold">{data.name}</Text>
                <View className="flex flex-row gap-2 items-center">
                  <Text>🟢</Text>
                  <Text className="text-base">Recyclable</Text>
                </View>
              </View>
            <View className="bg-slate-200 mx-8 p-4 rounded-lg">
              <Text className="text-base pb-2">{data.description}</Text>
              <Text style={{color: 'blue'}} onPress={() => Linking.openURL(data.link)}>Source: {data.link}</Text>
            </View>
          </>
        }      
        <View className="mx-8 py-6" >
          <Text className="text-lg font-bold pb-4">Recycle Suggestions</Text>
          <View className="bg-slate-200 p-4 rounded-lg">
            <Text className="text-base">
            1. See if someone else has a use for it {"\n"}
            2. See if you can compost it {"\n"}
            3. Fashion retailer recycling {"\n"}
            4. Animal shelters and veterinary clinics" {"\n"}
            5. Rags for mechanics"
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
