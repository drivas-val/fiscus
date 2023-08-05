import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SavingScreen from './src/screens/SavingScreen';
import CheckerScreen from './src/screens/CheckerScreen/CheckerScreen';
import BudgetScreen from './src/screens/BudgetScreen';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={require('./assets/homeIcon.png')} resizeMode='contain' style={{width:25, height:25, tintColor: focused ? "red" : "blue"}}/>
            </View>
          ),
        }}/>
        <Tab.Screen name='SavingScreen' component={SavingScreen}/>
        <Tab.Screen name='CheckerScreen' component={CheckerScreen}/>
        <Tab.Screen name='BudgetScreen' component={BudgetScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
