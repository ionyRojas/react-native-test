import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

import { colors, padding } from './_base'

const Category = (props) => {
    const { image, author, description, url } = props
    return (
        <View style={styles.CategoryContainer}>
            <FlatList
                data={
                    [
                        { name: 'Category1', id: 1 },
                        { name: 'Category2', id: 2 },
                    ]
                }
                keyExtractor={item => item.id}
                renderItem={
                    ({ item }) => (
                        <TouchableHighlight
                            underlayColor={colors.primary}
                            style={styles.lisItem}
                            onPress={() => {
                                console.log('press')
                            }}
                        >
                            <Text>{item.name}</Text>
                        </TouchableHighlight>
                    )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    CategoryContainer: {
        flex: 1,
        alignSelf: 'stretch'
    },
    lisItem: {
        flex: 1,
        padding: padding.md,
        backgroundColor: colors.background
    }
})

export default Category;