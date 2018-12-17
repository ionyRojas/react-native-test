import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';
// import Book from './src/components/Book'
// import Category from './src/components/Category'
// import Categories from './src/components/Categories'
import { StackNavigator } from 'react-navigation';

import Book from '../Book';

import { colors, padding } from '../_base'
import Loading from '../common/Loading'

export default class BookScreen extends React.Component {
    static navigationOptions = {
        title: 'Book'
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const { navigation } = this.props
        fetch(`https://acamicaexample.herokuapp.com/books/${navigation.state.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data
                });
            })
            .catch(error => {
                Alert.alert('oh snap!', 'something went wrong');
            })
            .finally(() => {
                this.setState({
                    loading: false
                });
            })
    }

    render() {
        let { loading, data: book } = this.state;
        const { navigation } = this.props;
        return loading ? <Loading isloading={true} /> : (
            <View style={styles.container}>
                <Text>it's only the categories screen</Text>
                <Book
                    author={book.author}
                    image={book.image}
                    description={book.description}
                    url={book.url}
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
