import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Juegos() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona el juego</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Juego1")}>
          <Text style={styles.buttonText}>Preguntas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Juego2")}>
          <Text style={styles.buttonText}>Sopa de Letras</Text>
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
    marginBottom: 16, // Add margin bottom to each button for spacing
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
