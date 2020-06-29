import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Header from '../../Conponents/Header/Header';
import Styles from './styles';
import CardMovie from '../../Conponents/CardMovie/CardMovie';
import CardTrailers from '../../Conponents/CardTrailers/CardTrailers'

const HomeScreen = ({navigation}) =>{

    const DataTrilers = [
        {
            id: 1,
            title:'Marriage Story',
            url:'https://pulpfictioncine.com/download/multimedia.normal.9b41aa3590146b6a.4d617272696167652053746f727920506f737465725f6e6f726d616c2e6a7067.jpg'
        },
        {
            id: 2,
            title:'Interstellar',
            url:'https://media.metrolatam.com/2018/01/23/interstellarfeat-1200x800.jpg'
        },
        {
            id: 3,
            title:'Last on earth',
            url:'https://cloudimages.broadwayworld.com/columnpic10/6808D2CF9B7-ACD4-4A25-896C65D5F1640A61.jpg'
        },
        {
            id: 4,
            title:'Marriage Story',
            url:'https://pulpfictioncine.com/download/multimedia.normal.9b41aa3590146b6a.4d617272696167652053746f727920506f737465725f6e6f726d616c2e6a7067.jpg'
        },
    ]

    return(
        <SafeAreaView style={Styles.HomeScreen__Container}>
            <ScrollView style={{flex:1}}>
                <ScrollView horizontal >
                    <View style={Styles.HomeScreen__Container__SectionMovie}>
                        <CardMovie onPress={()=>navigation.navigate('Movie')}/>
                        <CardMovie/>
                        <CardMovie/>
                    </View>                    
                </ScrollView>
                <View style={Styles.HomeScreen__Container__SectionTrailers}>
                    <Text style={Styles.HomeScreen__Container__SectionTrailerTitle} >
                        New Trailers
                    </Text>
                    <ScrollView horizontal>     
                        {DataTrilers.map(DataTrilers => {
                            return(
                                <CardTrailers
                                    key={DataTrilers.id}
                                    title={DataTrilers.title}
                                    imgurl={DataTrilers.url}
                                    imgRadius={50}
                                    imgRadius={100}
                                    imgHeight={100}
                                /> 
                            )
                        })}                                              
                    </ScrollView> 
                </View>                               
            </ScrollView>            
        </SafeAreaView>
    )

}

export default HomeScreen;