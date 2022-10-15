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
// import Carousel from "react-native-snap-carousel";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Home = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <Backdrop>
      <BackdropSubheader title='Custom Info' />
    </Backdrop>
  );
};

export default Home;
