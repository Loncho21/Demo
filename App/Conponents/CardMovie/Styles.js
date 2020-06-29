import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../Style/colors';

const Width = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Styles = StyleSheet.create({
    CardMovie__Container:{
        width:(85/100)*Width,
        height:(80/100)*HEIGHT,
        backgroundColor:colors.WHITEPRIMARY,
        borderRadius:20,
        margin:5
    },
    CardMovie__Container__Img:{
        flex:1,
        resizeMode:"cover",
        justifyContent: "center",
        borderRadius:20,
    },
    CardMovie__Container__Info:{
        position:'absolute',
        bottom:0,
        height:'50%',
        width:'100%',
        borderBottomEndRadius:19,
        borderBottomStartRadius:19
    },
    CardMovie__Container__Info__Details:{
        alignItems:"center"
    },
    CardMovie__Container__Info__DetailsTitle:{
        color:colors.WHITEPRIMARY,
        fontSize:30,
        textAlign:"center",
        fontWeight:'bold'    
    },
    CardMovie__Container__Info__DetailsScore:{
        flexDirection:"row"
    },
    DetailsScore_Text:{
        color:colors.ORANGEPRIMARY
    },
    DetailsScore_Text__Dot:{
        width:5, 
        height:5,
        borderRadius:50, 
        backgroundColor:colors.ORANGEPRIMARY
    },
    CardMovie__Container__Info__Acts:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:'center'    
    },
    CardMovie__Container__Info__ActsBtn:{
        borderColor:colors.WHITEPRIMARY,
        borderWidth:0.7,
        borderRadius:5,
        padding:4
    },
    CardMovie__Container__Info__ActsBtnPlay:{
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
    }

})
export default Styles;
