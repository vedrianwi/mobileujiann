import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

//import screen
import Home from '../screen/home'
import Profile from '../screen/profile';
import globalScreen from '../screen/global'

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={globalScreen} />
            <Drawer.Screen name="Account" component={Profile} />
            
        </Drawer.Navigator>
    )
}

export default DrawerNav;