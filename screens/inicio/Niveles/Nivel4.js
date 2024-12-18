import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';

const openQuestions = [
  { id: 1, question: '¿Cómo se dice "Amigo" en náhuatl?', answer: 'Tetl' },
  { id: 2, question: '¿Cómo se dice "Corazón" en náhuatl?', answer: 'Yollotl' },
  { id: 3, question: '¿Cómo se dice "Día" en náhuatl?', answer: 'Tonalli' },
  { id: 4, question: '¿Cómo se dice "Noche" en náhuatl?', answer: 'Yohualli' },
  { id: 5, question: '¿Cómo se dice "Fuego" en náhuatl?', answer: 'Tletl' },
];

const multipleChoiceQuestions = [
  {
    question: '¿Cómo se dice "Cielo" en náhuatl?',
    options: ['Tonalli', 'Ilhuicatl', 'Mācuīlli', 'Tōnatiuh'],
    correct: 'Ilhuicatl',
  },
  {
    question: '¿Cómo se dice "Luna" en náhuatl?',
    options: ['Tonalli', 'Metztli', 'Tlatoani', 'Cualli'],
    correct: 'Metztli',
  },
  {
    question: '¿Cómo se dice "Maíz" en náhuatl?',
    options: ['Centeotl', 'Tlāloc', 'Mēxihco', 'Tletl'],
    correct: 'Centeotl',
  },
  {
    question: '¿Cómo se dice "Flor" en náhuatl?',
    options: ['Mēxihco', 'Xochitl', 'Cualli', 'Ātl'],
    correct: 'Xochitl',
  },
  {
    question: '¿Cómo se dice "Cabeza" en náhuatl?',
    options: ['Tonalli', 'Cihuatl', 'Cualli', 'Tzontecomatl'],
    correct: 'Tzontecomatl',
  },
];

export default function Nivel4({ navigation }) {
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
        Alert.alert('¡Felicidades!', `Has completado el Nivel 4 con una puntuación de ${score + 1}/${openQuestions.length + multipleChoiceQuestions.length}.`, [
          { text: 'OK', onPress: () => navigation.navigate('Niveles', { level4Completed: true }) },
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
      <Text style={styles.title}>Nivel 4</Text>
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
