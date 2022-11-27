import { useState } from "react";
import { Pressable, Text, FlatList, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const locations = [
  {
    id: 1,
    name: "Good Sammys",
  },
  {
    id: 2,
    name: "Oxfam",
  },
  {
    id: 3,
    name: "Cross Station",
  },
  {
    id: 4,
    name: "Greanleaf Center",
  },
  {
    id: 5,
    name: "Vinnies",
  },
  {
    id: 6,
    name: "Warmheart Charity",
  },
];

export function NearYouList() {
  const navigation = useNavigation();

  const Item = ({ id, name, image }) => (
    <>
      <Pressable onPress={() => navigation.navigate("locations")}>
        <View className="rounded-xl shadow-xl h-40 w-40 bg-white px-6">
          <View className="flex-1 items-center justify-center">
            <View className="mb-2">
              <Image
                className="h-16 w-16 rounded-xl"
                source={{
                  uri: "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg",
                }}
              />
            </View>
            <View className="">
              <Text className="">{name}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </>
  );

  const renderItem = ({ item }) => (
    <Item id={item.id} name={item.name} image={item.image} />
  );

  return (
    <>
      <>
        <View className="">
          <FlatList
            data={locations}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </>
    </>
  );
}
