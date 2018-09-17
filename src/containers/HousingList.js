import React, { Component } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HousingListItem from '../components/HousingListItem';
import { fetchHousings } from '../actions/housings';

class HousingList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Liste des logements',
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('search')}>
                    <Image style={styles.image} source={require('../images/search.png')}/>
                </TouchableOpacity>
            ),
        }
	};

    componentWillMount() {
        this.props.fetchHousings();
    }

    render() {
        return (
            <FlatList
                contentContainerStyle={styles.container}
                enableEmptySections={true}
                data={this.props.housings}
                keyExtractor={item => item.listing.id.toString()}
                renderItem={({item}) =>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('detail', { id: item.listing.id })}>
                        <HousingListItem housing={item}></HousingListItem>
                    </TouchableOpacity>}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    image: {
        marginHorizontal: 10,
        height: 25,
        width: 25
    }
});

const mapStateToProps = (state) => {
    return {
        housings: state.housingList
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchHousings }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HousingList);