import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { StartScreen } from "./screens/start/start-screen";
import { CreateAccountScreen } from "./screens/create-account/create-account-screen";
import { LoginScreen } from "./screens/login/login-screen";
import { DashboardScreen } from "./screens/dashboard/dashboard-screen";
import { MapScreen } from "./screens/map/map-screen";
import { ScanScreen } from "./screens/scan/scan-screen";
import { PickUpScreen } from "./screens/pick-up/pick-up-screen";
import { LearnScreen } from "./screens/learn/learn-screen";
import { MaterialScreen } from "./screens/material/material-screen";
import { NotificationsScreen } from "./screens/notifications/notifications-screen";
import { ProfileScreen } from "./screens/profile/profile-screen";
import { SettingsScreen } from "./screens/settings/settings-screen";
import { LocationsScreen } from "./screens/locations/locations-screen";

import { HomeHeader } from "./components/ui/HomeHeader";
import { OnboardingScreen } from "./screens/onboarding/onboarding-screen";

const primaryColour = "#5FA8FF";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const sortMaterials = () => {
//   const navigation = useNavigation();
//   return (
//     <>
//       <View>
//         <Pressable
//           onPress={() => {navigation.navigate("sortmaterial");}} >
//           <Octicons name="filter" size={24} color="#202020" />
//         </Pressable>
//       </View>
//   )
// }

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name=" "
        component={DashboardScreen}
        options={{
          headerShown: false,
          // headerRight: () => rightHeaderMenu(),
          // headerLeft: () => profileImage(),
        }}
      />
    </Stack.Navigator>
  );
}

function MapStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Donations Map",
          //headerRight: () => sortMaterials(),
          headerStyle: {
            // backgroundColor: colorScheme == "dark" ? "#000" : "#fff",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="locations"
        component={LocationsScreen}
        options={{
          title: "Donations Map",
          //headerRight: () => sortMaterials(),
          headerStyle: {
            // backgroundColor: colorScheme == "dark" ? "#000" : "#fff",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function LearnStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="Learn"
        component={LearnScreen}
        options={{
          title: "Learn",
          //headerRight: () => sortMaterials(),
          headerStyle: {
            // backgroundColor: colorScheme == "dark" ? "#000" : "#fff",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />

      <Stack.Screen
        name="material"
        component={MaterialScreen}
        options={{
          title: "Material",
          //headerRight: () => sortMaterials(),
          headerStyle: {
            // backgroundColor: colorScheme == "dark" ? "#000" : "#fff",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function ScanStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          title: "Scan",
          //headerRight: () => sortMaterials(),
          headerStyle: {
            // backgroundColor: colorScheme == "dark" ? "#000" : "#fff",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />

      <Stack.Screen
        name="material"
        component={MaterialScreen}
        options={{
          title: "Material",
          //headerRight: () => sortMaterials(),
          headerStyle: {
            // backgroundColor: colorScheme == "dark" ? "#000" : "#fff",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          headerRight: () => rightHeaderMenu(),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          // tabBarInactiveTintColor: '#94a3b8',
          // tabBarInactiveTintColor: primaryColour,
          // tabBarActiveTintColor: 'primary',
          tabBarActiveTintColor: primaryColour,

          headerShown: false,
          tabBarStyle: {
            // backgroundColor: colorScheme == "dark" ? "#000" : "#fff",
            // borderTopColor: "white",
            // borderTopWidth: 4,
          },
        }}
      />
      <Tab.Screen
        name="map"
        component={MapStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" color={color} size={size} />
          ),
          // tabBarInactiveTintColor: '#94a3b8',
          // tabBarInactiveTintColor: primaryColour,
          // tabBarActiveTintColor: 'primary',
          tabBarActiveTintColor: primaryColour,

          headerShown: false,
          tabBarStyle: {
            // backgroundColor: colorScheme == "dark" ? "#000" : "#fff",
            // borderTopColor: "white",
            // borderTopWidth: 4,
          },
        }}
      />
      <Tab.Screen
        name="scan"
        component={ScanStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="scan" color={color} size={size} />
          ),
          // tabBarInactiveTintColor: '#94a3b8',
          // tabBarInactiveTintColor: primaryColour,
          // tabBarActiveTintColor: 'primary',
          tabBarActiveTintColor: primaryColour,

          headerShown: false,
          tabBarStyle: {
            // backgroundColor: colorScheme == "dark" ? "#000" : "#fff",
            // borderTopColor: "white",
            // borderTopWidth: 4,
          },
        }}
      />
      {/* <Tab.Screen
        name="pickup"
        component={PickUpScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube" color={color} size={size} />
          ),
          // tabBarInactiveTintColor: '#94a3b8',
          // tabBarInactiveTintColor: primaryColour,
          // tabBarActiveTintColor: 'primary',
          tabBarActiveTintColor: primaryColour,

          headerShown: false,
          tabBarStyle: {
            // backgroundColor: colorScheme == "dark" ? "#000" : "#fff",
            // borderTopColor: "white",
            // borderTopWidth: 4,
          },
        }}
      /> */}
      <Tab.Screen
        name="learn"
        component={LearnStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
          // tabBarInactiveTintColor: '#94a3b8',
          // tabBarInactiveTintColor: primaryColour,
          // tabBarActiveTintColor: 'primary',
          tabBarActiveTintColor: primaryColour,

          headerShown: false,
          tabBarStyle: {
            // backgroundColor: colorScheme == "dark" ? "#000" : "#fff",
            // borderTopColor: "white",
            // borderTopWidth: 4,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="start"
          component={StartScreen}
          options={{
            // headerRight: () => rightHeaderMenu(),
            title: "Eco Kiddo",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            // headerRight: () => rightHeaderMenu(),
            title: "Eco Kiddo",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="create-account"
          component={CreateAccountScreen}
          options={{
            // headerRight: () => rightHeaderMenu(),
            title: "Eco Kiddo",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="onboarding"
          component={OnboardingScreen}
          options={{
            // headerRight: () => rightHeaderMenu(),
            title: "Eco Kiddo",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="dashboard"
          component={Tabs}
          // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          options={{
            title: "",
            headerLeft: () => null,
            headerStyle: {},
            headerTransparent: true,
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "red",
            },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="profile"
          component={ProfileScreen}
          // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          options={{
            title: "Profile",
            // headerLeft: () => null,
            headerStyle: {},
            // headerTransparent: true,
            // headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "black",
            },
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name="notifications"
          component={NotificationsScreen}
          // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          options={{
            title: "",
            // headerLeft: () => null,
            headerStyle: {},
            // headerTransparent: true,
            // headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "red",
            },
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name="settings"
          component={SettingsScreen}
          // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          options={{
            title: "",
            // headerLeft: () => null,
            headerStyle: {},
            headerTransparent: true,
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "red",
            },
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name="material"
          component={MaterialScreen}
          options={{
            title: "Material Details",
            // tabBarIcon: () => <ArrowDownRightIcon />,
            // headerRight: () => rightHeaderMenu(),
            headerStyle: {
              // backgroundColor: colorScheme == "dark" ? "#000" : "#fff",
            },
            // headerTintColor: colorScheme == "dark" ? "red" : "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              // color: colorScheme == "dark" ? "#fff" : "#000",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
