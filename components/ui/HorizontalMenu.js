import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native';

function Scrollbar ({data}) {
    const navigation = useNavigation();
    return (
        <View className="">
            <TouchableOpacity 
              className="m-3 p-4 w-32 flex justify-center bg-white shadow-sm rounded-lg"
              onPress={() => navigation.navigate("material", { material: data.name })}
            >
                <View className="gap-2">
                    <View className="items-center"> 
                        <Image source={data.icon}/>
                    </View>
                    <Text className="text-center text-base font-bold" >{data.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export function HorizontalMenu({ navigation, title, dataInput }) {
  
    return (
      <>
        <View className="bg-white dark:bg-black p-2 my-3">
          <View className="flex flex-row justify-between mx-3 items-center">
              <Text className="text-base font-medium">{title}</Text>
              <TouchableOpacity onPress={() => navigation.navigate("learn")}><Text className="opacity-40 text-base">show all</Text></TouchableOpacity>
          </View>
          <FlatList 
            data={dataInput}
            renderItem={({item}) => <Scrollbar data={item}/>}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator ={false}
          />
        </View>
      </>
    );
  }


