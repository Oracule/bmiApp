import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button } from 'react-native';

export default function App() {

  const[height,setHeight]= useState(null);
  const[weigth,setWeigth]= useState(0);
  const[result,setResult]=useState(0);
  const calbmi=()=>{
  const heighForm = height/100;
  let bmi = weigth/(heighForm*heighForm);
  bmi = bmi.toFixed(2);
  setResult(bmi);

}
  return (
    <View style={styles.container}>
      <Text>Add your heigth in cm</Text>
    <TextInput 
 style={styles.inputStyle}
  value={height}
onChangeText={text =>setHeight(text)
 }/>
 <Text>Add your weigth in tone</Text>
 <TextInput 
 style={styles.inputStyle}
 value={weigth}
onChangeText={text =>setWeigth(text)}
 />
 <TouchableOpacity onPress={calbmi} style={styles.ButtobPress}>Calculate BMI </TouchableOpacity>
    
    
    <Text style={{fontSize:30,marginVertical:20}}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtobPress:{
    textAlign:'center',
    marginTop:30,
    backgroundColor:'white',
    borderRadius:20,
    paddingHorizontal:5,
    paddingVertical:10,
    width:'100%',
    fontSize:16,

  },
  inputStyle:{
    textAlign:'center',
    marginTop:6,
    backgroundColor:'white',
    borderRadius:20,
    paddingHorizontal:10,
    paddingVertical:14,
    width:'100%',
    fontSize:16,
},
  container: {
    flex: 1,
    backgroundColor: '#0099cc',
    alignItems: 'center',
    justifyContent: 'center',
    padding:50,
  },
});
