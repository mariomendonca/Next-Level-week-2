import React from 'react'
import {View } from 'react-native'

import styles from './styles'
import Header from '../../components/PageHeader'

export default function Favorites(){
  return (
    <View style={styles.container}>
      <Header title='Proffys favoritos'/>
    </View>
    )
}