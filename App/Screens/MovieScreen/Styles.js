import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../Style/colors';
import { color } from 'react-native-reanimated';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height

const Styles = StyleSheet.create({
    container:{
        width:Width,
        height: Height,
        backgroundColor: colors.BLACKPRIMARY
    },
    container__SecctionMovie:{
        width:Width,
        height:(70/100)*Height
    },
    container__SecctionMovie__BtnBack:{
        marginHorizontal:20,
        position:"absolute",
        top:0,
        left:0,
        borderRadius:50
    },
    container__SecctionMovie__ActsBtn:{
        height:'50%',
        width:'100%',
        justifyContent:"center",
        alignItems:"center"
    },
    container__SecctionMovie__ActsBtnPlay:{
        width:80,
        height:80,
        borderRadius:50,
        backgroundColor:colors.ORANGEPRIMARY,
        justifyContent:"center",
        alignItems:"center",
    },
    leftarrow:{
        marginLeft:5,
        borderTopWidth: 12,
        borderRightWidth: 0,
        borderBottomWidth: 12,
        borderLeftWidth: 15,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: colors.BLACKPRIMARY,
    },
    container__SecctionMovie__Info:{
        height:'50%',
        width:'90%',
        marginHorizontal:20
    },
    container__SecctionMovie__Info__Text:{
        color:colors.WHITEPRIMARY,
        fontSize:13
    },
    container__SecctionMovie__Info__TextTitle:{
        color:colors.WHITEPRIMARY,
        fontSize:25
    },
    container__SecctionMovie__Info__Score:{
        justifyContent:"space-between",
        flexDirection:"row"
    },
    container__SecctionMovie__Info__ScoreText:{
        color:colors.ORANGEPRIMARY,
        fontSize:18
    },
    container__SecctionMovie__Info__ScoreResu:{
        borderWidth:1,
        borderColor:colors.ORANGEPRIMARY,
        width:30,
        borderRadius:5,
        fontSize:15,
        textAlign:"center"
    },
    MovieScreen__SectionCast:{
        width:Width,
        height:(40/100)*Height,
        marginLeft:20
    },
    MovieScreen__TextTitle:{
        color:colors.WHITEPRIMARY,
        fontSize:20,
        fontWeight:"bold"
    }
    
});
export default Styles;