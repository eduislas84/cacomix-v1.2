import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';

const openQuestions = [
  { id: 1, question: 'Traduce al español: "Cualli tonalli".', answer: 'Buen día' },
  { id: 2, question: 'Traduce al español: "Tlahtolli in chīchīltik".', answer: 'Palabra del perro' },
  { id: 3, question: 'Traduce al español: "Nimitztlazohtla".', answer: 'Te amo' },
  { id: 4, question: 'Traduce al español: "In tepetl".', answer: 'La montaña' },
  { id: 5, question: 'Traduce al español: "Amo xtoka" (Amo niquiza).', answer: 'No llores (No salgas)' },
];

const multipleChoiceQuestions = [
  {
    question: 'Traduce al náhuatl: "La flor es roja".',
    options: ['Xochitl tlatikpak', 'Xochitl tlatik', 'Xochitl chīchīltik', 'Xochitl quiahuitl'],
    correct: 'Xochitl chīchīltik',
  },
  {
    question: 'Traduce al náhuatl: "El agua es vital".',
    options: ['Ātl cualli', 'Ātl teotl', 'Ātl tonalli', 'Ātl mictlān'],
    correct: 'Ātl cualli',
  },
  {
    question: 'Traduce al español: "In cihuātl tlahtolli".',
    options: ['La mujer habla', 'La palabra de la mujer', 'La mujer camina', 'La palabra del hombre'],
    correct: 'La palabra de la mujer',
  },
  {
    question: 'Traduce al náhuatl: "El sol es brillante".',
    options: ['Tonalli tlahtolli', 'Tonalli quetzalcoatl', 'Tonalli cualli', 'Tonalli tlatikpak'],
    correct: 'Tonalli cualli',
  },
  {
    question: 'Traduce al español: "Ni yohualli tonalli".',
    options: ['Soy la noche y el día', 'Soy la lluvia y el sol', 'Soy el agua y la tierra', 'Soy el viento y el fuego'],
    correct: 'Soy la noche y el día',
  },
];

export default function Nivel5({ navigation }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);

  const handleNextQuestion = (userAnswer) => {
    const question = currentQuestionIndex < 5 ? openQuestions[currentQuestionIndex] : multipleChoiceQuestions[currentQuestionIndex - 5];
    const correctAnswer = currentQuestionIndex < 5 ? question.answer.toLowerCase() : question.correct.toLowerCase();

    if (userAnswer.trim().toLowerCase() === correctAnswer) {
      setScore(score + 1);
      if (currentQuestionIndex < openQuestions.length + multipleChoiceQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswer('');
      } else {
        Alert.alert('¡Felicidades!', `Has completado el Nivel 5 con una puntuación de ${score + 1}/${openQuestions.length + multipleChoiceQuestions.length}.`, [
          { text: 'OK', onPress: () => navigation.navigate('Niveles', { level5Completed: true }) },
        ]);
      }
    } else {
      Alert.alert('Respuesta incorrecta', `La respuesta correcta es "${question.answer || question.correct}". Inténtalo de nuevo.`);
    }
  };

  const renderQuestion = () => {
    if (currentQuestionIndex < 5) {
      const question = openQuestions[currentQuestionIndex];
      return (
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{question.question}</Text>
          <TextInput
            style={styles.input}
            value={answer}
            onChangeText={setAnswer}
          />
          <Button title="Siguiente" onPress={() => handleNextQuestion(answer)} />
        </View>
      );
    } else {
      const question = multipleChoiceQuestions[currentQuestionIndex - 5];
      return (
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{question.question}</Text>
          {question.options.map((option, i) => (
            <TouchableOpacity key={i} style={styles.optionButton} onPress={() => handleNextQuestion(option)}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nivel 5</Text>
      {renderQuestion()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  questionContainer: {
    width: '100%',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  optionButton: {
    backgroundColor: '#EC5B2A',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontSize: 18,
  },
});
