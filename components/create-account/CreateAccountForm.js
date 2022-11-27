import React, { useState } from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { supabase } from "../../lib/supabase";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useNavigation } from "@react-navigation/native";
import ErrorMessage from "../ui/ErrorMessage";

export default function CreateAccountForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState(
    "There was an error. Please try again!"
  );
  const [error, setError] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    setError(false);
    try {
      if (username.length <= 6) {
        setErrorMessage("Username must be longer than 6 characters.");
        setLoading(false);
        setError(true);
        return;
      }
      if (username.length >= 20) {
        setErrorMessage("Username must be short than 20 characters.");
        setLoading(false);
        setError(true);
        return;
      }

      if (!email.includes("@")) {
        setErrorMessage("Please enter a valid email.");
        setLoading(false);
        setError(true);
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage("Passwords must match! Please try again.");
        setLoading(false);
        setError(true);
        return;
      }
    } catch (e) {
      console.log("There was an error!");
    }
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      data: {
        confirmation_sent_at: Date.now(), //important to bypass email confirmation
        username: username,
      },
    });

    if (error) {
      Alert.alert(error.message);
      setLoading(false);
    } else {
      setLoading(false);
      // Alert.alert("Success");
      navigation.push("onboarding");
    }
  }

  return (
    <View>
      <View className="mb-2">
        {error && <ErrorMessage errorMessage={errorMessage} />}
      </View>
      <View style={[styles.verticallySpaced]}>
        <Input
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
          autoCapitalize={"none"}
        />
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
      <View style={styles.verticallySpaced}>
        <Input
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
          value={confirmPassword}
          autoCapitalize={"none"}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          loading={loading}
          title="Create an Account"
          onPress={() => signUpWithEmail()}
          disabled={loading}
        />
      </View>
      <View className="flex flex-row items-center justify-center mt-2">
        <Text className="text-gray-400">Already have an account?</Text>
        <Text
          onPress={() => {
            navigation.navigate("login");
          }}
          className="ml-2 text-primaryBlu  underline underline-offset-"
        >
          sign in
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
