import { Dimensions, Platform, StyleSheet } from "react-native";
const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3D5F6",
    paddingBottom: 60,
  },

  containerPlusMaxAdvencedPower: {
    marginTop: 30,
  },
  profileAndSearchContainer: {
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "space-around"
  },


  container3: {
    marginLeft:30, 
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
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5, 
    // textAlign: "center",
    color: "#333",
    fontFamily: "Comic Neue",
    marginLeft: 0,
    marginRight: 10,
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
    alignItems: "center",
    marginBottom: 50,
    marginRight:10,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    width: "60%", 
    borderColor: "#8B65BF",
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginRight: 10,
    fontSize: 16,
    alignItems:"center", 
  },
  chatText: {
    fontSize: 14,
    color: "#0066cc",
    textDecorationLine: "underline",
    marginTop: 5,
    marginRight: 20,
  },
  price: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10, // Espaçamento abaixo do preço
    marginLeft:25,
  },
  container2: {
    marginLeft:20, 
    marginBottom: 30,
    alignItems:'center', 
    textAlign: "center",
    justifyContent: "center",
  },
});
