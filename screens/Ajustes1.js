import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { getAuth, updateProfile } from "firebase/auth";

export default function Ajustes1() {
  const [newName, setNewName] = useState('');

  // Función para guardar el cambio de nombre en Firebase
  const handleChangeName = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user && newName.trim()) {
      // Actualizar el nombre del usuario en Firebase
      updateProfile(user, {
        displayName: newName
      })
        .then(() => {
          // Confirmación de cambio exitoso
          Alert.alert("Éxito", "El nombre ha sido actualizado correctamente.");
          setNewName('');  // Limpiar el campo de texto
        })
        .catch((error) => {
          // Manejar errores
          Alert.alert("Error", "No se pudo actualizar el nombre.");
          console.error(error);
        });
    } else {
      Alert.alert("Error", "Por favor, ingresa un nombre válido.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cambio de Nombre</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nuevo nombre"
        value={newName}
        onChangeText={setNewName}
      />

      <TouchableOpacity style={styles.button} onPress={handleChangeName}>
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
  input: {
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
