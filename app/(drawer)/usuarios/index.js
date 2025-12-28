import {View,Text,StyleSheet, Pressable} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {router} from 'expo-router';

export default function Usuarios(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Usuarios </Text>

            <Pressable style={styles.item} onPress={()=>router.push("/usuarios")}>
                <Ionicons name='list' size={22} color="#1B5E20"/>
                <Text style={styles.text}> Lista de Usuarios </Text>
            </Pressable>

            <Pressable style={styles.item} onPress={()=>router.push("/usuarios/crear")}>
                <Ionicons name='person-add' size={22} color="#1B5E20"/>
                <Text style={styles.text}> Crear Usuario </Text>
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
})