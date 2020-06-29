import React from 'react';
import {View,Text ,Image} from 'react-native';
import Styles from './Style';

const CardTrailers = ({title,imgurl,square,imgRadius,imgWidth,imgHeight}) => {
    return(
        <View style={square?Styles.CardTrailers__Content__Square:Styles.CardTrailers__Content}>
            <View style={Styles.CardTrailers__ContentImg}>
                <Image 
                    source={{uri:imgurl}}
                    style={[Styles.CardTrailers__ContentImg__Img,{borderRadius:imgRadius,width:imgWidth,height:imgHeight}]}
                    resizeMode={"cover"}
                />
            </View>
            <Text style={Styles.CardTrailers__Content__TextTitle}>{title}</Text>
        </View>
    )
}
export default CardTrailers;
