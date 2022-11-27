import mapIcon from "../../assets/mapicon.png";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import { locationData } from "../../Data/locationData";
import { useNavigation } from "@react-navigation/native";

export function LocationScrollbar({ data }) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity className="m-3 p-4 flex justify-center bg-lightBlu shadow-sm rounded-lg">
        <View className="gap-4 flex flex-row items-center">
          <View>
            <Image source={mapIcon} />
          </View>
          <View className="gap-1 flex">
            <Text className="text-base font-light">
              {data.distance}m | {data.driving}min Drive
            </Text>
            <Text className="text-base font-medium">{data.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export function VerticalMenu({ navigation, title, dataInput }) {
  return (
    <>
      <View className="bg-white dark:bg-black pt-2 pb-8 px-2">
        <View className="flex flex-row justify-between mx-3 items-center">
          <Text className="text-base font-medium">{title}</Text>
          <TouchableOpacity>
            <Text className="opacity-40 text-base">show all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={dataInput}
          renderItem={({ item }) => <LocationScrollbar data={item} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
}
