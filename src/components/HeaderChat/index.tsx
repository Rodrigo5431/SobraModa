import { Text, View } from "react-native"
import { styles } from "./style";
import React from "react";

interface propsTexto {
    texto: string;
}

export const HeaderChat = ({texto}: propsTexto) => {
    return(
        <View style={styles.header}>
            <Text style={styles.msg}>{texto}</Text>
            <View style={styles.invertedCorner} />
        </View>
    )
}