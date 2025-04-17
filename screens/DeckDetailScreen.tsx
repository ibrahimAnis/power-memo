import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function DeckDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { deckId } = route.params || {};

  const cards = [
    { id: 1, front: 'What is React Native?', back: 'A framework for building native apps using React' },
    { id: 2, front: 'What is JSX?', back: 'A syntax extension for JavaScript that looks similar to XML or HTML' },
    { id: 3, front: 'What is a Component?', back: 'The building blocks of React Native UI' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{cards.length}</Text>
            <Text style={styles.statLabel}>Total Cards</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Due Today</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>85%</Text>
            <Text style={styles.statLabel}>Mastery</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.cardList}>
        {cards.map((card) => (
          <View key={card.id} style={styles.cardItem}>
            <View style={styles.cardContent}>
              <Text style={styles.cardFront} numberOfLines={2}>{card.front}</Text>
              <Text style={styles.cardBack} numberOfLines={1}>{card.back}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#4A90E2" />
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.studyButton]}
          onPress={() => navigation.navigate('Study', { deckId })}
        >
          <Text style={styles.buttonText}>Start Study</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.addButton]}
          onPress={() => navigation.navigate('CreateCard', { deckId })}
        >
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },
  header: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  cardList: {
    flex: 1,
    padding: 16,
  },
  cardItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
    marginRight: 10,
  },
  cardFront: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  cardBack: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E1E1E1',
  },
  button: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  studyButton: {
    backgroundColor: '#4A90E2',
  },
  addButton: {
    backgroundColor: '#34C759',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});