import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function StudyScreen() {
  const route = useRoute();
  const { deckId } = route.params || {};
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = {
    front: 'What is React Native?',
    back: 'A framework for building native apps using React',
  };

  const handleResponse = (quality: number) => {
    // Here we would implement spaced repetition algorithm
    setIsFlipped(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <Text style={styles.progressText}>Card 1 of 10</Text>
      </View>

      <TouchableOpacity 
        style={styles.card} 
        onPress={() => setIsFlipped(!isFlipped)}
        activeOpacity={0.9}
      >
        <Text style={styles.cardText}>
          {isFlipped ? currentCard.back : currentCard.front}
        </Text>
        <Text style={styles.tapHint}>Tap to {isFlipped ? 'hide' : 'show'} answer</Text>
      </TouchableOpacity>

      {isFlipped && (
        <View style={styles.buttons}>
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: '#FF3B30' }]}
            onPress={() => handleResponse(1)}
          >
            <Text style={styles.buttonText}>Hard</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: '#FFCC00' }]}
            onPress={() => handleResponse(3)}
          >
            <Text style={styles.buttonText}>Good</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: '#34C759' }]}
            onPress={() => handleResponse(5)}
          >
            <Text style={styles.buttonText}>Easy</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
    padding: 16,
  },
  progress: {
    marginBottom: 20,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 16,
    color: '#666',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  tapHint: {
    fontSize: 14,
    color: '#999',
    position: 'absolute',
    bottom: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});