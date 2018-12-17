import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Alert } from 'react-native';

import { colors, padding } from './_base'

import Loading from './common/Loading'

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
        }

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        this.setState({ loading: true }, () => {
            fetch('https://acamicaexample.herokuapp.com/categories')
                .then(response => response.json())
                .then(data => {
                    this.setState({ data })
                })
                .catch(error => {
                    Alert.alert('ohhh snap!!', 'somethinr went wrong')
                })
                .finally(() => {
                    this.setState({ loading: false })
                })
        })
    }

    render() {

        const { data, loading } = this.state
        const { onSelect } = this.props;
        return (
            <View style={styles.CategoryContainer}>
                <Loading isLoading={loading} />
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={
                        ({ item }) => (
                            <TouchableHighlight
                                underlayColor={colors.primary}
                                style={styles.lisItem}
                                onPress={onSelect.bind(this, item.id)}
                            >
                                <Text>{item.name}</Text>
                            </TouchableHighlight>
                        )
                    }
                />
            </View>
        )
    }
}

Categories.propTypes = {
    onSelect: PropTypes.func
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

export default Categories;