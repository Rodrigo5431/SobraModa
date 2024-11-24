import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C9ACF2",
    alignItems: "center",
    justifyContent: "center",
  },

  tituloPrincipal: {
    fontFamily: "IslandMoments_400Regular",
    fontSize: 90,
    color: "#342142",
  },

  input: {
    marginBottom: 15,
    marginTop: 15,
  },

  inputBox: {
    width: "90%",
    backgroundColor: "#34214260",
    paddingHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 5,
    marginBottom: 20,
  },

  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 8,
    alignSelf: "center",
  },

  imageBoxWithImage: {
    justifyContent: "flex-start",
  },
  imageInsideBox: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    resizeMode: "cover",
  },

  caixa: {
    width: 100,
    height: 100,
    borderColor: "rgba(0,0,0,0.6)",
    borderWidth: 1,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#D0B9F0",
    marginBottom: 20,
    position: "relative",
  },

  msg: {
    fontSize: 15,
    color: "#342142",
    marginBottom: 10,
  },

  button: {
    width: "60%",
  },

  ButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  arrowLogin:{
    right: 150,
    bottom: 45
  },

});
