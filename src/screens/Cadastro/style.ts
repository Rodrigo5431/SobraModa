import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C9ACF2",
    alignItems: "center",
    justifyContent: "center",
  },

  tituloPrincipal: {
    fontFamily: "Island Moments",
    fontSize: 36,
    color: "#342142",
    marginBottom: 50,
  },

  inputs: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 25,
  },

  textInput: {
    width: "100%",
    fontWeight: "bold",
    color: "#342142",
    left: 50,
    marginBottom: 2,
  },

  buttonFinalizar: {
    width: "60%",
    height: 40,
    backgroundColor: "#342142",
    borderRadius: 10,
    justifyContent: "center",
  },

  textButtonFinalizar: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    left: 80,
  },
});
