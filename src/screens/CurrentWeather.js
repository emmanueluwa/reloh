import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import SafeViewAndroid from '../components/SafeViewAndroid'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = () => {
  const {
    container,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>11</Text>
        <Text style={feels}>Feels like 8</Text>

        <RowText
          containerStyles={highLowWrapper}
          messageOne={'High: 13'}
          messageTwo={'Low: 11'}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>

      <RowText
        containerStyles={bodyWrapper}
        messageOne={'Its sunny with light breeze'}
        messageTwo={weatherType['Drizzle'].message}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
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
