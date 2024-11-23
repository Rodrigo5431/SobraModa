import { Dimensions, Platform, StyleSheet } from "react-native";
const screenWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3D5F6",
    paddingBottom: 60,
  },

  containerPlusMaxAdvencedPower: {
    marginTop: 100,
  },

  container2: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 0,
  },

  container3: {
    alignItems: "center",
    top: 0,
  },

  produtoContainer: {
    height: 200,
    margin: 5,
    marginVertical: 35,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  produtoImage: {
    width: 150,
    height: 150,
    borderRadius: 15,
    margin: 0,
    padding: 5,
    borderWidth: 2,

    borderColor: "#8B65BF",
  },

  produtoTitle: {
    fontSize: 14,
    // fontWeight: 'bold',

    textAlign: "center",
    color: "#333",
    fontFamily: "Comic Neue",
    marginTop: 0,
  },

  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    width: "60%",
    padding: 3,
    borderRadius: 20,
    // alignContent: ,
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: "30%",
    marginTop: "-20%",
    // borderWidth: 2,
    borderColor: "#8B65BF",
  },
  buttonText: {
    color: "#333",

    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },

  buttonText2: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    color: "#555",
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#8B65BF",
    backgroundColor: "#E3D5F6",
  },
  profileContainer: {
    flexDirection: "row",
    marginTop: -30,
    marginBottom: 50,
  },
});

export default style;
