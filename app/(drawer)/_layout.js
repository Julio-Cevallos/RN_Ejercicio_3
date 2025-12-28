/* import {Drawer} from 'expo-router/drawer';
import {Ionicons} from '@expo/vector-icons';

export default function DrawerLayout(){
    return(
        <Drawer
            screenOptions={{
                drawerType:'slide',
                overlayColor:"rgba(0,0,0,0.2)",
                headerTitleAlign:'center',
                drawerActiveTintColor:"#1B5E20",
                drawerLabelStyle:{
                    fontSize:15,
                    fontWeight:'600',
                }
            }}
        >
            <Drawer.Screen 
                name="(tabs)"
                options={{
                    title:'Inicio',
                    drawerIcon:({color,size})=>(
                        <Ionicons name='home' size={size} color={color}/>
                    )
                }}
            />

            <Drawer.Screen 
                name="usuarios"
                options={{
                    title:'Uusarios',
                    drawerIcon:({color,size})=>(
                        <Ionicons name='people' size={size} color={color}/>
                    )
                }}
            />

            <Drawer.Screen 
                name="configuracion"
                options={{
                    title:'Configuracion',
                    drawerIcon:({color,size})=>(
                        <Ionicons name='settings' size={size} color={color}/>
                    )
                }}
            />
        </Drawer>
    );
} */

import { useEffect, useState } from 'react';
import {Drawer} from 'expo-router/drawer';
import {router} from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Ionicons} from '@expo/vector-icons';
import {View, Text, Pressable} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


export default function DrawerLayout(){
    const [checked, setChecked]= useState(false);

    useEffect(()=> {
        const checkAuth= async()=> {
            const user= await AsyncStorage.getItem("auth_user");

            if(!user){
                router.replace("/(auth)/login");
                return;
            }
            setChecked(true);
        };

        checkAuth();
    }, []);

    const logout= async()=>{
        await AsyncStorage.removeItem("auth_user");
        router.replace("/(auth)/login");
    };

    if(!checked){
        return null;
    }

    return(
        <Drawer
            screenOptions={{
                drawerType:'slide',
                overlayColor:"rgba(0,0,0,0.2)",
                headerTitleAlign:'center',
                drawerActiveTintColor:"#1B5E20",
                drawerLabelStyle:{
                    fontSize:15,
                    fontWeight:'500',
            }
        }}
        drawerContent={(props)=>(
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}/>

                <View style={{
                    marginTop:20, 
                    borderTopWidth:1, 
                    borderTopColor: "#E0E0E0", 
                    paddingTop:12, 
                    paddingHorizontal:16,
                }}>
                    <Pressable
                        onPress={logout}
                        style={{flexDirection:'row', alignItems:'center'}}
                    > 
                        <Ionicons
                            name="log-out-outline"
                            size={22}
                            color="#C62828" 
                            style={{marginRight:12}}
                        />
                        <Text
                            style={{fontSize:15, color: "#C62828", fontWeight:'500',}}
                        >
                            Cerrar Sesion
                        </Text>
                    </Pressable>
                </View>
            </DrawerContentScrollView>
        )}
        >
            <Drawer.Screen
                name="(tabs)"
                options={{
                    title:'Inicio',
                    drawerIcon:({color,size})=>(
                        <Ionicons name='home' size={size} color={color}/>
                    )
                }}
            />

            <Drawer.Screen 
                name="usuarios"
                options={{
                    title:'Uusarios',
                    drawerIcon:({color,size})=>(
                        <Ionicons name='people' size={size} color={color}/>
                    )
                }}
            />

            <Drawer.Screen 
                name="configuracion"
                options={{
                    title:'Configuracion',
                    drawerIcon:({color,size})=>(
                        <Ionicons name='settings' size={size} color={color}/>
                    )
                }}
            />

        </Drawer>
    );
}