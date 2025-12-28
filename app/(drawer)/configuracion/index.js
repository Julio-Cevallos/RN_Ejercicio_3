/*import {View,Text,StyleSheet, Pressable} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {router} from 'expo-router';

export default function Configuracion(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Configuracion </Text>

            <Pressable style={styles.item} onPress={()=>router.push("/configuracion")}>
                <Ionicons name='person-circle' size={22} color="#1B5E20"/>
                <Text style={styles.text}> Perfil </Text>
            </Pressable>

            <Pressable style={styles.item} onPress={()=>router.push("/configuracion/seguridad")}>
                <Ionicons name='lock-closed' size={22} color="#1B5E20"/>
                <Text style={styles.text}> Seguridad </Text>
            </Pressable>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor: "#F9FAFB",
    },
    title:{
        fontSize:22,
        fontWeight:'600',
        marginBottom:20,
        color: "#1B5E20",
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"#FFFFFF",
        padding:16,
        borderRadius:14,
        marginBottom:12,
        gap:12,
        elevation:2,
    },
    text:{
        fontSize:16,
        fontWeight:'500',
    },
}) */

import {View,Text,StyleSheet, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {router, useLocalSearchParams} from 'expo-router';
import {useContext} from 'react';

export default function Configuracion({route}){
    //const{setIsAuthenticated}= route.params;

    const logout= async()=> {
        await AsyncStorage.removeItem("auth_user");
        //setIsAuthenticated(false);
        router.replace("/login");
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}> Configuracion </Text>

            <Pressable style={styles.logout} onPress={logout}>
                <Text style={styles.logoutText}> Cerrar Sesion </Text>
            </Pressable>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:"#F9FAFB", 
    },
    title:{
        fontSize:22,
        fontWeight:'600',
        marginBottom:20,
    },
    logout:{
        backgroundColor: "#D32F2F", 
        padding:14,
        borderRadius:12,
    },
    logoutText:{
        color: "#FFFFFF",
        fontWeight:'600',
        textAlign:'center',
    },
})