import React, { Component } from 'react';
import { ListView, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
            <ListView
                contentContainerStyle={styles.container}
                enableEmptySections={true}
                dataSource={this.props.housings}
                renderRow={(row) =>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('detail', { id: row.listing.id })}>
                        <HousingListItem housing={row}></HousingListItem>
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
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return {
        housings: ds.cloneWithRows(state.housingList)
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchHousings }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HousingList);