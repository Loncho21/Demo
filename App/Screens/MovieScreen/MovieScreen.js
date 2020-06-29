import React from 'react';
import {View, Text, SafeAreaView, ScrollView,ImageBackground, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons'
import colors from '../../Style/colors';
import Button from '../../Conponents/Button/Button';
import CardTrailers from '../../Conponents/CardTrailers/CardTrailers';

//Styles
import Styles from './Styles';

const data =[
    {   
        id:1,
        name:'Tim Robbins',
        url:'https://i.pinimg.com/236x/ce/85/77/ce857709cd200274d59bac781db2a2c9--tim-obrien-google-images.jpg'
    },
    {   
        id:2,
        name:'Morgan Freeman',
        url:'https://publimetro.pe/resizer/NJjNZl2TVIdOpegfNuegL4vJZXU=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/DXHHQ6FAHBA6XICQCRMYLKS2GQ.jpg'
    },
    {   
        id:3,
        name:'Bob Gunton',
        url:'https://alchetron.com/cdn/bob-gunton-f74ae15a-5b75-470a-b37a-05a4761369b-resize-750.jpeg'
    },
    {   
        id:4,
        name:'Tim Robbins',
        url:'https://i.pinimg.com/236x/ce/85/77/ce857709cd200274d59bac781db2a2c9--tim-obrien-google-images.jpg'
    },

]

const MovieScreen = ({navigation}) => {
    return(
        <SafeAreaView style={Styles.container}>
            <ScrollView style={{flex:1}}>
                <View style={Styles.container__SecctionMovie}>
                    <ImageBackground 
                        source={{uri:'https://static.rogerebert.com/uploads/review/primary_image/reviews/the-shawshank-redemption-1994/EB19940923REVIEWS40902001AR.jpg'}} 
                        style={{flex:1}}
                        resizeMode={"cover"}
                    >
                        <LinearGradient colors={['rgba(27, 28, 28, 0.6)','rgba(27, 28, 28, 0.96)','#1b1c1c']} locations={[0,0.5,0.6]} style={{flex:1}}>
                            <TouchableOpacity onPress={()=>navigation.goBack()} style={Styles.container__SecctionMovie__BtnBack}><Icon name={'arrowleft'} size={30} color={colors.WHITEPRIMARY}/></TouchableOpacity>
                            <View style={Styles.container__SecctionMovie__ActsBtn}>
                                <TouchableOpacity style={Styles.container__SecctionMovie__ActsBtnPlay}><View style={Styles.leftarrow}></View></TouchableOpacity>
                            </View>
                            <View style={Styles.container__SecctionMovie__Info}>
                                <View>
                                    <Text style={Styles.container__SecctionMovie__Info__TextTitle}>Shawshank Redemption</Text>
                                    <View style={Styles.container__SecctionMovie__Info__Score}>
                                        <Text style={Styles.container__SecctionMovie__Info__ScoreText}>4,8
                                            <Icon name={'star'} size={16} color={colors.ORANGEPRIMARY}/>
                                            <Icon name={'star'} size={16} color={colors.ORANGEPRIMARY}/>
                                            <Icon name={'star'} size={16} color={colors.ORANGEPRIMARY}/>
                                            <Icon name={'star'} size={16} color={colors.ORANGEPRIMARY}/>
                                            <Icon name={'staro'} size={16} color={colors.ORANGEPRIMARY}/>
                                        </Text>
                                        <Text>1994 2h21</Text>
                                        <Text style={[Styles.container__SecctionMovie__Info__ScoreText,Styles.container__SecctionMovie__Info__ScoreResu]}>HD</Text>
                                    </View>
                                    <Text style={Styles.container__SecctionMovie__Info__Text}>Based on a 1982 novella by the insanely prolific novelist Stephen King (Carrie, Cujo, The Stand, Misery, Pet Sematary, The Shining, Christine, and about a zillion other novels and short stories), the film was released in 1994.</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:"space-around",alignItems:'center'}}>
                                    <TouchableOpacity>
                                        <Icon name={'plus'} size={30} color={colors.WHITEPRIMARY}/>
                                        <Text style={Styles.container__SecctionMovie__Info__Text}>My List</Text>
                                    </TouchableOpacity>
                                    <Button
                                        text={'BUY TICKET'}
                                        solid
                                        textSize={18}
                                        height={60}
                                        width={150}
                                    />
                                    <TouchableOpacity>
                                        <Icon name={'addusergroup'} size={30} color={colors.WHITEPRIMARY}/>
                                        <Text style={Styles.container__SecctionMovie__Info__Text}>Invite</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>                            
                        </LinearGradient>                   
                    </ImageBackground>
                </View>
                <View style={Styles.MovieScreen__SectionCast} >
                    <Text style={Styles.MovieScreen__TextTitle}>Cast</Text>
                    <ScrollView horizontal>
                        { data.map(data =>{
                            return(
                                <CardTrailers
                                    key={data.id}
                                    title={data.name}
                                    imgurl={data.url}
                                    imgRadius={10}
                                    imgHeight={130}
                                    square
                                />
                            )
                        })
                        }
                        
                    </ScrollView>
                    
                </View>
            </ScrollView>            
        </SafeAreaView>
    )
}
export default MovieScreen;

