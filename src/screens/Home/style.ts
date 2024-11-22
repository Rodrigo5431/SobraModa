import { Dimensions, Platform, StyleSheet } from "react-native";
const screenWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3D5F6",
    paddingTop: 90,
    paddingBottom: 60,
  },
  container2: {
    paddingBottom: 80,
    alignItems: "center",
    marginTop: 30,
  },

  perfil: {
    justifyContent: "center",
  },
  produtoGrid: {
    paddingHorizontal: 5,
    paddingTop: 10,
    justifyContent: "center",
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
    width: 200,
    height: 180,
    borderRadius: 15,
    margin: 0,
    padding: 5,
    borderWidth: 2,
    borderColor: "#8B65BF",
  },

  ProdutoContainer: {
    flex: 1,
    margin: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 220,
  },
  ProdutoImage: {
    width: screenWidth / 2 - 30,
    height: 140,
    borderRadius: 10,
  },

  produtoTitle: {
    marginTop: -2,
    marginBottom: 0,
    fontSize: 14,
    // fontWeight: 'bold',
    textAlign: "center",
    color: "#333",
    fontFamily: "Comic Neue",
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  searchInput: {
    // flex: 1,
    height: 40,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },

  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    width: "60%",
    padding: 3,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: "30%",
    marginLeft:130,
    marginTop: "-29%",
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
    marginTop: -30,
    marginBottom: 50,
    marginLeft: 10,
  },
});

export default style;
