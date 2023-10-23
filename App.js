import React from "react";

//Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Screens
import Home from './Components/Home';
import Book_Details from './Components/Book_Details';
import Add_Book from './Components/Add_Book';

/*
export const RootStackParamList = {
  Home: {sort: 'latest' | 'top'} | undefined,
  Book_Details: { BookId: String},
  Add_Book: undefined
};
*/

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Book_Details" component={Book_Details} />
        <Stack.Screen name="Add_Book" component={Add_Book} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

