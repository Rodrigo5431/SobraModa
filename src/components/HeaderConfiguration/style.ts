import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 0.03,
        backgroundColor: '#E3D5F6',
        paddingTop: '10%',
        paddingLeft:25,
        paddingRight:25,
      },
      navBar:{
        flexDirection: 'row',
        justifyContent:'space-between',
      },
      userName:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        paddingRight: 10,
      },
      configIcon:{
        width: 35,
        height:37,
        alignItems: 'center',
        justifyContent: 'center',
      },
      configMenu:{
        flexDirection: 'column',
        backgroundColor: 'purple',
        position:"absolute",
        left:235,
        top:80,
        width: 150,
        height: 170,
        borderRadius: 10,
        shadowColor: "#000",
        zIndex:1,
        alignItems: 'center',
      },
      userEmail:{
        marginTop:10,
        color: '#fff',
        fontFamily: "ComicNeue_700Bold"
      },
      editProfileButton:{
        marginTop:5,
      },
      editProfile:{
        color: '#fff',
        fontSize: 18,
        padding: 10,
        fontWeight: '600',
        marginBottom: 10,
        textAlign:'center',
        fontFamily: "ComicNeue_700Bold"
      },
      logoutButton:{
        justifyContent:"center",
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 50,
        width: 100,
        marginTop:'20%',
      },
      
    });
