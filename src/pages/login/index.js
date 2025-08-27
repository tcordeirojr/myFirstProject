import React from "react";
import {Text, View, Image, TextInput, Button, TouchableOpacity} from "react-native";
import { styles } from "./style";
import Logo from '../../assets/iconUser.png';
export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
            <Image source={Logo} style={styles.Image}/>
            <Text style={styles.TextoPrincipal}> Seja Bem vindo</Text>
      </View>
      <View style={styles.boxMid}>
            <Text style={styles.TextInput}>Endereço de e-mail</Text>
            <TextInput style={styles.InputText}/>
      </View>
      <View style={styles.boxBottom}>
            <Text style={styles.TextInput}>Senha</Text>
            <TextInput style={styles.InputText}/> 
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.TextButton}>Entrar</Text>
            </TouchableOpacity>
            
            <Text style={styles.TextInputS}>Esqueci minha senha</Text>
      </View>
    </View>

  
  
  )
}