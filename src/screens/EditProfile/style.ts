import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E3D5F6",
    height: "100%",
    alignItems: "center",
    paddingTop:30
  },
  title:{
    height: "7%",
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize:35,
    backgroundColor: '#8B65BF'

  },
  editItem: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:150,
    gap:35,
  },
  userImg:{
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },

  name: {
    gap: 10,

  },
  alter:{
    color: "#fff",
    fontSize:20,
    textAlign: "center",
    marginBottom:10
  },
  buttonChange:{
    backgroundColor: '#8C7088',
    padding: 10,
    borderRadius: 50,
    width: 250,
    height: 100,

  },
  input:{
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 300,
    height: 50,
    backgroundColor: "#F2F2F2",
    fontSize: 18,
    fontWeight: "600",
    paddingLeft: 10,
  },
  userInformation:{
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    textAlign: "center",
  },
});
