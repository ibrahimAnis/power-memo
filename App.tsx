import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Toaster } from 'sonner-native';
import SplashScreen from "./screens/SplashScreen"
import AuthScreen from "./screens/AuthScreen"
import HomeScreen from "./screens/HomeScreen"
import CreateDeckScreen from "./screens/CreateDeckScreen"
import DeckDetailScreen from "./screens/DeckDetailScreen"
import StudyScreen from "./screens/StudyScreen"
import StatsScreen from "./screens/StatsScreen"
import CreateCardScreen from "./screens/CreateCardScreen"

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#4A90E2',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'My Decks' }}
      />
      <Stack.Screen 
        name="CreateDeck" 
        component={CreateDeckScreen}
        options={{ title: 'Create Deck' }}
      />
      <Stack.Screen 
        name="DeckDetail" 
        component={DeckDetailScreen}
        options={{ title: 'Deck Details' }}
      />
      <Stack.Screen 
        name="Study" 
        component={StudyScreen}
        options={{ title: 'Study' }}
      />
      <Stack.Screen 
        name="Stats" 
        component={StatsScreen}
        options={{ title: 'Statistics' }}
      />
      <Stack.Screen 
        name="CreateCard" 
        component={CreateCardScreen}
        options={{ title: 'Create Card' }}
      />
    </Stack.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Toaster />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    userSelect: "none"
  }
});