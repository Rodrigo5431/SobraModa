import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E3D5F6',
        height: '100%',
      },
      user:{
        marginTop:40,
        alignItems: 'center',
        gap:15,
      },
      userImage:{
        backgroundColor: 'black',
        width:130,
        height:130,
        borderRadius: 60,
      },
      talk:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      },
      talkButton:{
        flexDirection: 'row',
        backgroundColor: '#342142',
        padding: 10,
        borderRadius: 50,
        width: 180,
        alignItems: 'center',
      },
      talkImg:{
        width: 35,
        height: 35,
        borderRadius: 25,
      },
      talkText:{
        marginLeft:10,
        color: 'white',
        fontSize: 17,
        fontWeight: '600',
      },
      postsArea:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
      },
      posts:{
        
      },
    
      postImg:{
        borderWidth:2,
        borderColor:'grey',
        width: 130,
        height: 150,
        borderRadius: 25,
        marginBottom: 5,
        // marginHorizontal:1
      },
     
});
