import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Styles from './Styles'

const Header = () => {
    return(
        <View style={Styles.Header__Container}>
            <View style={Styles.Header__Container__Icons}>
                <Icon name={'archive'} size={30} color={'#FFFFFF'}/>
                <Icon name={'search'} size={30} color={'#FFFFFF'}/>
            </View>
            <View>
                <Image source={require('../../assets/logo.png')} />
            </View>
            <View style={Styles.Header__Container__Icons}>
                <Icon name={'bell'} size={30} color={'#FFFFFF'}/>
                <Icon name={'navicon'} size={30} color={'#FFFFFF'}/>                
            </View>
        </View>
    )
}

export default Header;