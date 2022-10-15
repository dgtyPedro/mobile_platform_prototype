import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import React, { useState } from "react";
import {
  Button,
  AppBar,
  HStack,
  IconButton,
  Backdrop,
  BackdropSubheader,
} from "@react-native-material/core";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

function App() {
  const [revealed, setRevealed] = useState(false);

  return (
    <NavigationContainer>
      <Backdrop
        revealed={revealed}
        header={
          <SafeAreaView>
            <AppBar
              title='Mobile Platform Prototype'
              transparent
              leading={(props) => (
                <IconButton
                  icon={(props) => (
                    <Icon name={revealed ? "close" : "menu"} {...props} />
                  )}
                  onPress={() => setRevealed((prevState) => !prevState)}
                  {...props}
                />
              )}
            />
          </SafeAreaView>
        }
        backLayer={
          <SafeAreaView style={{ height: "100%" }}>
            <Text>Options</Text>
          </SafeAreaView>
        }
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </Backdrop>
    </NavigationContainer>
  );
}

export default App;
