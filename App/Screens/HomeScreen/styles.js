import {StyleSheet ,Platform} from 'react-native'
import colors from '../../Style/colors'
import { color } from 'react-native-reanimated';


const Styles = StyleSheet.create({
    HomeScreen__Container: {
       flex:1,
       backgroundColor:colors.BLACKPRIMARY,
       marginTop: Platform.OS==='android'? 60:40,
    },
    HomeScreen__Container__SectionMovie:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:  'row',
        marginHorizontal:18
    },
    HomeScreen__Container__SectionTrailers:{
        marginLeft:20
    },
    HomeScreen__Container__SectionTrailerTitle:{
       color:colors.WHITEPRIMARY,
       fontSize: 20,
       fontWeight:'bold'
    }

})
export default Styles;