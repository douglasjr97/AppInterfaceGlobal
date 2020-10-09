import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const HelloWorldApp = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       }}>
//       <Text>Hello, world!</Text>
//     </View>
//   )
// }

export default class App extends Component{
  render(){
  return(
    <View style={styles.container}>

      <Text style={styles.texto}>Bem-vindo ao Nerak</Text>
    </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'purple',
    alignItems: 'center'
  },

  texto: {
    color: 'white',
    justifyContent: 'center',
    fontSize: 30
    
  }
});

//export default HelloWorldApp;
