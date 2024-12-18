import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default function Ajustes({ navigation }) {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Ajustes</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Ajustes1")}>
              <Text style={styles.buttonText}>Cambio de Nombre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Ajustes2")}>
              <Text style={styles.buttonText}>Cambio de Contraseña</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 32,
    },
    buttonContainer: {
      width: "80%",
      gap: 16,
    },
    button: {
      backgroundColor: "#EC5B2A",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontSize: 18,
    },
  });
