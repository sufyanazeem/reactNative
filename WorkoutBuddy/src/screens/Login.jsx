import React, { useState } from "react";
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

import { useNavigation } from "@react-navigation/native";
import colours from "./../components/Colours";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";

function Login() {
  const navigation = useNavigation();
  const handleAlert = (email, password) => {
    const isEmailValid = email.includes("@") && email.includes(".");
    const isPasswordValid = password.length >= 6;

    if (!isEmailValid) {
      Alert.alert("Invalid Email", "Please enter a valid email address.", [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
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
            onPress: () => console.log("OK Pressed"),
            style: "default",
          },
        ]
      );
    } else {
      setWaiting(true)
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigation.replace("CurvedBottomBar")
          console.log("Login successful");
          setWaiting(false)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setWaiting(false)
        });
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [waiting, setWaiting] = useState(false);

  return (
    <>
      {waiting && <Loader />}
      {!waiting && (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.screen}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <Text style={styles.title}>Workout Tracker</Text>
          </View>
          <View style={styles.form}>
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
            <Text
              style={styles.forgotPassword}
              onPress={() => console.log("Forgot Password Pressed")}
            >
              Forgot Your Password?
            </Text>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                handleAlert(email, password);
              }}
            >
              <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.noAccount}>
              Don't Have an Account?{" "}
              <Text
                style={styles.signupLink}
                onPress={() => navigation.navigate("Signup")}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  logo: {
    width: 200,
    height: 200,
    // marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: colours.primary,
    marginBottom: 10,
    fontFamily: "sans-serif-condensed",
  },
  form: {
    width: "80%",
    alignItems: "center",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    marginVertical: 6,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colours.primary,
    borderWidth: 1.5,
    fontFamily: "sans-serif-condensed",
    backgroundColor: "#fff",
  },
  forgotPassword: {
    width: "100%",
    fontSize: 14,
    marginTop: 3,
    textAlign: "right",
    color: colours.primary,
    fontFamily: "sans-serif-condensed",
  },
  loginButton: {
    width: "100%",
    height: 50,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colours.primary,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    fontFamily: "sans-serif-condensed",
  },
  noAccount: {
    fontSize: 16,
    fontFamily: "sans-serif-condensed",
    color: colours.text,
  },
  signupLink: {
    fontSize: 16,
    fontWeight: "bold",
    color: colours.primary,
  },
});

export default Login;
