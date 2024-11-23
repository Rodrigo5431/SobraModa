import React from "react";
import {
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./style";

interface PropsInput {
  placeHolder: string;
  value: string;
  onChangeText: (text: string) => void;
  height?: number;
  keyboardType?: "default" | "numeric";
}

export const ProductInput = ({
  placeHolder,
  value,
  onChangeText,
  height = 54,
  keyboardType = "default",
}: PropsInput) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput
        style={[styles.msg, { height }]}
        placeholder={placeHolder}
        placeholderTextColor="rgba(0,0,0,0.5)"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </KeyboardAvoidingView>
  );
};
