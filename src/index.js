import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import Home from './Pages/Home';
import Account from './Pages/Account';
import Chat from './Pages/Chat';
import Receive from './Pages/Receive';
import Pay from './Pages/Pay';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        switch (route.name) {
                            case 'Home':
                                iconName = 'home';
                                break;

                            case 'Account':
                                iconName = 'coins'
                                break;

                            case 'Chat':
                                iconName = 'comment'
                                break;

                            case 'Receive':
                                iconName = 'sign-in-alt'  
                                break;  

                            case 'Pay':
                                iconName = 'arrows-alt-h'
                                break;    

                            default:
                                iconName = 'circle';
                                break;
                        }
                        return <Icon name={iconName} size={size} color={color} />
                    }
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Account" options={{ title: 'Conta' }} component={Account} />
                <Tab.Screen name="Chat" options={{ title: 'Chat-Bank' }} component={Chat} />
                <Tab.Screen name="Receive" options={{ title: 'Receber' }} component={Receive} />
                <Tab.Screen name="Pay" options={{ title: 'Pagar' }} component={Pay} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}