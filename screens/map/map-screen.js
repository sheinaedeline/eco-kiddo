import { View, Text, ScrollView } from "react-native";
import { Button } from "../../components/ui/Button";
import { Map } from "../../components/maps/map";
import { NearYouList } from "../../components/maps/NearYouList";
import { FavouriteLocationsList } from "../../components/maps/FavouriteLocationsList";
import { PlacesList } from "../../components/maps/PlacesList";

export function MapScreen({ navigation }) {
  return (
    <>
      <View className="h-full bg-gra-50 dark:bg-black">
        <View className="flex-1 p-3 mt-6 pt-6">
          <ScrollView>
            <View className="mb-6">
              <View className="flex flex-row justify-between mb-2">
                <Text className="">Near You</Text>
                <Text className="text-primaryBlu">View All</Text>
              </View>
              <NearYouList />
            </View>
            <View className="mb-6">
              <View className="flex flex-row justify-between mb-2">
                <Text className="">All Places</Text>
                <Text className="text-primaryBlu">View All</Text>
              </View>
              <PlacesList />
            </View>
            <View className="mb-6">
              <View className="flex flex-row justify-between mb-2">
                <Text className="">Favourite Locations</Text>
                <Text className="text-primaryBlu">View All</Text>
              </View>
              <FavouriteLocationsList />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
