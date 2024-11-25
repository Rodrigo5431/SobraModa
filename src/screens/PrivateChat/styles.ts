import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex:0.9,
    backgroundColor: colors.purple.cor5,
    padding: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "ComicNeue_700Bold"
  },
  messagesList: {
    flex: 1,
    marginBottom: 10,
    fontFamily: "ComicNeue_700Bold"
  },
  messageBox: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    maxWidth: "80%",
    fontFamily: "ComicNeue_700Bold"
  },
  theirMessage: {
    backgroundColor: colors.purple.cor4,
    alignSelf: "flex-start",
    color: colors.basic.preto,
    fontFamily: "ComicNeue_700Bold"
  },
  myMessage: {
    backgroundColor: colors.purple.cor3,
    alignSelf: "flex-end",
    fontFamily: "ComicNeue_700Bold"
  },
  user: {
    fontSize: 14,
    // fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "ComicNeue_700Bold"
  },
  message: {
    fontSize: 14,
    color: colors.basic.preto,
    fontFamily: "ComicNeue_700Bold"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    flex:1, 
    flexDirection:"row",
    padding: 20,
    fontSize: 14,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginRight: 80,
    minWidth: 190, 
    fontFamily: "ComicNeue_700Bold"
  },
  sendButton: {
    paddingBlockEnd:30,
    backgroundColor: colors.purple.cor6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontFamily: "ComicNeue_700Bold",
    right: 50,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 14,
    // fontWeight: "bold",
    fontFamily: "ComicNeue_700Bold"
  },
});
