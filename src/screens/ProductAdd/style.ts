import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3D5F6",
    alignItems: "center",
    // justifyContent: "center",
  },

  caixa: {
    width: "75%",
    height: 190,
    borderColor: "rgba(0,0,0,0.6)",
    borderWidth: 1,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 180,
    backgroundColor: "#D0B9F0",
    marginBottom: 30
  },

  msg: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },

  info: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    width: "100%",
    bottom: 0,
    height: 60,
    borderWidth: 1,
    backgroundColor: "#342142",
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
  },

  btnAdd: {
    borderWidth: 1,
    borderColor: "#342142",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#E3D5F6",
    width: 100,
    marginRight: 20,
    alignItems: "center",
  },

  btnText: {
    fontSize: 16,
  }
});
