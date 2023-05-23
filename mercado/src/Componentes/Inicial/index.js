import React from 'react';
import {Image, Text, View, Pressable } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import icone from '../../../assets/cadastro.png';
import estilos from './estilos';

export default function Inicial(props) {
    return (
        <View style={estilos.conteiner}>
            <View style={estilos.box}>
                <Image style={estilos.boxIcone} source={icone} />
                <View>
                    <Text style={estilos.boxTitulo}> Mercado </Text>
                    <Text style={estilos.boxSubtitulo}> Lista de Compras </Text>
                </View>
            </View>
            <View style={estilos.boxDados}>
                <Pressable style={estilos.boxCard}
                    onPress={() => { props.navigation.navigate('Cadastro') }} >
                    <AntDesign name="adduser" size={40} color="black" />
                    <Text style={estilos.boxCardTexto}> Inserir </Text>
                </Pressable>
                <Pressable style={estilos.boxCard}
                    onPress={() => { props.navigation.navigate('Listar') }} >
                    <Feather name="list" size={40} color="black" />
                    <Text style={estilos.boxCardTexto}> Listar </Text>
                </Pressable>
            </View>
        </View>
    );
}

