import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function CardContent ({data}) {
    const navigation = useNavigation();
    return (
        <View className="w-1/2">
            <TouchableOpacity 
                className=" my-6 mx-5 p-4 flex justify-center border border-slate-200 rounded-lg" 
                onPress={() => navigation.navigate("material", { material: data.name })}
            >
                <View className="gap-4 items-center ">
                    <View> 
                        <Image source={data.icon} style={{ height: 50, width: 50, borderRadius: 200, }}/>
                    </View>
                    <View className="gap-1 flex">
                        <Text className="text-base font-medium" >{data.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}


export function SmallCard({navigation, dataInput}) {
    return(
        <View className=""> 
            <FlatList 
                data={dataInput}
                renderItem={({item}) => <CardContent data={item}/>}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator ={false}
                numColumns={2}
            />
        </View>  
    )
    
}