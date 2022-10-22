import React, { useState } from "react";
import {
  AppBar,
  HStack,
  IconButton,
  Backdrop,
  BackdropSubheader,
  Stack,
} from "@react-native-material/core";
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Touchable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "../assets/style/style";
import { Text, Card, Button, Icon } from "@rneui/themed";

const ScrollViewCard = () => {
  return (
    <Card>
      <View style={{ width: 200 }}>
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
          }}
        />
        <Card.Title>Item Title </Card.Title>
        <Text>Item Creator Profile</Text>
        <Text>Small Description</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  item: {},
});

export default ScrollViewCard;
