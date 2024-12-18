import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Juego1() {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    // Español a Nahuatl
    { question: "¿Cómo se dice 'Tierra' en náhuatl?", answer: "tlalli" },
    { question: "¿Cómo se dice 'Agua' en náhuatl?", answer: "atl" },
    { question: "¿Cómo se dice 'Sol' en náhuatl?", answer: "tonatiuh" },
    { question: "¿Cómo se dice 'Luna' en náhuatl?", answer: "metztli" },
    { question: "¿Cómo se dice 'Fuego' en náhuatl?", answer: "tlachinolli" },
    { question: "¿Cómo se dice 'Viento' en náhuatl?", answer: "ehecatl" },
    { question: "¿Cómo se dice 'Perro' en náhuatl?", answer: "itzcuintli" },
    { question: "¿Cómo se dice 'Gato' en náhuatl?", answer: "miquizcatl" },
    { question: "¿Cómo se dice 'Montaña' en náhuatl?", answer: "tepētl" },
    { question: "¿Cómo se dice 'Mujer' en náhuatl?", answer: "cihuatl" },

    // Nahuatl a Español
    { question: "¿Cómo se dice 'tlakatl' en español?", answer: "hombre" },
    { question: "¿Cómo se dice 'chichi' en español?", answer: "perro" },
    { question: "¿Cómo se dice 'tepetl' en español?", answer: "montaña" },
    { question: "¿Cómo se dice 'xochitl' en español?", answer: "flor" },
    { question: "¿Cómo se dice 'mama' en español?", answer: "madre" },
    { question: "¿Cómo se dice 'cuauhtli' en español?", answer: "águila" },
    { question: "¿Cómo se dice 'yancuic' en español?", answer: "nuevo" },
    { question: "¿Cómo se dice 'ayotl' en español?", answer: "tortuga" },
    { question: "¿Cómo se dice 'atl' en español?", answer: "agua" },
    { question: "¿Cómo se dice 'tlakatl' en español?", answer: "persona" },
  ];

  const checkAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (inputValue.toLowerCase() === currentQuestion.answer) {
      Alert.alert("¡Correcto!", "Has resuelto la pregunta");
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setInputValue(""); // Limpiar la respuesta
      } else {
        Alert.alert("¡Felicidades!", "Has completado todas las preguntas.");
        navigation.navigate("Home");
      }
    } else {
      Alert.alert("Error", `La respuesta correcta era: ${currentQuestion.answer}`);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pregunta</Text>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu respuesta"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity style={styles.button} onPress={checkAnswer}>
        <Text style={styles.buttonText}>Comprobar</Text>
      </TouchableOpacity>
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
    marginBottom: 16,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    width: "80%",
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#EC5B2A",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
