import react from "react";
import {Text, TouchableOpacity, View, StyleSheet, Button, Image} from 'react-native';
import styles from  './style.js';
import title from '../../assets/Título.png';


export default function Index({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.strokeHome}></View>
            <View style={styles.strokeHome2}>
            <Image style={styles.title} source={require('../../assets/Título.png')}/>
                <Text style={styles.apresentation}>Oi! Quer descobrir se vale mais a pena gasolina ou etanol?</Text>

            <TouchableOpacity style={styles.cliqueAqui}onPress={() => navigation.navigate('Calculation')}>
            <Text style={styles.ButtonText}>CLIQUE AQUI</Text>
            </TouchableOpacity>
            </View>


      </View>
    )
 

    }