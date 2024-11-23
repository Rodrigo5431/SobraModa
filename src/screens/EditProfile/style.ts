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
  userImg: {
    width: 120,
    height: 120,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom:50
  },

  name: {
    gap: 10,

  },
  alter:{
    color: "#fff",
    fontSize:20,
    textAlign: "center",
    marginBottom:10,
    fontWeight:'600'
  },
  buttonChange:{
    backgroundColor: '#8C7088',
    padding: 10,
    borderRadius: 50,
    width: 250,
    height: 80,
    justifyContent: "center",

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
  changeInformation:{
    position: "absolute",
    top: 220,
    left: 20,
    width: 350,
    height: 500,
    borderRadius:25,
    backgroundColor: '#8B65BF',
    alignItems: 'center',
  },
  titleArea:{
    marginTop: 20,
    marginBottom: 150,
    color: '#fff',
  },
  titleAreaPassword:{
    marginTop: 20,
    marginBottom: 100,
    color: '#fff',
  },
  saveButton:{
    backgroundColor: 'green',
    borderRadius: 50,
    width: 100,
    height: 50,
    marginTop: 100,
    justifyContent:'center',

  },
  nameofchange:{
    fontSize: 30,
    fontWeight: "bold",
    color: '#fff',
  },
  saveButtonText:{
    textAlign:'center',
    fontSize: 20,
    fontWeight:'600',
    color: '#fff',
  },
  saveButtonPassword:{
    backgroundColor: 'green',
    borderRadius: 50,
    width: 100,
    height: 50,
    marginTop: 30,
    justifyContent:'center',
  },
  logoutArea:{
   marginTop:120

  },
  logoutButton:{
    backgroundColor: 'green',
    width: 100,
    borderRadius:50,
    paddingTop:5
    }
});
