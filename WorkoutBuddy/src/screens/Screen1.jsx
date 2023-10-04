import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
// import { AUTH } from "../../Connection/FirebaseConfig";
import { DB } from "../../Connection/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
const Screen1 = () => {
  const onclick = async () => {
    try {
      const docRef = await addDoc(collection(DB, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <View>
      <Text>Hesghk</Text>

      <TouchableOpacity onPress={onclick}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;
