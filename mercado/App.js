import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicio from "./src/Componentes/Inicial";
import TelaLista from "./src/Componentes/Lista";
import TelaCadastro from "./src/Componentes/Cadastro";
const Stack = createStackNavigator();
export default function App() {
 return (
 <NavigationContainer >
 <Stack.Navigator>
 <Stack.Screen name="Inicio" component={TelaInicio} />
 <Stack.Screen name="Cadastro" component={TelaCadastro} />
 <Stack.Screen name="Listar" component={TelaLista} />
 </Stack.Navigator>
 </NavigationContainer>
 )
};
