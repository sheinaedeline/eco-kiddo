import { View, TextInput, TouchableOpacity, Image } from "react-native";
import searchIcon from '../../assets/searchicon.png'

export function SearchBar({placeholder, textState, setTextState, handleSearch}) {
    return(
        <View className="m-3 px-2 h-12 flex-row justify-between items-center border-2 border-gray-200 bg-white shadow-sm rounded-lg">
            <TextInput className="flex-1 h-full" value={textState} onChangeText={setTextState} placeholder={placeholder}/>
            <TouchableOpacity onPress={handleSearch}>
                <Image source={searchIcon} className="opacity-30"/>
            </TouchableOpacity>
        </View>
    )
}