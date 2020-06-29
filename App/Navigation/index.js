import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Header
import Header from '../Conponents/Header/Header';

//Screens
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import MovieScreen from '../Screens/MovieScreen/MovieScreen';
  
const Stack = createStackNavigator();
  
const AppNavigator = () => {
  return (
    <SafeAreaProvider>
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home" 
            component={HomeScreen}
            options={{
              header: ({navigation, scene, previous}) => {
                const {options} = scene.descriptor;
                const title =
                  options.headerTitle !== undefined
                    ? options.headerTitle
                    : options.title !== undefined
                    ? options.title
                    : scene.route.name;
                return (
                  <Header/>
                );
              },
            }}
          />
          <Stack.Screen
            name="Movie"
            component={MovieScreen}
            options={{headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>  
    </SafeAreaProvider>     
  );
}
 

export default AppNavigator;