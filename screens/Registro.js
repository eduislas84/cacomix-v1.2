import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from "react-native";

import appFirebase from "../credenciales";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const auth = getAuth(appFirebase);

export default function Registro() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistro = () => {
        if (!name || !email || !password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return updateProfile(user, { displayName: name });
        })
        .then(() => {
            Alert.alert('Registro', 'Usuario registrado correctamente');
            setName('');
            setEmail('');
            setPassword('');
        })
        .catch((error) => {
            Alert.alert('Error', error.message);
        });
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>
        <TextInput style={styles.input} placeholder="Nombre" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Correo" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry={true} />
        <TouchableOpacity style={styles.button} onPress={handleRegistro}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        borderRadius: 5,
        width: '80%',
    },
    button: {
        backgroundColor: '#EC5B2A',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '80%',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
