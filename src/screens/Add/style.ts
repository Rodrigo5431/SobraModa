import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#342142',
    padding: 40,
  },
  textheader:{

    color: '#fff',
  },

  header: {
    // fontFamily: 
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
    color: '#fff', 
//     fontSize: 24,
//     fontWeight: 'bold',
fontFamily: "ComicNeue_700Bold",

  },
  containerFoto: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 40,
  },
  ButtonFoto: {
    backgroundColor: '#D0B9F0',
    width: 200,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
     borderStyle: 'dotted'
    // borderColor: '#4C306E'
  },
  containerCorpo:{
    backgroundColor: '#E3D5F6', 
    width: '125%',
    height: 660,
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    padding: 20,
    marginRight: 80,
    marginLeft: -45
  },

  TextFoto: {
    color: '#3333',
    fontSize: 16,
    fontWeight: 'bold',

  },
  label: {
   
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    marginStart: 30,

  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    marginBottom: 15,
    marginTop: 10,
    marginEnd: 40,
    marginStart: 30,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button:{
   
    backgroundColor: '#D0B9F0',
    padding: 14,
    marginBottom: 50,
    // height: ,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 250,
    width: 100,
    // padding: '50' ,
  },

  textbutton: {
 fontFamily: "ComicNeue_400Regular",
    color: '#333F',
    fontSize: 10,
    fontWeight: 'bold',
    width: 50,
    alignItems:"flex-end",
  },
});

export default style;
