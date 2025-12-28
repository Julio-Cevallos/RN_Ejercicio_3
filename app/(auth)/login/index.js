import {useState} from 'react';
import {View,Text, TextInput, Alert, Pressable, StyleSheet} from 'react-native';
import {router} from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserByCredentials, initDatabase } from '../../../db/database';

/*
import * as SQLite from "expo-sqlite";
console.log("SQLite keys", SQLite);
*/

export default function Login(){
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    const onLogin= async()=> {
        const userValue= username.trim();

        if(!userValue || !password){
            Alert.alert("Error", "Complete todos los campos");
            return;
        }

        try{
            await initDatabase();
            const user= await getUserByCredentials(userValue, password);

            if(user){
                await AsyncStorage.setItem("auth_user", user.id.toString());
                router.replace("/(drawer)");
            } else{
                Alert.alert("Error", "Credenciales incorrectas");
            }
        } catch(error){
            Alert.alert("Error", "Error al validar usuario");
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}> Inicio Sesion </Text>

            <TextInput 
            style={styles.input} 
            placeholder='Usuario'  
            value={username} 
            onChangeText={setUsername} 
            autoCapitalize='none'/>

            <TextInput 
            style={styles.input} 
            placeholder='Contraseña'  
            secureTextEntry
            value={password} 
            onChangeText={setPassword} 
            />

            <Pressable style={styles.button} onPress={onLogin}>
                <Text style={styles.buttonText}> Ingresar </Text>
            </Pressable>

            <Pressable style={styles.registerButton} onPress={()=> router.push("/(auth)/register")}>
                <Text style={styles.registerText}> Crear Cuenta </Text>
            </Pressable>
        </View>
    )
}

const styles= StyleSheet.create({
       container:{
        flex:1,
        justifyContent:'center',
        padding:24,
        backgroundColor:"#F9FAFB", 
    },
    title:{
        fontSize:22,
        fontWeight:'600',
        marginBottom:24,
        textAlign:'center',
    },
    input:{
        backgroundColor:"#FFFFFF", 
        padding:14,
        borderRadius:10,
        marginBottom:12,
        borderWidth:1,
        borderColor: "#E0E0E0", 
    },
    button:{
        backgroundColor: "#00C853", 
        padding:16,
        borderRadius:12,
        marginTop:12,
    },
    buttonText:{
        color:"#FFFFFF", 
        fontWeight:'600',
        textAlign:'center',
    },
    registerButton:{
        marginTop:20,
        textAlign:'center',
    },
    registerText:{
        color:"#1B5E20", 
        fontSize:16,
    },
})