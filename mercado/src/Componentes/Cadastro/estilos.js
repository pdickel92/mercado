import { StyleSheet } from 'react-native';
const estilos = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: 'blue',
 alignItems: 'center',
 },
 title: {
 color: '#fff',
 fontSize: 20,
 fontWeight: 'bold',
 marginTop: 50,
 },
 inputContainer: {
 flex: 1,
 marginTop: 30,
 width: '90%',
 padding: 20,
 borderRadius: 10,
 marginBottom: 20,
 alignItems: 'stretch',
 backgroundColor: '#fff'
 },
 input: {
 marginTop: 10,
 height: 60,
 borderRadius: 10,
 paddingHorizontal: 24,
 fontSize: 16,
 alignItems: 'stretch'
 },
 button: {
 marginTop: 10,
 height: 60,
 backgroundColor: 'blue',
 borderRadius: 10,
 paddingHorizontal: 24,
 fontSize: 16,
 alignItems: 'center',
 justifyContent: 'center',
 elevation: 20,
 shadowOpacity: 20,
 shadowColor: '#ccc',
 },
 buttonContainer: {
 flexDirection: "row",
 },
 buttonText: {
 marginLeft: 10,
 fontSize: 18,
 color: '#fff',
 fontWeight: 'bold',
}
});
export default estilos;