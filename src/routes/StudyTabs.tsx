import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import TeacherList from '../pages/teacherList'
import Favorites from '../pages/favorires'

const { Navigator, Screen} = createBottomTabNavigator()

export default function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style:{
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        inactiveTintColor: '#c1bccc',
        activeBackgroundColor: '#ebebf5',
        activeTintColor: '#32264d'
      }}
    >
      <Screen 
        name='TeacherList' 
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size}) => {
            return (
              <Ionicons 
                name='ios-easel'
                size={size} color={color}/>
            )
          }
        }}/>
      <Screen 
        name='Favorites' 
        component={Favorites} 
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size}) => {
            return (
              <Ionicons 
                name='ios-heart'
                size={size} color={color}/>
            )
          }
        }}/>
    </Navigator>
  )
}