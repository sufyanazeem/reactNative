import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import MHeader from "../components/Header";
// import { AUTH } from "../../Connection/FirebaseConfig";
import { DB } from "../../Connection/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

const Screen1 = () => {
  const [email, setEmail] = useState("");
  const data = {
    name: "Screen1",
    email: "<EMAIL>",
    password: "<PASSWORD>",
  };
  const logout = async () => {
    AsyncStorage.clear();
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("email");
        if (value !== null) {
          setEmail(value);
        }
      } catch (e) {
        console.log("Something went wrong, App.jsx", e);
      }
    };

    getData();

    // The effect should only run once, so leave the dependency array empty
  }, []);
  const onclick = async () => {
    try {
      const docRef = await addDoc(collection(DB, "dummy"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <ScrollView style={{ marginTop: 0 }}>
      <View>
        <MHeader />
        <TouchableOpacity>
          <Text onPress={logout}>Logout</Text>
        </TouchableOpacity>
        <Text>{email}</Text>

      </View>
    </ScrollView>
  );
};

export default Screen1;
