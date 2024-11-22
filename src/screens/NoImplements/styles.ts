import { StyleSheet } from "react-native";
import {colors} from "../../styles/colors";

export const styles = StyleSheet.create({
    container:{        flex: 1,
        backgroundColor: colors.purple.cor5,
        alignItems: "center",
        justifyContent: "center",
    }, 
    text:{
        fontSize:24,
        fontWeight:"500",
        color: colors.basic.preto,
    }, 
    image:{
        width:"80%",
        aspectRatio:2/1,
        resizeMode:"contain", 
    },


})