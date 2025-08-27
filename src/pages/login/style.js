import { Button, StyleSheet, TextInput } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffffff",
  },
    boxTop: {
        width: "80%",        
        height: 200,
    },
    TextoPrincipal: {
        top: 20,
        alignSelf: 'center',
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',},
    Image: {
        width: 230,
        top: 30,
        height: 130,
       resizeMode: 'contain',
      alignSelf: 'center',},
    boxMid: {
        width: "80%",
        height: 100,
    },
    TextInput: {
        top: 20,
        left: 20,
        color: '#000',
        fontSize: 14,
        alignSelf: 'flex-start',
        fontWeight: 'bold',},
    InputText: {
        width: "90%",
        height: 40,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#000',
        alignSelf: 'center',
        top: 30,},    
    boxBottom: {      
        width: "80%",
        bottom: 20,  
        height: 200,
  },
    TextInputS: {
        top: 70,
        left: 20,
        color: '#082f55ed',
        fontSize: 14,
        alignSelf: 'flex-start',
        fontWeight: 'bold',},
    Button: {
        top:60,
        borderRadius: 7,
        alignSelf: 'center',
        width: "90%",
        height: 40,
        backgroundColor: '#082f55ed',
        },
    TextButton: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',  
        color: '#fff',
        top: 5,
        fontSize: 18,},
});