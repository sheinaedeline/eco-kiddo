import { useState, useEffect } from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { NotificationIndicator } from "./NotificationIndicator";
import { supabase } from "../../lib/supabase";

function ProfileImage({ imageUrl }) {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate("profile");
        }}
      >
        {imageUrl ? (
          <View className="">
            <Image
              className="h-14 w-14 rounded-full"
              source={{ uri: imageUrl }}
            />
          </View>
        ) : (
          <Ionicons name="person-circle-outline" size={60} color="#A4A4A4" />
        )}
      </Pressable>
    </View>
  );
}

export function HomeHeader() {
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [session, setSession] = useState("");

  useEffect(() => {
    async function getUsersSession() {
      try {
        const { data } = await supabase.auth.getSession();
        // console.log("data", data.session); //Testing
        setSession(data.session);
      } catch (e) {
        console.log("Something is wrong with the session!");
      }
    }
    getUsersSession();
  }, []);

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url, full_name, gender, phone`)
        .eq("id", session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullName(data.full_name);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  //Remove last name
  const firstName = fullName?.split(" ")[0];

  return (
    <View className="bg-lightBlu flex flex-row justify-between py-4">
      <View className="mt-12 mx-5 flex flex-row items-center ">
        <ProfileImage imageUrl={avatarUrl} />
        <View className="mx-3 flex">
          <Text className="text-xl font-bold">Hi {firstName || "there"},</Text>
          <View className="flex flex-row gap-2 pt-1">
            <Ionicons name="location-outline" size={16} color="#6AAEFF" />
            <Text>UNSW</Text>
          </View>
        </View>
      </View>
      <View className="mt-12 mx-5 flex flex-row items-center ">
        <NotificationIndicator />
      </View>
    </View>
  );
}
