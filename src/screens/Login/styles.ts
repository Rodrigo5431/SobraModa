import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C9ACF2",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    height: 150,
    width: 120,
  },


    tituloPrincipal:{
       fontFamily: "IslandMoments_400Regular",
       fontSize: 36,
       color: "#342142",
       marginBottom: 30
    },

  boxForms: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    gap: 10,
    borderRadius: 5,
    backgroundColor: "#34214260",
    paddingTop: 30,
  },

  linha: {
    backgroundColor: "#ffffff60",
    width: "100%",
    height: 1,
  },

  cadastro: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
