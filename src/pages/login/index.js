import React from "react";
import {Text, View, Image, TextInput} from "react-native";
import { styles } from "./style";
import {Logo} from '../../assets/logo.png';
export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
            <Image
            source={Logo}
            /><Text>Bem vindo de Volta</Text>
      </View>
      <View style={styles.boxMid}>
            <Text>Endereço de e-mail</Text>
            <TextInput/>
      </View>
      <View style={styles.boxBottom}>
            <Text>senha</Text>
            <TextInput/>
      </View>
    </View>

  
  
  )
}