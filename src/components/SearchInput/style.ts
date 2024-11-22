import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    backgroundColor: "#fff",
    marginTop: 175,
    width: "80%",
    borderRadius: 50,
    paddingHorizontal: 15,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,  
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
});
