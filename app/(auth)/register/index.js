import {useState} from 'react';
import {View,Text,Pressable,Alert,StyleSheet,TextInput} from 'react-native';
import {router} from 'expo-router';
import {registerUser} from '../../../db/database';

export default function Register(){
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    const onRegister= async()=>{

        if(!username|| !password){
            Alert.alert("Error", "Complete todos los campos");
            return;
        }

        try{
            await registerUser(username, password);
            Alert.alert("OK", "Usuario creado correctamente");
            router.replace("/(auth)/login");
        } catch(error){
            Alert.alert("Error", "El usuario ya esta creado");
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}> Registro </Text>

            <TextInput
                style={styles.input}
                placeholder='Usuario'
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder='Contraseña'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <Pressable style={styles.button} onPress={onRegister}>
                <Text style={styles.buttonText}> Registrar </Text>
            </Pressable>
        </View>
    );
}

const styles=StyleSheet.create({
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
})