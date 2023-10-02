import React from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Ionicons } from '@expo/vector-icons';


const Login = () => {
    let [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf')
      })
      if (!fontsLoaded) {
        return <AppLoading />
      }

  return (
    <View>
      <Text style={{fontFamily:'Poppins-Regular'}}>Login</Text>
    </View>
  );
};

export default Login;
