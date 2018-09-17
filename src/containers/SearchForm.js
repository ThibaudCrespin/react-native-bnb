import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class SearchForm extends Component {
    static navigationOptions = {
        title: 'Recherche'
    };

    render() {
        return (
            <View>
                <Text>Ceci est un formulaire de recherche</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});

export default SearchForm;