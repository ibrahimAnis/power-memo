import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [decks] = useState([
    { id: 1, title: 'Spanish Vocabulary', cards: 50, dueCards: 12 },
    { id: 2, title: 'JavaScript Concepts', cards: 30, dueCards: 5 },
    { id: 3, title: 'World History', cards: 75, dueCards: 20 },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.deckList}>
        {decks.map((deck) => (
          <TouchableOpacity
            key={deck.id}
            style={styles.deckCard}
            onPress={() => navigation.navigate('DeckDetail', { deckId: deck.id })}
          >
            <View style={styles.deckInfo}>
              <Text style={styles.deckTitle}>{deck.title}</Text>
              <Text style={styles.deckStats}>
                {deck.cards} cards · {deck.dueCards} due today
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#4A90E2" />
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => navigation.navigate('CreateDeck')}
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },
  deckList: {
    flex: 1,
    padding: 16,
  },
  deckCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  deckInfo: {
    flex: 1,
  },
  deckTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  deckStats: {
    fontSize: 14,
    color: '#666',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});