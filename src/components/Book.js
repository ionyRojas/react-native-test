import React from 'react'
import { StyleSheet, Text, View, Button, Linking, Alert, Image } from 'react-native';

import { colors, padding, fonts } from './_base'

const Book = (props) => {
    const { image, author, description, url } = props
    return (
        <View style={styles.bookContainer}>
            <View style={styles.bookHeaderContainer}>

                <View style={styles.bookImage}>
                    <Image
                        style={{ width: 60, height: 90 }}
                        source={{ uri: image }}
                    />
                </View>
                <View style={styles.bookAuthor}>
                    <Text>
                        By
                        <Text style={styles.bookAuthorText}>
                            {author}
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={styles.bookDescriptionContainer}>
                <Text> {description} </Text>
            </View>
            <View style={styles.bookButtonsContainer}>
                <Button
                    title="check on Amazon"
                    onPress={() => {
                        Linking.openURL({ url })
                            .catch(error => {
                                Alert.alert("oh snap!", "something went wrong!")
                            })
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bookContainer: {
        flex: 1,
        alignSelf: 'stretch'
    },
    bookHeaderContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.primary
    },
    bookImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookAuthor: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookAuthorText: {
        fontSize: fonts.lg
    },
    bookDescriptionContainer: {
        flex: 3,
        padding: padding.sm,
        backgroundColor: colors.background
    },
    bookButtonsContainer: {
        height: 50,
        flexDirection: 'column',
        // backgroundColor: 'blue',
        flexDirection: 'column'
    }
})

export default Book;