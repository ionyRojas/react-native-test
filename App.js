import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Book from './src/components/Book'
// import Category from './src/components/Category'
// import Categories from './src/components/Categories'
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/components/screens/HomeScreen'
import CategoriesScreen from './src/components/screens/CategoriesScreen'
import CategoryScreen from './src/components/screens/CategoryScreen'
import BookScreen from './src/components/screens/BookScreen'

import { colors, padding } from './src/components/_base'

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Categories: {
      screen: CategoriesScreen
    },
    Category: {
      screen: CategoryScreen
    },
    Book: {
      screen: BookScreen
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: colors.normalText,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)