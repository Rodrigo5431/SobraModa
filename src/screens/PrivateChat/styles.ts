import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors"; 

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.purple.cor5,
      padding: 20,
    },
    title: {
      marginTop:20,  
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
    },
    messagesList: {
      flex: 1,
      marginBottom: 10,
    },
    messageBox: {
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      maxWidth: "80%",
    },
    theirMessage: {
      backgroundColor: colors.purple.cor4, 
      alignSelf: "flex-start",
      color: colors.basic.preto,
    },
    myMessage: {
      backgroundColor: colors.purple.cor3,
      alignSelf: "flex-end",
    },
    user: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 5,
    },
    message: {
      fontSize: 14,
      color: colors.basic.preto,
    },
    inputContainer: {
      width:"100%", 
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: "#fff",
      borderRadius: 10,
    },
    input: {
      flex: 1,
      padding: 10,
      fontSize: 14,
      borderRadius: 10,
      borderColor: "#ccc",
      borderWidth: 1,
      marginRight: 10,
      width:20,

    },
    sendButton: {
      backgroundColor: colors.purple.cor6,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    sendButtonText: {

      color: "#fff",
      fontSize: 14,
      fontWeight: "bold",
      width:40,

      
    },
    bottomsend:{
      position:"absolute",
      right:0,
      backgroundColor:"#fff",
      width:40,
      height:"100%",
      justifyContent:"center",
      alignItems:"center",
      alignContent:"center",
  
  },
  });
  