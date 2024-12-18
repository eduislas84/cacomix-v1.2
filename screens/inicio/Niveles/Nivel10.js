import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';

const openQuestions = [
  { id: 1, question: 'Completa la oración: El __ ilumina el día.', answer: 'sol' },
  { id: 2, question: 'Traduce al español: "Tlahuizcalli es amanecer."', answer: 'Amanecer' },
  { id: 3, question: 'Completa la oración: El __ se oculta en la noche.', answer: 'sol' },
  { id: 4, question: 'Traduce al español: "Mētztli es luna."', answer: 'Luna' },
  { id: 5, question: 'Completa la oración: La __ cae sobre el suelo.', answer: 'lluvia' },
];

const multipleChoiceQuestions = [
  {
    question: 'Completa la oración: La flor es __.',
    options: ['roja', 'azul', 'verde', 'amarilla'],
    correct: 'roja',
  },
  {
    question: 'Traduce al español: "Xochitl es flor."',
    options: ['Flor', 'Árbol', 'Hojas', 'Ramas'],
    correct: 'Flor',
  },
  {
    question: 'Completa la oración: El viento es __.',
    options: ['fuerte', 'suave', 'ligero', 'caliente'],
    correct: 'fuerte',
  },
  {
    question: 'Traduce al español: "Ehecatl es viento."',
    options: ['Lluvia', 'Viento', 'Nieve', 'Granizo'],
    correct: 'Viento',
  },
  {
    question: 'Completa la oración: El río __ por el valle.',
    options: ['fluye', 'corre', 'salta', 'vuela'],
    correct: 'fluye',
  },
];

export default function Nivel10({ navigation }) {
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
        Alert.alert('¡Felicidades!', `Has completado el Nivel 10 con una puntuación de ${score + 1}/${openQuestions.length + multipleChoiceQuestions.length}. ¡Has terminado todos los niveles!`, [
          { text: 'OK', onPress: () => navigation.navigate('Niveles', { level10Completed: true }) },
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
      <Text style={styles.title}>Nivel 10</Text>
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
