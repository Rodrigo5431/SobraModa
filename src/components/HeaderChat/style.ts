import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#342142",
    width: "100%",
    height: 180,
    top: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 10,
    zIndex: 10
  },
  
  invertedCorner: {
    position: "absolute",
    top: 140,
    width: "100%",
    height: 40,
    backgroundColor: "#E3D5F6",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  msg: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 10,
    fontFamily: "ComicNeue_700Bold"
  },
});
