import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Importa Ionicons de Expo
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

export default function Ajustes2({ navigation }) { // Asegúrate de recibir 'navigation' como prop
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña

    // Función para cambiar la contraseña
    const handleChangePassword = () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (newPassword === confirmPassword) {
            if (user && currentPassword.trim() && newPassword.trim()) {
                // Necesitamos reautenticar al usuario para cambiar la contraseña
                const credential = EmailAuthProvider.credential(user.email, currentPassword);
                
                reauthenticateWithCredential(user, credential)
                .then(() => {
                    // Actualizar la contraseña en Firebase
                    updatePassword(user, newPassword)
                    .then(() => {
                        // Confirmación de cambio exitoso
                        Alert.alert("Éxito", "La contraseña ha sido actualizada correctamente.");
                        setCurrentPassword('');  // Limpiar campo de contraseña actual
                        setNewPassword('');      // Limpiar campo de nueva contraseña
                        setConfirmPassword('');  // Limpiar campo de confirmación
                        navigation.navigate('Home'); // Redirigir a la pantalla de Home
                    })
                    .catch((error) => {
                        // Manejar errores de actualización de contraseña
                        Alert.alert("Error", "No se pudo actualizar la contraseña.");
                        console.error(error);
                    });
                })
                .catch((error) => {
                    // Error en la reautenticación
                    Alert.alert("Error", "La contraseña actual es incorrecta.");
                    // No es necesario console.error(error) aquí para evitar mostrar el mensaje de error de Firebase
                });
            } else {
                Alert.alert("Error", "Por favor, completa todos los campos.");
            }
        } else {
            Alert.alert("Error", "Las contraseñas no coinciden.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cambio de Contraseña</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Contraseña actual"
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="grey" />
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Nueva contraseña"
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="grey" />
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Confirmar nueva contraseña"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="grey" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
                <Text style={styles.buttonText}>Guardar cambio</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
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
