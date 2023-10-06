import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import colours from "../components/Colours";

 function Signup() {
  const navigation = useNavigation();

  const showAlert = (username, email, password) => {
    const isUsernameValid = username.length > 0;
    const isEmailValid = email.includes("@") && email.includes(".");
    const isPasswordValid = password.length >= 6;

    if (!isUsernameValid) {
      Alert.alert("Invalid Username", "Please enter a valid username.", [
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
          },
          style: "default",
        },
      ]);
    } else if (!isEmailValid) {
      Alert.alert("Invalid Email", "Please enter a valid email address.", [
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
          },
          style: "default",
        },
      ]);
    } else if (!isPasswordValid) {
      Alert.alert(
        "Invalid Password",
        "Password must be at least 6 characters long.",
        [
          {
            text: "OK",
            onPress: () => {
              console.log("OK Pressed");
            },
            style: "default",
          },
        ]
      );
    } else {
      Alert.alert(
        "Signup Successful",
        "Your account has been created successfully!",
        [
          {
            text: "OK",
            onPress: () => {
              console.log("OK Pressed");
            },
            style: "default",
          },
        ]
      );
    }
  };

  const [display, setDisplay] = useState("visible");

  const onPressHandler = () => {
    navigation.navigate("Login");
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <ScrollView style={styles.container}>
        <View
          style={styles.screen}
        >
          <View style={styles.header}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <Text style={styles.title}>Create Account</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              value={username}
              placeholder="Name"
              style={styles.input}
              onChangeText={setUsername}
            />
            <TextInput
              value={email}
              placeholder="Email"
              style={styles.input}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              value={password}
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={setPassword}
            />
            <TextInput
              value={password}
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                showAlert(username, email, password);
              }}
            >
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
              Already have an account?{" "}
              <Text style={styles.textLink} onPress={onPressHandler}>
                Login
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.secondary,
  },
  screen: {
    flex: 1,
    backgroundColor:colours.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 2,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 100,
    marginBottom: 2,
    resizeMode: "contain",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: colours.primary,
    marginBottom:10,
    fontFamily: "sans-serif-condensed",
  },
  form: {
    flex: 4,
    width: "80%",
    marginBottom: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: "100%",
    padding: 15,
    marginVertical: 6,
    borderWidth: 1,
    borderRadius: 10,
    borderColor:colours.primary,
    borderWidth:1.5,
    backgroundColor: colours.text,
  },
  button: {
    height: 50,
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colours.primary,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    fontFamily: "sans-serif-condensed",
  },
  text: {
    fontSize: 16,
    fontFamily: "sans-serif-condensed",
    color:colours.text,
  },
  textLink: {
    fontSize: 16,
    color: colours.primary,
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
  },
});

export default Signup;