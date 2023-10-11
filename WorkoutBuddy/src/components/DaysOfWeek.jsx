import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DaysOfWeek = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDayIndex = new Date().getDay(); // Get the current day index (0-6)

  return (
    <View style={styles.container}>
      {days.map((day, index) => (
        <View
          key={index}
          style={[
            styles.dayContainer,
            index === currentDayIndex && styles.currentDay,
          ]}
        >
          <Text
            style={[
              styles.dayText,
              index === currentDayIndex && styles.currentDayText,
            ]}
          >
            {day}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:7,
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: "black", // Header background color
    borderRadius: 30, // Make the container round
  },
  dayContainer: {
  
    width: 40,
    height: 40,
    borderRadius: 20, // Make each day round
    alignItems: "center",
    justifyContent: "center",
  },
  dayText: {
    color: "white", // Default text color for non-current days
    fontSize: 16,
  },
  currentDay: {
    backgroundColor: "#f2c40f", // Background color for the current day
  },
  currentDayText: {
    color: "white", // Text color for the current day
  },
});

export default DaysOfWeek;
