import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E3D5F6",
      padding: 20,
    },
    title: {
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
      backgroundColor: "#fff",
      alignSelf: "flex-start",
    },
    myMessage: {
      backgroundColor: "#DCF8C6",
      alignSelf: "flex-end",
    },
    user: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 5,
    },
    message: {
      fontSize: 14,
      color: "#555",
    },
    inputContainer: {
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
    },
    sendButton: {
      backgroundColor: "#6200ee",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    sendButtonText: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "bold",
    },
  });
  