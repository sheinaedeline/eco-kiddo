import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import mapicon from '../../assets/mapicon.png'
import { locationData } from "../../Data/locationData";

const TitleHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 26, marginLeft: 30}}>
        Notifications
      </Text>
    </View>
  );
};

function NotificationsBar({ data }) {
  return (
    <View>
      <TouchableOpacity className="m-3 p-4 flex justify-center rounded-lg">
        <View className="gap-4 flex flex-row items-center">
          <View>
            <Image source={mapicon} />
          </View>
          <View className="gap-1 flex">
            <Text className="text-base font-light">
              New Location added near you
            </Text>
            <Text className="text-base font-medium">{data.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export function NotificationsScreen({ navigation }) {

  return (
    <ScrollView className="bg-white py-3">
      {TitleHeader()}
      <FlatList
          data={locationData}
          renderItem={({ item }) => <NotificationsBar data={item} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
    </ScrollView>
  );
}

