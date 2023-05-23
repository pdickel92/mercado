import { StyleSheet } from "react-native";
const estilos = StyleSheet.create({
 conteiner:{
 flex:1,
 },
 boxDados: {
 padding: 30,
 flexDirection: 'row',
 flexWrap: 'wrap',
 justifyContent: "space-between"
 },
 boxCard: {
 backgroundColor: '#ddf2ed',
 minWidth: 150,
 alignItems: "center",
 paddingVertical: 10,
 paddingHorizontal: 20,
 marginBottom: 10,
 borderWidth: 1,
 borderColor: '#101010',
 borderRadius: 5,
 },
 boxCardTexto: {
 color: '#00a79d',
 fontSize: 16,
 box: {
    backgroundColor: '#00a79d',
    paddingVertical: 50,
    paddingHorizontal: 10,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    },
    boxIcone: {
    width: 100,
    height: 100,
    borderRadius: 70,
    borderColor: '#fff',
    borderWidth: 1,
    marginRight: 15
    },
    boxTitulo: {
    color: '#fff',
    fontWeight: "700",
    fontSize: 18,
    textTransform: "uppercase",
    },
    boxSubtitulo: {
    color: '#fff',
    },
    },
    });
    export default estilos;


