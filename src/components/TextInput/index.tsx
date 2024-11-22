import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./style";
import React from "react";

interface PropsInteput {
  placeHolder: string;
  typeInput?: boolean;
  valueInput?: string;
  typeIcon?: string;
  onChangeText?: any;
  handleFunctionInput?: (value: string) => void;
}

export const TextInputField = ({
  placeHolder,
  typeInput,
  valueInput,
  typeIcon,
  onChangeText,
  handleFunctionInput,
}: PropsInteput) => {

  const [viewPassword, setViewPassword] = useState<boolean>(false);

  return (
    <View style={styles.boxInput}>
      <TextInput
        onChangeText={handleFunctionInput}
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor="#C3ABAB"
        secureTextEntry={typeIcon === "password" ? viewPassword : typeInput}
        value={valueInput}
      />
      <View style={styles.boxIcon}>
        {typeIcon === "person" && <Icon name="person" />}
      </View>

      <View style={styles.boxIcon}>
        {typeIcon === "password" && (
          <TouchableOpacity onPress={() => setViewPassword(!viewPassword)}>
            {viewPassword ? (
              <Icon name="eye-off-outline" type="ionicon" />
            ) : (
              <Icon name="eye-outline" type="ionicon" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
