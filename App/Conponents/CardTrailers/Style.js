import {StyleSheet} from 'react-native';
import colors from '../../Style/colors';

const Styles = StyleSheet.create({
    CardTrailers__Content:{
        marginVertical:10,
        width:100,
        marginRight:30 
    },
    CardTrailers__ContentImg:{
        marginVertical:5
    },
    CardTrailers__ContentImg__Img:{
        width:100,
        height:100
    },
    CardTrailers__Content__TextTitle:{
        color:colors.WHITEPRIMARY,
        textAlign:"center",
        fontSize:14
    },
    CardTrailers__Content__Square:{
        marginVertical:10,
        height:160,
        width:100,
        marginRight:30 
    }    
});
export default Styles;