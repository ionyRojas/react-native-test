import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Alert } from 'react-native';


import { colors, padding } from './_base'

import Loading from './common/Loading'

class CategoryV2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
            page: props.page || 1,
            limit: props.limit || 15,
            noMore: props.disableInfiniteScroll || false,
        }

        this.getData = this.getData.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const { page, limit, noMore } = this.state;
        const { id } = this.props;
        this.setState({ loading: true }, () => {
            fetch(`https://acamicaexample.herokuapp.com/books?category_id=${id}&_page=${page}&_limit=${limit}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        data: [...this.state.data, ...data],
                        noMore: noMore || data.length < limit
                    })
                })
                .catch(error => {
                    Alert.alert('ohhh snap!!', 'somethinr went wrong')
                })
                .finally(() => {
                    this.setState({ loading: false })
                })
        })
    }

    loadMore() {
        const { page, loading, noMore } = this.state
        if (loading, noMore) return
        this.setState({
            page: page + 1
        }, () => {
            this.getData()
        })
    }

    render() {

        const { data, loading } = this.state
        const { onSelect } = this.props

        return (
            <View style={styles.CategoryContainer}>
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
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={
                        <Loading isLoading={loading} />
                    }
                />
            </View>
        )
    }
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

CategoryV2.propTypes = {
    id: PropTypes.string.isRequired,
    limit: PropTypes.number,
    page: PropTypes.number,
    disableInfiniteScroll: PropTypes.bool,
    onSelect: PropTypes.func,
}

export default CategoryV2;