import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import Book from './src/components/Book'
// import Category from './src/components/Category'
// import Categories from './src/components/Categories'
import { StackNavigator } from 'react-navigation';
import CategoryV2 from '../CategoryV2';

import { colors, padding } from '../_base'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'RN Books'
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Button
                    title='check the categories'
                    onPress={() => {
                        navigation.navigate('Categories')
                    }}
                />
                <CategoryV2
                    id='0'
                    limit={3}
                    disableInfiniteScroll={true}
                    onSelect={id => {
                        navigation.navigate('Book', { id })
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
