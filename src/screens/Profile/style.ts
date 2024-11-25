import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors"
;
export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purple.cor5,
        height: '100%',
      },
      header:{
        marginTop: 40,
        height: 40,
        backgroundColor:colors.purple.cor5,
      },
      userName:{
        fontFamily: "ComicNeue_700Bold",
        fontSize:30,
        justifyContent:"center", 
        alignSelf:"center",
        backgroundColor: colors.purple.cor5,
      },
      user:{
        marginTop:40,
        alignItems: 'center',
        gap:15,
      },
      userImage:{
        width:130,
        height:130,
        borderRadius: 60,
        borderWidth: 1,
        borderColor:'black'
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
        gap:5, 
        padding:10, 
        justifyContent: 'center',
        alignItems: 'center',
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
      postTitle:{
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        fontFamily: "ComicNeue_700Bold"
      },
      postDesc:{
        marginTop: 5,
        fontSize: 16,
      },
      postPrice:{
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00b894',
        fontFamily: "ComicNeue_700Bold"
      }
});
