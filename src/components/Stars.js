import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

class Stars extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let stars = [];
        let style = {
            height: this.props.size,
            width: this.props.size,
            tintColor: 'orange',
            borderColor: 'gray'
        }
        for(let i = 0; i < 5; i++){
            let image = <Image style={style} key={i} source={require('../images/star-active.png')}/>;
            if(i >= this.props.stars){
                style = {
                    height: this.props.size,
                    width: this.props.size,
                    tintColor: 'darkgray' 
                }
                image = <Image style={style} key={i} source={require('../images/star.png')}/>;
            }
            stars.push(image);
        }
        return (
            <View style={styles.stars}>
                {stars}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row'
    }
});

export default Stars;