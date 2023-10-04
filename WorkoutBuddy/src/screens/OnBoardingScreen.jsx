import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBase,
} from "react-native";

import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text
      style={{
        fontSize: 16,
        color: "#542fe0",
        marginLeft: 15,
      }}
    >
      Skip
    </Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text
      style={{
        fontSize: 16,
        color: "#542fe0",
        marginRight: 15,
      }}
    >
      Next
    </Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text
      style={{
        fontSize: 16,
        color: "#542fe0",
        marginRight: 15,
      }}
    >
      Done
    </Text>
  </TouchableOpacity>
);

const OnBoardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      bottomBarHeight={40}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("CurvedBottomBar")}
      onDone={() => navigation.replace("CurvedBottomBar")}
      pages={[
        {
          backgroundColor: "#Fff",
            image: <Image style={styles.image} source={require('../assets/man-women1.png')} />,
          title: <Text style={styles.title}>Manage Salaries</Text>,
          subtitle: (
            <Text style={styles.text}>
              Manage the Salary of your Employess by adding different per hour
              salary for different employee
            </Text>
          ),
        },
        {
          backgroundColor: "#Fff",
            image: <Image style={styles.image} source={require('../assets/man.png')} />,
          title: (
            <Text style={[styles.title, { color: "#542fe0" }]}>
              Manage Attendance
            </Text>
          ),
          subtitle: (
            <Text style={styles.text}>
              Keep the record of the daily attendance of your Employees
            </Text>
          ),
        },
        {
          backgroundColor: "#Fff",
            image: <Image style={styles.image} source={require('../assets/women.png')} />,
          title: <Text style={styles.title}>Export Excel Sheets</Text>,
          subtitle: (
            <Text style={styles.text}>
              Export the excel sheet of all your staff data on a single click!,
            </Text>
          ),
        },
      ]}
    />
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  image: {
    height: 200,
    width: 200,
    marginTop: -100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    color: "#542fe0",
  },
  text: {
    color: "#000",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
