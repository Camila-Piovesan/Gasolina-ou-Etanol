import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#E8A700',
        alignItems: 'center',
        width: '100%',
        height:'100%',
        },

        
        strokeHome: {
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

        strokeHome2: {
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

    title: {
        position: 'absolute',
        top: 25,
        alignItems: 'center',
    },

        apresentation: {
            fontSize: 24,
    },

    apresentation: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 250

    },

    ButtonText: {
        fontWeight: 700,
        fontSize: 20,
        padding: 10,
        color: 'white' 
    },

    cliqueAqui: {
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 8,
        marginTop: 50
    }
    }
)