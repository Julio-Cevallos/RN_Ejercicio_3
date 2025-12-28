/*import {Stack} from 'expo-router';

export default function ConfiguracionLayout(){
    return(
        <Stack screenOptions={{headerTitleAlign:'center'}}>
            <Stack.Screen
                name="index"
                option={{title:'Configuracion'}}
            />

            <Stack.Screen
                name="seguridad"
                option={{title:'Seguridad'}}
            />
        </Stack>
    );
} */

import {Slot} from 'expo-router';

export default function ConfiguracionLayout(){
    return <Slot/>;
}