import React from 'react'
import { View, Image, Text} from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './styles'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation()
  
  function handleGoBack() {
    navigation.navigate('Landing')
  }
    
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode='contain'/>
        </BorderlessButton>
        <Image source={logoImg} resizeMode='contain'/>
      </View> 
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header