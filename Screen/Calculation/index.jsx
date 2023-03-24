import react from "react";
import { useState } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Button, TextInput, Image, Alert} from 'react-native';
import styles from  './style.js';

export default function Index() {
    const[etanol,setEtanol] = useState(0);
    const[gasolina, setGasolina] = useState(0);

    function validacao(){
        if(isNaN(etanol) || isNaN(gasolina)){
          alert('Digite um número!')
          return;
        }

        if (etanol < 0 || gasolina < 0){
          alert(`Digite um número válido`)
          return;
        } 
    }
    function teste(){

        validacao()
        let resultado
        resultado = parseFloat(etanol)/parseFloat(gasolina);

        if(resultado <= 0.7){
         alert(`Etanol é a melhor opção`);
    } else if (resultado > 0.7){
         alert(`Gasolina é a melhor opção`);
    } else {
      alert('Sério, digite um número')
    }
}

    return (
        <View style={styles.container}>

            <View style={styles.stroke2}></View>
            <View style={styles.stroke1}>
                <Text style={styles.Text}>Adicione os preços:</Text>

                <Image style={styles.gasolina} source={require('../../assets/gasolina.png')}/>
                <TextInput style={styles.input}
                    keyboardType={'numeric'}
                    placeholder ='  Digite o valor da gasolina'
                    onChangeText ={(gasolina)=>{setGasolina(gasolina)}}/>

                <Image style={styles.title} source={require('../../assets/etanol.png')}/>
                <TextInput style={styles.input}
                    keyboardType={'numeric'}
                    placeholder ='  Digite o valor do etanol'
                    onChangeText ={(etanol)=>{setEtanol(etanol)}}/>

            <TouchableOpacity style={styles.consultar} onPress={teste}>
                <Text style={styles.Button}>CONSULTAR</Text>
            </TouchableOpacity>
            </View>
           


      </View>
    )
 

    }