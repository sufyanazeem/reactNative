import React from "react";
import { Alert, Animated, StyleSheet, TouchableOpacity } from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

export default function App() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "title1":
        icon = "ios-home-outline";
        break;
      case "title2":
        icon = "settings-outline";
        break;
      case "title3":
        icon = "settings-outline";
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? "black" : "gray"}
      />
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const CurvedBottomBarStack = createStackNavigator();
  const MainStack = createStackNavigator();

  const CurvedBottomBar = () => {
    return (
      <CurvedBottomBarExpo.Navigator
        screenOptions={{ headerShown: false }}
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={55}
        circleWidth={50}
        bgColor="white"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert("Click Action")}
            >
              <Ionicons name={"apps-sharp"} color="gray" size={25} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name="title1"
          position="LEFT"
          component={() => <Screen1 />}
          options={{ headerShown: false }}
        />
        <CurvedBottomBarExpo.Screen
          name="title2"
          component={() => <Screen2 />}
          position="RIGHT"
          options={{ headerShown: false }}
        />
      </CurvedBottomBarExpo.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={
          {
            // cardStyleInterpolator: CardStyleInterpolators.forFade
          }
        }
      >
        <MainStack.Screen
          name="Onboarding"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CurvedBottomBar"
          component={CurvedBottomBar}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    bottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: "#BFEFFF",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#FFEBCD",
  },
});
