import { Text, View } from "react-native"
import { styles } from "./style";
import React from "react";

export const HeaderChat = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.msg}>Mensagens</Text>
            <View style={styles.invertedCorner} />
        </View>
    )
}