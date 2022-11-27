import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { StyleSheet, View, Alert, Text, Image, ScrollView } from "react-native";
import { Input } from "react-native-elements";
// import { Session } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../ui/Button";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [gender, setGender] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [session, setSession] = useState("");

  const navigation = useNavigation();

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
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
        setPhone(data.phone);
        setGender(data.gender);
        setFullName(data.full_name);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
    gender,
    full_name,
    phone,
  }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        id: session?.user.id,
        username,
        website,
        avatar_url,
        full_name,
        gender,
        phone,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  function signOut() {
    supabase.auth.signOut();
    navigation.navigate("start");
  }

  return (
    <>
      <ScrollView>
        <View className="flex flex-row items-center justify-center">
          {avatarUrl ? (
            <View className="">
              <Image
                className="h-40 w-40 rounded-full"
                source={{
                  uri: avatarUrl,
                }}
              />
            </View>
          ) : (
            <Ionicons name="person-circle-outline" size={190} color="#A4A4A4" />
          )}
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Input label="Email" value={session?.user?.email} disabled />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Username"
            value={username || ""}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Website"
            value={website || ""}
            onChangeText={(text) => setWebsite(text)}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Phone"
            value={phone || ""}
            onChangeText={(text) => setPhone(text)}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Gender"
            value={gender || ""}
            onChangeText={(text) => setGender(text)}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Full Name"
            value={fullName || ""}
            onChangeText={(text) => setFullName(text)}
          />
        </View>

        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Button
            title={loading ? "Loading ..." : "Update"}
            onPress={() =>
              updateProfile({
                username,
                website,
                avatar_url: avatarUrl,
                phone,
                gender,
                full_name: fullName,
              })
            }
            disabled={loading}
          />
        </View>

        <View style={styles.verticallySpaced}>
          <Button title="Sign Out" onPress={() => signOut()} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});
