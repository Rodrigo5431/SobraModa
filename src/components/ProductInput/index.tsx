import React from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./style";

interface PropsInput {
  placeHolder: string;
  height?: number;
}

export const ProductInput = ({ placeHolder, height }: PropsInput) => {
  return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={{ height: height || 54 }}
          placeholder={placeHolder}
          placeholderTextColor="rgba(0,0,0,0.5)"
        />
      </KeyboardAvoidingView>
  );
};
