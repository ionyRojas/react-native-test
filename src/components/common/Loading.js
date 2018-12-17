import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';

import { colors, padding, fonts } from '../_base'

const Loading = (props) => {
    const { isLoading } = props
    return (
        isLoading ? (

            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    size="large"
                    color={colors.secondary}
                />
            </View>
        )
            : false
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        padding: padding.md
    },
})

export default Loading;