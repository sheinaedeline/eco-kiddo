import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/ui/Button";
import { SearchBar } from "../../components/ui/SearchBar";
import { HorizontalMenu } from "../../components/ui/HorizontalMenu";
import { materialData } from "../../Data/materialData";
import * as ImagePicker from "expo-image-picker";
import { finalMaterialData } from "../../Data/finalMaterialData";
import { Ionicons } from "@expo/vector-icons";

export function ScanScreen({ navigation }) {
  const API_KEY = "AIzaSyBhjGyLincXkrBtMxbX7gNPIaWQvAtxhwI";
  const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;
  const [cameraPermission, setCameraPermission] = useState(false);
  const [mediaPermission, setMediaPermission] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);
  const [loading, setLoading] = useState(false);

  // Get Permissions from first render
  useEffect(() => {
    (async () => {
      console.log("permissionsBefore", cameraPermission, mediaPermission);
      const requestCamera = await ImagePicker.requestCameraPermissionsAsync();
      setCameraPermission(requestCamera.status === "granted");
      console.log("yo");
      const requestMedia =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setMediaPermission(requestMedia.status === "granted");
      console.log("permissions", cameraPermission, mediaPermission);

      if (
        requestCamera.status !== "granted" &&
        requestMedia.status !== "granted"
      ) {
        Alert.alert(
          "Permission Settings",
          "Please allow this app to access your camera and gallery.",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]
        );
      }
    })();
  }, []);

  // Upload image from Gallery
  const pickImage = async () => {
    // console.log('media', mediaPermission);
    // if (mediaPermission !== true) {
    //   alert('Please allow this app to access your gallery.');
    // }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result);
    } else {
      alert("You did not select any image.");
    }
  };

  // Scan label using Camera
  const scanLabel = async () => {
    // console.log('camera', cameraPermission);
    // if (cameraPermission !== true) {
    //   alert('Please allow this app to access your camera.');
    // }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result);
    } else {
      alert("You did not take any picture.");
    }
  };

  // Generate body for API call
  const generateBody = (image) => {
    const body = {
      requests: [
        {
          image: {
            content: image,
          },
          features: [
            {
              type: "TEXT_DETECTION", //we will use this API for text detection purposes.
              maxResults: 1,
            },
          ],
        },
      ],
    };
    return body;
  };

  // Process text to get materials
  const processText = (detectedText) => {
    console.log(loading);
    // const checkPercentage = /[0-9]*%/;
    // if (detectedText.match(checkPercentage) !== null) {
    //   const regex = /[0-9]*% [A-Z]*/g;
    //   const found = detectedText.match(regex);
    //   console.log(found);
    //   setText(found);
    // } else {
    const foundList = [];
    for (let i = 0; i < finalMaterialData.length; i++) {
      const match = detectedText.match(finalMaterialData[i].name);
      // console.log('match', match);
      if (match !== null) {
        foundList.push(match[0]);
      }
    }

    console.log(foundList);
    setLoading(false);
    setText(foundList);
    // }
  };

  // Recognize text from image uploaded
  useEffect(() => {
    (async () => {
      if (image) {
        console.log("#################### Text Recognition");
        setLoading(true);
        const body = generateBody(image.base64); //pass in our image for the payload
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        const result = await response.json();
        const detectedText =
          result.responses[0].fullTextAnnotation.text.toUpperCase();
        console.log(detectedText);
        const finalResult = await processText(detectedText);
      }
    })();
  }, [image]);

  // Handle search material text
  const handleSearch = () => {
    console.log("search material", searchText);
    // Search material in the materialData
    let found = false;
    for (let i = 0; i < finalMaterialData.length; i++) {
      const match = searchText.toUpperCase().match(finalMaterialData[i].name);
      if (match !== null) {
        found = true;
      }
    }

    // Navigate to material-screen to show the details of material if exist
    if (found === true) {
      navigation.navigate("material", { material: searchText.toUpperCase() });
    }
  };

  return (
    <>
      <ScrollView className="bg-white p-2 flex-1 flex-column">
        <SearchBar
          placeholder="Search Materials"
          textState={searchText}
          setTextState={setSearchText}
          handleSearch={handleSearch}
        />
        <HorizontalMenu
          title="Popular Materials"
          dataInput={finalMaterialData.slice(0, 5)}
          navigation={navigation}
        />
        <View className="mx-3 py-2 flex-1 flex-column items-center bg-white shadow-md rounded-lg">
          <View className="flex-column justify-center items-center">
            <Text className="text-xl font-bold">Use Scanner</Text>
            <Text className="text-sm opacity-40">
              To get information about the clothing from its materials label.
            </Text>
          </View>
          <View className="flex-column m-4 px-2">
            <View className="mb-2">
              <Button title="Upload Image From Gallery" onPress={pickImage} />
            </View>
            <View className="">
              <Button title="Scan Label" onPress={scanLabel} />
            </View>
          </View>
          {text && !loading && text.length === 0 && (
            <View className="m-6 p-3 bg-red-50 rounded-xl">
              <View className="flex flex-row text-center">
                <View className="flex-shrink-0">
                  <Ionicons
                    name="information-circle"
                    color="#f87171"
                    size={18}
                  />
                </View>
                <View className="ml-2">
                  <Text className="text-sm font-semibold text-red-700">
                    No materials found! Please make sure to upload or take a
                    clearer picture of the clothing label.
                  </Text>
                </View>
              </View>
            </View>
          )}
          {text && !loading && text.length > 0 && (
            <View className="p-2 items-center">
              <Text className="text-xl font-bold">Clothing materials</Text>
              <Text className="text-sm opacity-40">
                Click on material buttons for further information.
              </Text>
              <View className="pt-3 flex flex-row flex-wrap justify-center">
                {text.map((material, i) => (
                  <View key={i}>
                    <Pressable
                      className="bg-secondary p-2 m-2 rounded-lg items-center shadow-sm"
                      onPress={() =>
                        navigation.navigate("material", { material: material })
                      }
                    >
                      <Text className="text-sm">{material}</Text>
                    </Pressable>
                  </View>
                ))}
              </View>
            </View>
          )}
          {loading && (
            <View className="p-4">
              <ActivityIndicator size="large" color="#000000" />
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}
