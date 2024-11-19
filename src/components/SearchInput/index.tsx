import React from "react";
import { View, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./style";

interface PropsInput {
  placeHolder: string;
  onSearch: (texto: string) => void;
}

export const SearchInput = ({ placeHolder, onSearch }: PropsInput) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Icon name="search" type="font-awesome" color="rgba(0,0,0,0.7)" size={20} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor="rgba(0,0,0,0.5)"
        onChangeText={(texto) => onSearch(texto)}
      />
    </KeyboardAvoidingView>
  );
};
