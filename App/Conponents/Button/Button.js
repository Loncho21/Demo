import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../Style/colors';

const Button = ({text, solid, height, width,textSize}) =>{
    return(
        <TouchableOpacity style={[solid?Styles.button_Solid:Styles.button, {width:width, height:height}]}>
            <Text style={[solid?Styles.button__Solid__Text:Styles.button__Text,{fontSize:textSize}]}>{text}</Text>
        </TouchableOpacity>
    )
}
export default Button;

const Styles = StyleSheet.create({
    button:{
        borderColor:'#FFFFFF',
        borderWidth:1,
        borderRadius:5,
        width:80,
        height:30,
        justifyContent:"center",
        alignItems:"center"
    },
    button__Text:{
        color:'#FFFFFF'
    },
    button_Solid:{
        borderColor:colors.ORANGEPRIMARY,
        backgroundColor:colors.ORANGEPRIMARY,
        borderWidth:1,
        borderRadius:7,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        elevation:2      
    },
    button__Solid__Text:{
        color:colors.BLACKPRIMARY,
        fontWeight:"bold"
    }
});