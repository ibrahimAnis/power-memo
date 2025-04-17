import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { toast } from 'sonner-native';

export default function CreateCardScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { deckId } = route.params || {};
  
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const handleCreate = () => {
    if (!front.trim() || !back.trim()) {
      toast.error('Please fill in both sides of the card');
      return;
    }

    // Here we would save the card
    toast.success('Card created successfully!');
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.form}>
          <Text style={styles.label}>Front</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={front}
            onChangeText={setFront}
            placeholder="Enter the question..."
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />

          <Text style={styles.label}>Back</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={back}
            onChangeText={setBack}
            placeholder="Enter the answer..."
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />

          <TouchableOpacity style={styles.button} onPress={handleCreate}>
            <Text style={styles.buttonText}>Create Card</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  form: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F5F6F7',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  textArea: {
    height: 120,
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});