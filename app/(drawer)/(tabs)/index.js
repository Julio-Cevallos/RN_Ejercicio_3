import {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

export default function Hombe(){

    const [contador, setContador]=useState(0);

    return(
        <View style={styles.container}>
            <Text style={styles.counter}> {contador} </Text>
            <Text style={styles.subtitle}> Contador </Text>

            <View style={styles.buttons}>
                <Pressable style={styles.primary} onPress={()=>setContador(contador+1)}>
                    <Text style={styles.primaryText}> Sumar </Text>
                </Pressable>

                <Pressable style={styles.secondary} onPress={()=> setContador(0)}>
                    <Text style={styles.secondaryText}> Resetear </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#F9FAFB",
    },
    counter:{
        fontSize:64,
        fontWeight:'600',
        color:"#1B5E20",
    },
    subtitle:{
        fontSize:16,
        color:"#6B7280",
        marginBottom:12,
    },
    buttons:{
        flexDirection:'row',
        gap:12,
    },
    primary:{
        backgroundColor:"#00C853",
        paddingHorizontal:24,
        paddingVertical:12,
        borderRadius:14,
    },
    primaryText:{
        color:"#fff",
        fontWeight:'600',
    },
    secondary:{
        borderWidth:1,
        borderColor: "#00C853",
        paddingHorizontal:24,
        paddingVertical:12,
        borderRadius:14,
    },
    secondaryText:{
        color:"#00C853",
        fontWeight:'600',
    },
})