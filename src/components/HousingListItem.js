import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Stars from './Stars'; 

class HousingListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.housing}>
                <Image style={styles.image} source={{uri: this.props.housing.listing.picture.picture}}/>
                <View style={styles.details}>
                    <Text style={styles.category}>{this.props.housing.listing.space_type.toUpperCase()} - {this.props.housing.listing.guest_label.toUpperCase()}</Text>
                    <Text style={styles.title}>{this.props.housing.listing.name}</Text>
                    <Text style={styles.price}>{this.props.housing.pricing_quote.rate.amount_formatted} par nuit</Text>
                    <Stars size={10} stars={this.props.housing.listing.star_rating}></Stars>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    housing: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginVertical: 5,
        backgroundColor: '#d3d3d3'
    },
    details: {
        paddingHorizontal: 10,
        paddingBottom: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 15
    },
    category: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'brown',
    },
    image: {
        borderRadius: 3,
        width: 338,
        height: 150,
        marginBottom: 5
    },
    price: {
        marginBottom: 5
    }
});

export default HousingListItem;