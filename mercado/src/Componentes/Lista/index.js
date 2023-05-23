import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ItemLista from './AppItem';
import { getItems } from '../Database';
import estilos from './estilos';

export default function Lista({ route, navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(items => setItems(items));
  }, [route]);

  return (
    <View style={estilos.container}>
      <StatusBar style="light" />
      <Text style={estilos.title}>Lista de Produtos</Text>
      <ScrollView
        style={estilos.scrollContainer}
        contentContainerStyle={estilos.itemsContainer}>
        {items.map(item => {
          return (
            <ItemLista
              key={item.id}
              id={item.id}
              item={`${item.nome} - ${item.valor} - ${item.qtd}`}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
