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
import colours from "../components/Colours";

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? colours.primary : colours.text;

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
        color: colours.primary,
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
        color: colours.primary,
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
        color: colours.primary,
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
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.replace("Login")}
      pages={[
        {
          backgroundColor: colours.secondary,
            image: <Image style={styles.image} source={require('../assets/1.png')} />,
          title: <Text style={styles.title}>Manage Salaries</Text>,
          subtitle: (
            <Text style={styles.text}>
              Manage the Salary of your Employess by adding different per hour
              salary for different employee
            </Text>
          ),
        },
        {
          backgroundColor: colours.secondary,
            image: <Image style={styles.image} source={require('../assets/2.png')} />,
          title: (
            <Text style={styles.title}>
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
          backgroundColor: colours.secondary,
            image: <Image style={styles.image} source={require('../assets/3.png')} />,
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
    backgroundColor:colours.secondary,
  },
  image: {
    height: 200,
    width: 200,
    marginTop: -100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    color: colours.primary,
  },
  text: {
    color: colours.text,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
