import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import SafeViewAndroid from '../components/SafeViewAndroid'
import { Feather } from '@expo/vector-icons'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>11</Text>
        <Text style={styles.feels}>Feels like 8</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 13</Text>
          <Text style={styles.highLow}>Low: 11</Text>
        </View>
      </View>

      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny with light breeze</Text>
        <Text style={styles.message}>You do not need a jacket</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    paddingRight: 25,

    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather
