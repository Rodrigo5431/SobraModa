import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3D5F6",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    alignItems: "center",
  },
  
  loadingText: {
    fontSize: 16,
    textAlign: "center",
    color: "#888",
  },
  chatContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "flex-start",
  },
  
  chatUser: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 14,
    color: "#333",
  },
  chatMessage: {
    fontSize: 14,
    color: "#555",
  },

  chatBubble: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  
  userImage: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginRight: 10,
  },
  
  textContainer: {
    flex: 1,
  },



  
});
