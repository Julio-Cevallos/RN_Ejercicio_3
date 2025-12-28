import {Tabs} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';

export default function Layout(){
    return(
        <Tabs 
            screenOptions={{
                headerTitleAlign: 'center',
            }}
        >
            <Tabs.Screen 
                name="index" 
                options={{
                    title:'Home',
                    tabBarIcon: ({color, size})=>(
                        <Ionicons name='home' size={size} color={color}/>
                    )
                }}
            />

            <Tabs.Screen 
                name="perfil" 
                options={{
                    title:'Perfil',
                    tabBarIcon: ({color, size})=>(
                        <Ionicons name='person' size={size} color={color}/>
                    )
                }}
            />

            <Tabs.Screen 
                name="acerca" 
                options={{
                    title:'Acerca',
                    tabBarIcon: ({color, size})=>(
                        <Ionicons name='information-circle' size={size} color={color}/>
                    )
                }}
            />
        </Tabs>
    );
}