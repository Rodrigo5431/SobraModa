import { ActivityIndicator, View } from "react-native";
import { styles } from "./style";
import React from "react";

export const Loading = () => {
  return (
    <View style={styles.loadingArea}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};
