import { View, Text, Image, TouchableOpacity} from "react-native";
import normalNotification from '../../assets/normalNotification.png'
import alertNotification from '../../assets/alertNotification.png'
import { useNavigation } from "@react-navigation/native";

let newNotification = false

export function NotificationIndicator() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=> {navigation.navigate("notifications")}}>
          <Image
            source={normalNotification}
            style={{width:30, height:30}}
            />  
        </TouchableOpacity>
        
    )
}