import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';

const openQuestions = [
  { id: 1, question: 'Completa la oración: __ es el dios de la guerra.', answer: 'Huitzilopochtli' },
  { id: 2, question: 'Traduce al español: "Tlalticpac es el mundo."', answer: 'Mundo' },
  { id: 3, question: 'Completa la oración: La __ ilumina la noche.', answer: 'luna' },
  { id: 4, question: 'Traduce al español: "Cihuatl es mujer."', answer: 'Mujer' },
  { id: 5, question: 'Completa la oración: El __ es el rey de los animales.', answer: 'jaguar' },
];

const multipleChoiceQuestions = [
  {
    question: 'Completa la oración: La noche es __.',
    options: ['roja', 'negra', 'verde', 'blanca'],
    correct: 'negra',
  },
  {
    question: 'Traduce al español: "Aztlan es lugar de las garzas."',
    options: ['Ciudad', 'Templo', 'Montaña', 'Lugar de las garzas'],
    correct: 'Lugar de las garzas',
  },
  {
    question: 'Completa la oración: La montaña __ alta.',
    options: ['es', 'es muy', 'está', 'es una'],
    correct: 'es',
  },
  {
    question: 'Traduce al español: "Quetzal es un ave hermosa."',
    options: ['Río', 'Ave', 'Montaña', 'Flor'],
    correct: 'Ave',
  },
  {
    question: 'Completa la oración: El río __ rápido.',
    options: ['fluye', 'es', 'se mueve', 'es muy'],
    correct: 'fluye',
  },
];

export default function Nivel9({ navigation }) {
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
        Alert.alert('¡Felicidades!', `Has completado el Nivel 9 con una puntuación de ${score + 1}/${openQuestions.length + multipleChoiceQuestions.length}.`, [
          { text: 'OK', onPress: () => navigation.navigate('Niveles', { level9Completed: true }) },
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
      <Text style={styles.title}>Nivel 9</Text>
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
