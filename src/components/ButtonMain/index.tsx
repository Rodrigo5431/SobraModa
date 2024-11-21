import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface PropsButton {
  title: string;
  propsBackgroundColor: string;
  handleFunction?: () => void;
}

export const ButtonMain = ({
  title,
  propsBackgroundColor,
  handleFunction,
}: PropsButton) => {
  return (
    <TouchableOpacity
      onPress={handleFunction}
      activeOpacity={0.2}
      style={[ styles.styleButton,{ backgroundColor: propsBackgroundColor ? propsBackgroundColor : "Blue",},]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
