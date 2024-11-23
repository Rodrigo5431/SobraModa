import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./style";

interface PropsInput {
  placeHolder: string;
  typeInput?: boolean;
  valueInput?: string;
  typeIcon?: string;
  handleFunctionInput?: (value: string) => void;
}

export const TextInputField = ({
  placeHolder,
  typeInput,
  valueInput,
  typeIcon,
  handleFunctionInput,
}: PropsInput) => {
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => setViewPassword(!viewPassword);

  return (
    <View style={styles.boxInput}>
      <TextInput
        onChangeText={handleFunctionInput}
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor="#C3ABAB"
        secureTextEntry={typeIcon === "password" && !viewPassword}
        value={valueInput}
      />
      <View style={styles.boxIcon}>
        {typeIcon === "person" && <Icon name="person" />}
        {typeIcon === "password" && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon
              name={viewPassword ? "eye-outline" : "eye-off-outline"}
              type="ionicon"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
