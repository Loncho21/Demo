import { StyleSheet, Dimensions,Platform } from 'react-native';
import colors from '../../Style/colors';

const Width = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    Header__Container: {
        backgroundColor:colors.BLACKPRIMARY,
        width:Width,
        height: Platform.OS==='android'? 60:40,
        position:'absolute',
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:"center",
        top:0,
    },
    Header__Container__Icons:{
        flexDirection:'row',
        justifyContent:"space-around",
        width:'30%'
    }
})

export default Styles;