import React, { useState } from "react";
import {
  AppBar,
  HStack,
  IconButton,
  Backdrop,
  BackdropSubheader,
  Stack,
} from "@react-native-material/core";
import { StyleSheet, View, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "../assets/style/style";
import { Text, Card, Button, Icon } from "@rneui/themed";
import ScrollViewCard from "../components/ScrollViewCard";

const Home = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <Backdrop>
      <BackdropSubheader title='Custom Info' />
      <ScrollView>
        <ScrollView horizontal>
          <ScrollViewCard />
          <ScrollViewCard />
        </ScrollView>
        <ScrollView horizontal>
          <ScrollViewCard />
          <ScrollViewCard />
        </ScrollView>
      </ScrollView>
    </Backdrop>
  );
};

export default Home;
