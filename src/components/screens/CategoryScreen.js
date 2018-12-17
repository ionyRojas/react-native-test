import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Book from './src/components/Book'
// import Category from './src/components/Category'
// import Categories from './src/components/Categories'
import { StackNavigator } from 'react-navigation';

import CategoryV2 from '../CategoryV2';

import { colors, padding } from '../_base'

export default class CategoryScren extends React.Component {
    static navigationOptions = {
        title: 'Category'
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>it's only the categories screen</Text>
                <CategoryV2
                    id={navigation.state.params.id}
                    onSelect={id => {
                        navigation.navigate('Book', { id });
                    }}
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
