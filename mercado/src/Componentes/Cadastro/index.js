import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { deleteItem, getItems, saveItem} from '../Database';
import estilos from './estilos';

export default function Cadastro({ route, navigation }) {
    
   const id = route.params ? route.params.id : undefined;
   const [nome, setNome] = useState('');
   const [qtd, setQtd] = useState('');
   const [valor, setValor] = useState('');

   useEffect(() => {
       if (!route.params) return;
       setNome(route.params.nome);
       setQtd(route.params.qtd);
       setValor(route.params.valor);
   }, [route])

   async function Salvar() {
       const listItem = { nome, qtd: parseInt(qtd), valor: parseInt(valor) };
       saveItem(listItem, id)
           .then(response => navigation.navigate("Inicio", listItem));
   }

   function Limpar() {
       setNome('');
       setValor('');
       setQtd('');
       }

       return (
           <View style={estilos.container}>
               <Text style={estilos.title}>Cadastro de Produtos</Text>
               <View style={estilos.inputContainer}>
                   <TextInput style={estilos.input}
                       onChangeText={(text) => setNome(text)}
                       placeholder="Informe o produto" value={nome} />
                   <TextInput style={estilos.input}
                       onChangeText={(text) => setValor(text)}
                       placeholder="Informe o valor" keyboardType={'numeric'}
                       value={valor.toString()}  />
                   <TextInput style={estilos.input}
                       onChangeText={(text) => setQtd(text)}
                       placeholder="Informe a Quantidade" keyboardType={'numeric'} 
                       value={valor.toString()}/>
                   <TouchableOpacity style={estilos.button} onPress={Salvar}>

                       <View style={estilos.buttonContainer}>
                           <Feather name="save" size={22} color="white" />
                           <Text style={estilos.buttonText}>Salvar</Text>
                       </View>
                       
                   </TouchableOpacity>
                   <TouchableOpacity style={estilos.button} onPress={Limpar}>
                       <View style={estilos.buttonContainer}>
                           <MaterialIcons name="cleaning-services" size={22} color="white" />
                           <Text style={estilos.buttonText}>Limpar</Text>
                       </View>
                   </TouchableOpacity>
               </View>
               <StatusBar style="light" />
           </View>
       );
   }
