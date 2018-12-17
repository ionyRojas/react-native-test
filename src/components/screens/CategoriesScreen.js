import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Book from './src/components/Book'
// import Category from './src/components/Category'
// import Categories from './src/components/Categories'
import { StackNavigator } from 'react-navigation';

import Categories from '../Categories';

import { colors, padding } from '../_base'

export default class CategoriesScren extends React.Component {
    static navigationOptions = {
        title: 'Categories'
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>it's only the categories screen</Text>
                <Categories
                    onSelect={id => (
                        navigation.navigate('Category', { id })
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondaryBackground
    },
});
