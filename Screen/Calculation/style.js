import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#E8A700',
        alignItems: 'center',
        width: '100%',
        height:'100%',
        },

        stroke1: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10%',
            borderStyle: 'solid',
            borderColor: 'black',
            borderRadius: 20,
            borderWidth: 3,
            backgroundColor: 'transparent',
            alignItems: 'center',
            width: 350,
            height: '80%',
            position:'absolute'
        },

        stroke2: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10%',
            borderStyle: 'solid',
            borderColor: 'white',
            borderRadius: 20,
            borderWidth: 4,
            backgroundColor: 'transparent',
            alignItems: 'center',
            width: 350,
            height: '80%',
            position: 'absolute',
            boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.15)'
        },

        input: {

           backgroundColor: 'white',
           borderRadius: 8,
           width: 250,
           height: 43,
           marginBottom: 65,
           fontSize: 18,
           boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)'
        },

        consultar: {
            color: 'white',
            backgroundColor: 'black',
            borderRadius: 8
        },

        Text: {
            fontSize: 24,
            padding: 2,
        },

        Button: {
            fontWeight: 700,
            fontSize: 20,
            padding: 10,
            color: 'white'
        },

        gasolina: {
            marginBottom: 3,
            marginTop: 20,

        }
    }
)