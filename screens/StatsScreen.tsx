import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StatsScreen() {
  const stats = {
    totalCards: 156,
    cardsLearned: 98,
    averageStreak: 7.5,
    totalStudyTime: '23h 45m',
    retention: '85%',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Learning Stats</Text>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Ionicons name="library-outline" size={24} color="#4A90E2" />
          <Text style={styles.statNumber}>{stats.totalCards}</Text>
          <Text style={styles.statLabel}>Total Cards</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="checkmark-circle-outline" size={24} color="#34C759" />
          <Text style={styles.statNumber}>{stats.cardsLearned}</Text>
          <Text style={styles.statLabel}>Cards Learned</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="flame-outline" size={24} color="#FF9500" />
          <Text style={styles.statNumber}>{stats.averageStreak}</Text>
          <Text style={styles.statLabel}>Avg. Streak</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="time-outline" size={24} color="#FF2D55" />
          <Text style={styles.statNumber}>{stats.totalStudyTime}</Text>
          <Text style={styles.statLabel}>Study Time</Text>
        </View>
      </View>

      <View style={styles.retentionCard}>
        <Text style={styles.retentionTitle}>Memory Retention</Text>
        <Text style={styles.retentionRate}>{stats.retention}</Text>
        <Text style={styles.retentionSubtitle}>Keep up the good work!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  statCard: {
    width: '50%',
    padding: 8,
  },
  statCardInner: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  retentionCard: {
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  retentionTitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  retentionRate: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginVertical: 8,
  },
  retentionSubtitle: {
    fontSize: 16,
    color: '#34C759',
  },
});