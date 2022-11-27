import React, { useState } from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { supabase } from "../../lib/supabase";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useNavigation } from "@react-navigation/native";
import ErrorMessage from "../ui/ErrorMessage";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState("sajcjhbadhbc");
  const [error, setError] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    setError(false);
    try {
      if (!email.includes("@")) {
        setErrorMessage("Please enter a valid email.");
        setLoading(false);
        setError(true);
        return;
      }
      if (!password) {
        setErrorMessage("Password is required.");
        setLoading(false);
        setError(true);
        return;
      }
    } catch (e) {
      console.log("There was an error!");
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
      setLoading(false);
    } else {
      setLoading(false);
      // alert("Success"); // can remove this line after testing
      navigation.push("dashboard");
    }
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      data: {
        confirmation_sent_at: Date.now(), //important to bypass email confirmation
      },
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View>
      <View className="mb-2">
        {error && <ErrorMessage errorMessage={errorMessage} />}
      </View>
      <View style={[styles.verticallySpaced]}>
        <Input
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          value={password}
          autoCapitalize={"none"}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Sign in"
          onPress={() => signInWithEmail()}
          disabled={loading}
          loading={loading}
        />
      </View>
      <View className="flex flex-row items-center justify-center mt-2">
        <Text className="text-gray-400">Don't have an account?</Text>
        <Text
          onPress={() => {
            navigation.navigate("create-account");
          }}
          className="ml-2 text-primaryBlu  underline underline-offset-"
        >
          Sign up
        </Text>
      </View>
    </View>
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
