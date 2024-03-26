// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { TransactionsScreen } from './src/TransactionsScreen';
import { SummaryScreen } from './src/SummaryScreen';
import { TransactionsDetailScreen } from './src/TransactionsDetailScreen';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const staticData = [
  {
    name: "Starbucks",
    address: "123 Main St",
    price: 19.99,
    date: "2024-03-25"
  },
  {
    name: "Apple Store ",
    address: "456 Elm St",
    price: 29.99,
    date: "2024-03-24"
  },
  {
    name: "Surbdur",
    address: "789 Oak St",
    price: 39.99,
    date: "2024-03-23"
  },
  {
    name: "Water",
    address: "1011 Pine St",
    price: 49.99,
    date: "2024-03-22"
  },
  {
    name: "Tim Houston",
    address: "1213 Maple St",
    price: 59.99,
    date: "2024-03-21"
  },
  {
    name: "Nike",
    address: "1415 Cedar St",
    price: 69.99,
    date: "2024-03-20"
  },
  {
    name: "Rice",
    address: "1617 Walnut St",
    price: 79.99,
    date: "2024-03-19"
  },
  {
    name: "Beans",
    address: "1819 Birch St",
    price: 89.99,
    date: "2024-03-18"
  },
  {
    name: "Shoe",
    address: "2021 Oakwood St",
    price: 99.99,
    date: "2024-03-17"
  },
  {
    name: "Skirt",
    address: "2223 Pineview St",
    price: 109.99,
    date: "2024-03-16"
  }
];



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => {
  console.log("Home", staticData)
  const TransactionIcon = ({color, size}) => {
    return (
    <Ionicons name="newspaper" size={size} color={color} />
    )
  }
  const SummaryIcon = ({color, size}) => {
    return (
    <MaterialCommunityIcons name="information" size={size} color={color}/>
    );
  }
  return ( 
    <Tab.Navigator>
      <Tab.Screen name="Transactions List"
        component={TransactionsScreen} 
        initialParams={{ staticData: staticData }}
        options={{tabBarIcon:TransactionIcon}}
      />
      <Tab.Screen name="Summary"
        component={SummaryScreen}
        initialParams={{ staticData: staticData }}
        options={{tabBarIcon:SummaryIcon}}
      />
    </Tab.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Transaction Detail" component={TransactionsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

