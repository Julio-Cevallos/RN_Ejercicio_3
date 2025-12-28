import {Stack} from 'expo-router';

export default function UsuariosLayout(){
    return(
        <Stack screenOptions={{headerTitleAlign:'center'}}>
            <Stack.Screen
                name="index"
                option={{title:'Usuarios'}}
            />

            <Stack.Screen
                name="crear"
                option={{title:'Crear Usuario'}}
            />
        </Stack>
    );
}