import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Stars from '../components/Stars';
import { fetchHousingDetail } from '../actions/housings';

class HousingDetail extends Component {
    static navigationOptions = {
        title: 'Détails du logement'
    };

    componentWillMount() {
        this.props.fetchHousingDetail(this.props.navigation.state.params.id);
	}

    render() {
        if (this.props.housing) {
            console.log(this.props.housing);
            const { listing, pricing_quote } = this.props.housing;
            return (
                <View style={styles.housing}>
                    <Image style={styles.image} source={{uri: listing.picture_url}}/>
                    
                    <View style={styles.description}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{listing.name}</Text>
                            <Text style={styles.city}>({listing.city})</Text>
                        </View>
                        <Text style={styles.textBold}>{listing.space_type} - {listing.guest_label}</Text>
                        <Text style={styles.text}>Hôte: {listing.user.first_name !== ' ' ? listing.user.first_name : 'Inconnu'}</Text>
                        <View style={styles.ratingAndPrice}>
                            <Stars size={35} stars={listing.star_rating}></Stars>
                            <Text style={styles.text}>
                                <Text style={styles.price}>
                                    {pricing_quote.rate.amount_formatted}
                                </Text> / nuit</Text>
						</View>
                    </View>
                </View>
            );
        }
        return null;
    }
}

const styles = StyleSheet.create({
    description: {
        paddingHorizontal: 10,
        paddingBottom: 10 
    },
    titleContainer: {
        flexDirection: 'column',
        marginVertical: 15
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    city: {
        fontWeight: 'normal',
        fontSize: 14,
        color: '#aaa'
    },
    text: {
        fontSize: 15,
        marginVertical: 5
    },
    textBold: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    image: {
        width: 360,
        height: 200,
    },
    ratingAndPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },
    price: {
        fontWeight: 'bold',
        fontSize: 25
    }
});

const mapStateToProps = (state) => ({
    housing: state.housingDetail
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ fetchHousingDetail }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HousingDetail);