import React from 'react';
import { View , Text, ImageBackground, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons';
import Styles from './Styles';

//color App
import colors from '../../Style/colors';

const CardMovie = ({onPress}) => {
    return(
        <View style={Styles.CardMovie__Container}>
            <ImageBackground 
                source={{uri:'https://i.pinimg.com/originals/a2/5b/4a/a25b4ae8e03c4b2ebd06d861a082956a.jpg'}}
                imageStyle={{ borderRadius: 20 }}
                style={Styles.CardMovie__Container__Img}
            >
                <View style={Styles.CardMovie__Container__Info}>
                    <LinearGradient colors={['transparent','rgba(27, 28, 28, 0.96)','#1b1c1c']} locations={[0,0.5,0.6]} style={{flex:1}}>
                        <View style={Styles.CardMovie__Container__Info__Details } >
                            <Text style={Styles.CardMovie__Container__Info__DetailsTitle} >
                                Shawshank Redemption
                            </Text>
                            <View style={Styles.CardMovie__Container__Info__DetailsScore}>
                                <Text style={Styles.DetailsScore_Text}>4,5</Text>
                                <Icon name={'star'} size={20} color={colors.ORANGEPRIMARY} />
                                <Icon name={'star'} size={20} color={colors.ORANGEPRIMARY} solid/>
                                <Icon name={'star'} size={20} color={colors.ORANGEPRIMARY} solid/>
                                <Icon name={'star'} size={20} color={colors.ORANGEPRIMARY} solid/>
                            </View>
                            <Text style={{color:colors.WHITEPRIMARY}}>Prision <View style={Styles.DetailsScore_Text__Dot}></View> Adventure <View style={Styles.DetailsScore_Text__Dot}></View> Drama </Text>
                        </View>
                        <View style={Styles.CardMovie__Container__Info__Acts}>
                            <TouchableOpacity style={Styles.CardMovie__Container__Info__ActsBtn}><Text style={{color:colors.WHITEPRIMARY}}>See later</Text></TouchableOpacity>
                            <TouchableOpacity onPress={onPress} style={Styles.CardMovie__Container__Info__ActsBtnPlay}><View style={Styles.leftarrow}></View></TouchableOpacity>
                            <TouchableOpacity style={Styles.CardMovie__Container__Info__ActsBtn}><Text style={{color:colors.WHITEPRIMARY}}>More Info</Text></TouchableOpacity>
                        </View>
                    </LinearGradient>
                </View>
            </ImageBackground>
        </View>
    )
}
export default CardMovie;