import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E3D5F6",
    height: "100%",
  },
  user: {
    marginTop: 40,
    alignItems: "center",
    gap: 15,
  },
  userImage: {
    width: 130,
    height: 130,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "black",
  },
  talk: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  talkButton: {
    flexDirection: "row",
    backgroundColor: "#342142",
    padding: 10,
    borderRadius: 50,
    width: 180,
    alignItems: "center",
  },
  talkImg: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
  talkText: {
    marginLeft: 10,
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
  postsArea: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  posts: {
    justifyContent: "center",
    alignItems: "center",
  },

  postImg: {
    borderWidth: 2,
    borderColor: "grey",
    width: 130,
    height: 150,
    borderRadius: 25,
    marginBottom: 5,
    // marginHorizontal:1
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  postDesc: {
    marginTop: 5,
    fontSize: 16,
  },
  postPrice: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#00b894",
  },

  deleteButton: {
    position: "relative",
    top: 15,
    width: 50,
    height: 40,
    borderRadius: 10,
  },
  
 confirm: {
  height: 100,
  width: 200,
  position: "absolute",
  backgroundColor: "#342142",
  top: 350,
  left: 95,
  zIndex: 1,
  borderRadius: 10,
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: 10,
  shadowColor: "#000", 
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  elevation: 8,
},


  buttom: {
    backgroundColor: "#8B65BF",
    borderRadius: 5,
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
    color: "#fff",
    marginLeft: 15,
    marginRight: 15,
    fontWeight: "bold"
  },

  msgDelete: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15
  },

  textDelete: {
    color: "#000",
    left: 15,
    fontWeight: "bold",
    fontSize: 20,
    bottom: 5
  },
});
