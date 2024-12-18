import React, {useState} from "react";
import { Text,StyleSheet,View,Image,TextInput,TouchableOpacity,Alert } from "react-native";

import appFirebase from '../credenciales'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

export default function Login(props) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const logueo = async() => {
        try {
            await signInWithEmailAndPassword(auth,email,password)
            Alert.alert('Iniciando Sesion','Accediendo...')
            props.navigation.navigate('Home')
        } catch (error) {
            console.log(error);
            Alert.alert('Error','Usuario o contraseña incorrectos')
        }
    }

    const Registro = () => {
        props.navigation.navigate('Registro')
    }

    return (
      <View style={styles.padre}>
        
        <View>
            <Image source={require('../assets/icon.png')} style={styles.profile} />
        </View>

        <View style={styles.tarjeta}>
            <View style={styles.cajaTexto}>
                <TextInput placeholder="correo@gmail.com" style={{paddingHorizontal:15}} 
                onChangeText={(text)=>setEmail(text)} />
            </View>
            <View style={styles.cajaTexto}>
                <TextInput placeholder="contrseña" style={{paddingHorizontal:15}} 
                onChangeText={(text)=>setPassword(text)} secureTextEntry={true} />
            </View>

            <View style={styles.PadreBoton}>
                <TouchableOpacity style={styles.cajaBoton} onPress={logueo} >
                    <Text style={styles.textoBoton}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Registro}>
                <TouchableOpacity style={styles.RegistroBoton} onPress={Registro}>
                    <Text>¿No tienes cuenta? Registrate</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    padre:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'wwhite'
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: 'white'
    },
    tarjeta: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    cajaTexto: {
        paddingVertical: 20,
        backgroundColor: '#cccccc90',
        borderRadius: 30,
        marginVertical: 10
    },
    PadreBoton: {
        alignItems: 'center'
    },
    cajaBoton: {
        backgroundColor: '#EC5B2A',
        borderRadius:30,
        paddingVertical: 20,
        width:150,
        marginTop:20
    },
    textoBoton: {
        color: 'white',
        textAlign: 'center'
    },   
    Registro:{
        color: 'blue',
        textAlign: 'center',
        marginTop: 20
    },
    RegistroBoton: {
        color: 'blue',
        textAlign: 'center',
        marginTop: 20
    }
});