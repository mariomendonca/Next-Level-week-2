import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

import Landing from '../pages/landing'
import giveClasses from '../pages/giveClasses'
import GiveClasses from '../pages/giveClasses'
import StudyTabs from './StudyTabs'
const {Navigator, Screen} = createStackNavigator()

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing"component={Landing}/>
        <Screen name="GiveClasses"component={GiveClasses}/>
        <Screen name="Study" component={StudyTabs}/>
      </Navigator>
    </NavigationContainer>
  )
}