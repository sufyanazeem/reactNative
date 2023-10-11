import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // You might need to install this package

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="menu" size={24} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/user6.jpeg")}
          style={styles.profileImage}
        />
        <Text style={styles.welcomeText}>Welcome, John Doe</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: "black", 
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, 
  },
  welcomeText: {
    marginLeft: 10,
    color: "white", 
    fontSize: 16, 
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    color: "white", 
    marginHorizontal: 10,
  },
});

export default Header;
